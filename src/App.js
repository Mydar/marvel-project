import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Navbar from '../src/Components/Navbar/navbar'

function App() {
  // const [result, setResult] = useState([])

  // useEffect(() => {
  //   axios.get('https://gateway.marvel.com:443/v1/public/comics?title=Spider-Man&apikey=439a9c3d41a12b8f8d3c988d2bd85e01')
  //   .then (res => console.log(res))
  // }, [])
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
