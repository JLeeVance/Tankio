import { useEffect, useContext, useState } from "react"
import { OwnedPlantsContext } from "../../context/ownedplants"
import { DataCard } from '../datacard.js'
import { UserContext } from "../../context/user.js"
import { 
    Container,
    Typography,
    Snackbar, 
    Grid
} from '@mui/material'

function Plants({render}){

    const { user } = useContext(UserContext)
    const { ownedPlants , setOwnedPlants } = useContext(OwnedPlantsContext)

    const [ allPlants , setAllPlants ] = useState([])

    const [ openSnackBar , setOpenSnackBar ] = useState(false)
    const [ snackbarMessage , setSnackbarMessage ] = useState('')

    useEffect(() => {
        fetch('/plants')
        .then(r => r.json())
        .then(plants => setAllPlants(plants)
        )}, [])

    const type = 'plant'
    const ownedPlantIds = ownedPlants.map((ownedPlant) => ownedPlant.plant_id)

    const handleSnackbarClose = () => {
        setOpenSnackBar(false)
    }

    const addOwnedPlant = (plant_id, common) => {
        const postData = {
            'plant_id':plant_id,
            'user_id':user.id
        }
        fetch('/owned_plants' , {
            method:'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(postData)
        }).then( r => {
        if (r.status === 201){
            r.json()
            .then(newOwnedPlant => setOwnedPlants([...ownedPlants, newOwnedPlant]))
            setSnackbarMessage(`${common} has been added to your profile`)
            setOpenSnackBar(true)
            } else {
                setSnackbarMessage(`There was an error when added ${common} to your profile`)
                setOpenSnackBar(true)
            }
        })
    }

    const deleteOwnedPlant = (plant_id, common) => {
        const plantToRemove = ownedPlants.find((plant) => plant.plant_id === plant_id && plant.user_id === user.id)
        fetch(`/owned_plants/${plantToRemove.id}` , {method:'DELETE'})
        .then(r => {
            if(r.status === 204){
                const newOwnedPlants = ownedPlants.filter((plant) => plant !== plantToRemove )
                setOwnedPlants(newOwnedPlants)
                setSnackbarMessage(`${common} has been removed from your profile`)
                setOpenSnackBar(true)
            }
        })
    }
   
    const dataCards = allPlants.map(plant => {
        return (
            <Grid item xs={3} key={plant.id} >
                <DataCard
                    image={plant.image}
                    common={plant.common_name}
                    scientific={plant.scientific_name}
                    id={plant.id}
                    ownedIds={ownedPlantIds}
                    type={type}
                    addOwned={addOwnedPlant}
                    removeOwned={deleteOwnedPlant}
                    />
            </Grid>
        )
    })
   
    return (
            <Container 
                maxWidth={'xl'} 
                style={{
                    top:'10vh',
                    height:'100%',
                    overflow:'scroll',
                    position:'fixed',
                    left:'1vw',
                    right:'1vw',
                    marginTop:'3.8%',
                    backgroundColor:'rgb(255, 255, 254)'
                    }}
                >
                <Snackbar
                    open={openSnackBar}
                    autoHideDuration={2000}
                    onClose={handleSnackbarClose}
                    message={snackbarMessage}
                    anchorOrigin={{
                        vertical: 'top', 
                        horizontal: 'right'
                    }}
                    />
                <Container>
                    <Typography 
                        variant='h3' 
                        align="center" 
                        sx={{
                            marginBottom:'1.5%', 
                            marginTop:'1%', 
                            color: 'rgb(63, 35, 5)' 
                        }}
                        >
                        Aquatic Plants
                    </Typography>
                </Container>
                <Grid 
                    container 
                    spacing={3} 
                    maxWidth={'100%'} 
                    overflow='hidden' 
                    marginBottom={'15%'}
                    >
                    {dataCards}
                </Grid>
            </Container>
            )
    }

export default Plants

// FontSize per vh header / menu