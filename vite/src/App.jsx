import { useState, useEffect } from 'react'
import './App.css'
import PlanetSlide from './PlanetSlide'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import exampleData from './exampleData'

function App() {
   const [ planetData, setPlanetData ] = useState(exampleData)

   useEffect(() => {
      fetchPlanetData()
   },[])

   // const localDev = 'localhost:5000'

   const fetchPlanetData = async () => {
      try {
         let planetURL = new URL('/api/mongo', import.meta.url).href
         let req = await fetch(planetURL)
         // let req = await fetch('http://127.0.0.1:5000/api/mongo')
         let res = await req.json()
         console.log(res)
         setPlanetData(res)
      }
      catch (e) {
         console.log(e)
      }
   }

  return (
    <AliceCarousel 
      autoPlay
      mouseTracking
      infinite
      animationDuration={1000}
      disableButtonsControls
      autoPlayInterval={5000}
      items=
      {planetData.map((planet, i) => {
        return(
          <PlanetSlide key={i} planet={planet}/>
        )
      })} />
  )
}

export default App
