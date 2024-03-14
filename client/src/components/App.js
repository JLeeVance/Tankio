import React, { useEffect, useState } from "react";
import { Switch, Routes, Route } from "react-router-dom";
import Header from "./header.js";
import LogInHome from './login_signup files/login_home.js'

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
      </>
    )
  }























}

export default App;
