import { useState, useContext, useEffect } from 'react'
import { UserContext } from '../../context/user'
import { OwnedFishContext } from '../../context/ownedfish'
import { DataCard } from '../datacard'
import { Container } from '@mui/material'


function FreshwaterFish(){
    
    const [ allFish , setAllFish ] = useState([])
    const { user } = useContext(UserContext)
    const { ownedFish, setOwnedFish } = useContext(OwnedFishContext)
    
    useEffect(() => {
        fetch('/freshwater_fish')
        .then(r => r.json())
        .then(fish => setAllFish(fish))
        }, [])

    const type = 'fish'
    
    if (allFish){
        const dataCards = allFish.map(fish => <DataCard 
            image={fish.image} 
            common={fish.common_name} 
            scientific={fish.scientific_name} 
            id={fish.id} 
            type={type} />)

        return (
            <Container>
                {dataCards}
            </Container>
        )
    }
}

export default FreshwaterFish;