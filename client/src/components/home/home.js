import { useContext, useState } from 'react'
import { UserContext } from '../../context/user'
import { OwnedPlantsContext } from '../../context/ownedplants'
import { OwnedFishContext } from '../../context/ownedfish'
import EditAccount from './editaccount';
import Tile from './tile';
import {
    Grid,
    Box,
    Typography,
    Divider,
    Paper,
    Button,
    Snackbar
} from '@mui/material'

function Home(){

    const { user , setUser} = useContext(UserContext)
    const { ownedPlants , setOwnedPlants } = useContext(OwnedPlantsContext)
    const { ownedFish , setOwnedFish } = useContext(OwnedFishContext)

    const [ isEditing , setIsEditing ] = useState(false)
    const [ openSnackBar , setOpenSnackBar ] = useState(false)
    const [ snackbarMessage , setSnackbarMessage ] = useState('')

    const userPlants = ownedPlants.map(plant => plant.plant)
    const userFish = ownedFish.map(fish => fish.fish)
    
    let totalPlants = userPlants.length
    let totalFish = userFish.length

    const ownedFishTile = userFish.map(fish => <Tile type='fish' handleRemove={handleRemove} {...fish}/>)
    const ownedPlantTile = userPlants.map(plant => <Tile type='plant' handleRemove={handleRemove} {...plant}/>)

    function handleEditClick(){
        setIsEditing(!isEditing)
    }

    const handleSnackbarClose = () => {
        setOpenSnackBar(false)
    }

    function updateUser(updatedUser, message){
        setSnackbarMessage(message)
        setOpenSnackBar(true)
        handleEditClick()
        setUser(updatedUser)
    }

    function handleFailedUpdate( message ){
        setSnackbarMessage(message)
        setOpenSnackBar(true)
    }

    function handleRemove(id, type, common){
        if(type === 'fish'){
            const fishToRemove = ownedFish.find((fish) => fish.fish_id === id && fish.user_id === user.id)
            fetch(`/owned_fish/${fishToRemove.id}`, {method:'DELETE'})
            .then(r => {
                if(r.status === 204){
                    const newOwnedFish = ownedFish.filter((fish) => fish !== fishToRemove)
                    setOwnedFish(newOwnedFish)
                    setSnackbarMessage(`${common} was deleted from your profile`)
                    setOpenSnackBar(true)
                } else {
                    setSnackbarMessage('There was an error')
                    setOpenSnackBar(true)
                }
            })
        }else if(type === 'plant'){
            const plantToRemove = ownedPlants.find((plant) => plant.plant_id === id && plant.user_id === user.id)
            fetch(`/owned_plants/${plantToRemove.id}`, {method:'DELETE'})
            .then(r => {
                if(r.status === 204){
                    const newOwnedPlants = ownedPlants.filter(plant => plant !== plantToRemove)
                    setOwnedPlants(newOwnedPlants)
                    setSnackbarMessage(`${common} was deleted from your profile`)
                    setOpenSnackBar(true)
                } else {
                    setSnackbarMessage('There was an error')
                    setOpenSnackBar(true)
                }
            })
        }
    }
    

    return (
        <Grid container maxWidth={'100%'} >
            <Grid item xs={6} sx={{display:'flex', flexDirection:'column'}}>
                <Typography variant='h4'>Welcome, {user.username}!</Typography>
                <Box>
                    <Typography variant='body1'>Bio: {user.bio}</Typography>
                </Box>
                <Divider/>
                <Typography variant='overline'>Total Fish: {totalFish}</Typography>
                <Typography variant='overline'>Total Plants: {totalPlants}</Typography>
                <Button onClick={handleEditClick}>Edit Account Information</Button>
                { isEditing ? <EditAccount onSuccess={updateUser} onFail={handleFailedUpdate} user={user}/> : <></>}
            </Grid>
            <Grid item xs={6} sx={{display:'flex', flexDirection:'column'}}>
                <Grid maxWidth={'100%'}>
                    <Typography variant='h4' sx={{textAlign:'center', textDecoration:'underline', marginTop:'1%', marginBottom:'1%'}}>Your Fish</Typography>
                    <Grid container item xs={12} sx={{backgroundColor:'lightgrey', marginTop:'2%', flexDirection:'column'}}>
                        {ownedFishTile}
                    </Grid>
                    <Typography variant='h4' sx={{textAlign:'center', textDecoration:'underline', marginTop:'1%', marginBottom:'1%'}}>Your Plants</Typography>
                    <Grid container item xs={12} sx={{backgroundColor:'lightgrey', marginTop:'2%', flexDirection:'column'}}>
                        {ownedPlantTile}
                    </Grid>
                </Grid>
            </Grid>
            <Snackbar
                    open={openSnackBar}
                    autoHideDuration={3000}
                    onClose={handleSnackbarClose}
                    message={snackbarMessage}
                    anchorOrigin={{vertical: 'top', horizontal: 'right'}}
                    />
        </Grid>
    )

}

export default Home