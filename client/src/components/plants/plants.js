import { useEffect, useContext, useState } from "react"
import { OwnedPlantsContext } from "../../context/ownedplants"
import { Container } from '@mui/material'
import { DataCard } from '../datacard.js'
import { UserContext } from "../../context/user.js"

function Plants(){

    const { ownedPlants } = useContext(OwnedPlantsContext)
    const { user } = useContext(UserContext)
    const [ allPlants , setAllPlants ] = useState([])

    useEffect(() => {
        fetch('/plants')
        .then(r => r.json())
        .then(plants => setAllPlants(plants)
        )}, [])

    const type = 'plant'

    if (allPlants){
        const dataCards = allPlants.map(plant => <DataCard 
            image={plant.image} 
            common={plant.common_name} 
            scientific={plant.scientific_name} 
            id={plant.id} 
            type={type}/>)
   
        return (
            <Container>
                {dataCards}
            </Container>
        )
    }
}

export default Plants