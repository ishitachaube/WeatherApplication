import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const[search,setsearch]= useState("Mumbai")
  const[data, setdata]=useState(null)
  const[name, setname]=useState(null)
  const[datamin, setdatamin]=useState(null)
  const[datamax, setdatamax]=useState(null)
  
  const[humidity, sethumidity]=useState(null)
  const[cloud, setcloud]=useState(null)
 
  useEffect(()=>{
  
 const printAddress = async () => {
  const a = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=4b2ba6c453df0adb53905047652c9dc6`);
 const b=await a.json()
  
  setname(b.name)
 setdata(b.main.temp)
 setdatamax(b.main.temp_max)
 setdatamin(b.main.temp_min)
 sethumidity(b.main.humidity)
 setcloud(b.clouds.all)
 //console.log(b.name);
}

printAddress()
    
},[search])
 
  return<>
        
  <div id='head'><h1>Weather App</h1></div>

  <div className='container'>
    <div id='content'>
      <h2>Enter Place</h2>
      <input type="search" onChange={(event)=>{setsearch(event.target.value)}} placeholder='eg: Mumbai'/><br />
      {/* <button>Get Update</button>   */}
    </div>
    
    {!name ? <p id='updates'>Data Not Found</p>:
   
    
       <div id='updates'>
      
    <h1>{search}</h1>
    
    <h2>{data}° Cel</h2>  
          
          <h3>Humidity-{humidity}% | Cloudiness-{cloud}%</h3> 
          <h4>{datamax}  <span>Max</span> | {datamin} <span>Min</span> </h4>
         
         
      </div> 
    }
  </div>
  </>
  }

export default App
