import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import Pokemon from '../Pokemon/Pokemon';
function App() {

  const [response, setResponseData] = useState(null);
  const [see, setSee] = useState(false);

  useEffect(()=>{
    axios.get('https://pokeapi.co/api/v2/pokemon/?limit=807&offset=0%22')
        .then(response=>{setResponseData(response.data.results)})
}, []);

  const clickHanlder = () => {
    (see === false) ? setSee(true) : setSee(false);
  }
  return (
    <>
      <button onClick={clickHanlder}>Pokemon List</button>
      <div className='pokeContenedor'>
        {(see === true)
        ? (response != null) ? response.map((element, index) => {
            return (<Pokemon element={element} key={index}/>)
          })
          : "Cargando..."
        : ""} 
      </div>
    </>
  )
}

export default App
