from flask import Flask, jsonify
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from bson.json_util import dumps
from dotenv import dotenv_values

config = dotenv_values(".env")

uri = "mongodb+srv://vkl2109:%s@cbcc.dsi7ivk.mongodb.net/?retryWrites=true&w=majority" % config['MONGOURIPW']

# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))
# Send a ping to confirm a successful connection
db = client.sample_guides

planets = db.planets

app = Flask(__name__, static_folder='../vite/dist/', static_url_path='/')

@app.route("/")
def index():
    return app.send_static_file('index.html')

@app.route("/api/mongo")
def fetch_data():
    try:
        client.admin.command('ping')
        print("Pinged your deployment. You successfully connected to MongoDB!")
        return dumps([planet for planet in planets.find()])
    except Exception as e:
        print(e)
        return e

if __name__=='__main__': 
    app.run(debug=True)