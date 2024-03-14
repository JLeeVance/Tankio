import React, { useEffect, useState } from "react";
import { Route, Routes } from 'react-router-dom';
import Header from "./header.js";
import LogInHome from './login_signup files/login_home.js';
import Home from './home/home.js';
import Plants from "./plants/plants.js";
import FreshwaterFish from "./freshwater_fish/freshwater_fish.js";
import PlantByID from "./plant_by_id/plant_by_id.js";
import FishByID from "./fish_by_id/fish_by_id.js";
import TankTester from "./tank_tester/tank_tester.js";



function App() {

  // useEffect(() => {
  //   fetch('/freshwater_fish')
  //   .then(r => r.json())
  //   .then(fish => setFish(fish))
  // }, [])

  // useEffect(() => {
  //   fetch('/plants')
  //   .then(r => r.json())
  //   .then(plants => setAllPlants(plants))
  // }, [])

  // const [ fish , setFish ] = useState([])
  // const [ allPlants, setAllPlants ] = useState([])

  const [ user , setUser ] = useState(null)

  useEffect(() => {
    fetch('/check_session')
    .then(r => {
      if (r.ok){
        r.json().then(user => setUser(user))
      }
      else {
        setUser(null)
      }
    })
  }, [])
  
  if (!user){
    return (
      <>
        <Header />
        <LogInHome />
      </>
    )
  }
  else {
    return (
      <>
        <Header />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/plants' element={<Plants />} />
            <Route path='/plants/:id' element={<PlantByID  />} />
            <Route path='/freshwater_fish' element={<FreshwaterFish />} />
            <Route path='/freshwater_fish/:id' element={<FishByID  />} />
            <Route path='/tanktester' element={<TankTester  />}  />
        </Routes>
      </>
    )
  }
}

export default App;
