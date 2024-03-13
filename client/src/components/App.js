import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";

function App() {

  useEffect(() => {
    fetch('/freshwater_fish')
    .then(r => r.json())
    .then(fish => setFish(fish))
  }, [])

  useEffect(() => {
    fetch('/plants')
    .then(r => r.json())
    .then(plants => setAllPlants(plants))
  }, [])

  const [ fish , setFish ] = useState([])
  const [ allPlants, setAllPlants ] = useState([])

  const imgs = fish.map(fish =>  <img style={{width:100}} src={fish.image}/>)
  const imgs2 = allPlants.map(plant => <img style={{width:100}} src={plant.image} />)




  return (
    <>
      {imgs}
      {imgs2}
    </>

  );

}

export default App;
