import React, { useEffect, useState, useContext } from "react";
import { Route, Routes } from 'react-router-dom';
import { UserContext } from "../context/user.js";
import { OwnedPlantsContext } from "../context/ownedplants.js";
import Header from "./header.js";
import LogInHome from './login_signup files/login_home.js';
import Home from './home/home.js';
import Plants from "./plants/plants.js";
import FreshwaterFish from "./freshwater_fish/freshwater_fish.js";
import PlantByID from "./plant_by_id/plant_by_id.js";
import FishByID from "./fish_by_id/fish_by_id.js";
import TankTester from "./tank_tester/tank_tester.js";
import NavBar from "./navbar.js";
import { OwnedFishContext } from "../context/ownedfish.js";



function App() {

  const { user , setUser } = useContext(UserContext)
  const { ownedPlants, setOwnedPlants } = useContext(OwnedPlantsContext)
  const { ownedFish, setOwnedFish } = useContext(OwnedFishContext)

  useEffect(() => {
    fetch('/check_session')
    .then(r => {
      if (r.ok){
        r.json().then(user => { 
          setUser(user)
          setOwnedFish(user.ownedfishes)
          setOwnedPlants(user.ownedplants)
          })
      }
      else {
        setUser(null)
      }
    })
  }, [])

  function updateUser(user){
    setUser(user)
  }

  if (!user){
    return (
      <>
        <Header />
        <LogInHome  updateUser={updateUser}/>
      </>
    )
  } else {
    console.log(user.ownedfishes)
    // setOwnedPlants(user.ownedplants)
    // setOwnedFish(user.ownedfishes)
    return (
      <>
        <Header />
        <NavBar />
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
