import './App.css'
import PlanetSlide from './PlanetSlide'
import { Center } from '@mantine/core';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

function App() {

  const exampleData = [
   {
      "_id":{
         "$oid":"621ff30d2a3e781873fcb65c"
      },
      "name":"Mercury",
      "orderFromSun":1,
      "hasRings":false,
      "mainAtmosphere":[
         
      ],
      "surfaceTemperatureC":{
         "min":-173,
         "max":427,
         "mean":67
      }
   },
   {
      "_id":{
         "$oid":"621ff30d2a3e781873fcb65d"
      },
      "name":"Uranus",
      "orderFromSun":7,
      "hasRings":true,
      "mainAtmosphere":[
         "H2",
         "He",
         "CH4"
      ],
      "surfaceTemperatureC":{
         "min":null,
         "max":null,
         "mean":-197.2
      }
   },
   {
      "_id":{
         "$oid":"621ff30d2a3e781873fcb65e"
      },
      "name":"Mars",
      "orderFromSun":4,
      "hasRings":false,
      "mainAtmosphere":[
         "CO2",
         "Ar",
         "N"
      ],
      "surfaceTemperatureC":{
         "min":-143,
         "max":35,
         "mean":-63
      }
   },
   {
      "_id":{
         "$oid":"621ff30d2a3e781873fcb65f"
      },
      "name":"Neptune",
      "orderFromSun":8,
      "hasRings":true,
      "mainAtmosphere":[
         "H2",
         "He",
         "CH4"
      ],
      "surfaceTemperatureC":{
         "min":null,
         "max":null,
         "mean":-201
      }
   },
   {
      "_id":{
         "$oid":"621ff30d2a3e781873fcb660"
      },
      "name":"Jupiter",
      "orderFromSun":5,
      "hasRings":true,
      "mainAtmosphere":[
         "H2",
         "He",
         "CH4"
      ],
      "surfaceTemperatureC":{
         "min":null,
         "max":null,
         "mean":-145.15
      }
   },
   {
      "_id":{
         "$oid":"621ff30d2a3e781873fcb661"
      },
      "name":"Earth",
      "orderFromSun":3,
      "hasRings":false,
      "mainAtmosphere":[
         "N",
         "O2",
         "Ar"
      ],
      "surfaceTemperatureC":{
         "min":-89.2,
         "max":56.7,
         "mean":14
      }
   },
   {
      "_id":{
         "$oid":"621ff30d2a3e781873fcb662"
      },
      "name":"Venus",
      "orderFromSun":2,
      "hasRings":false,
      "mainAtmosphere":[
         "CO2",
         "N"
      ],
      "surfaceTemperatureC":{
         "min":null,
         "max":null,
         "mean":464
      }
   },
   {
      "_id":{
         "$oid":"621ff30d2a3e781873fcb663"
      },
      "name":"Saturn",
      "orderFromSun":6,
      "hasRings":true,
      "mainAtmosphere":[
         "H2",
         "He",
         "CH4"
      ],
      "surfaceTemperatureC":{
         "min":null,
         "max":null,
         "mean":-139.15
      }
   }
]

  return (
    <AliceCarousel 
      // autoPlay
      mouseTracking
      infinite
      animationDuration={1000}
      disableButtonsControls
      // autoPlayInterval={1000}
      items=
      {exampleData.map((planet, i) => {
        return(
          <PlanetSlide key={i} planet={planet} />
        )
      })} />
  )
}

export default App
