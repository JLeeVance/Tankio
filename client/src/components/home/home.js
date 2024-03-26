import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../context/user'
import { OwnedPlantsContext } from '../../context/ownedplants'
import { OwnedFishContext } from '../../context/ownedfish'
import EditAccount from './editaccount';
import Tile from './tile';
import {
    Grid,
    Typography,
    Divider,
    Button,
    Snackbar,
    Container
} from '@mui/material'

function Home(){

    const { user , setUser} = useContext(UserContext)
    const { ownedPlants , setOwnedPlants } = useContext(OwnedPlantsContext)
    const { ownedFish , setOwnedFish } = useContext(OwnedFishContext)

    const [ isEditing , setIsEditing ] = useState(false)
    const [ openSnackBar , setOpenSnackBar ] = useState(false)
    const [ snackbarMessage , setSnackbarMessage ] = useState('')

    useEffect(() => {
        setOwnedFish(user.ownedfishes)
        setOwnedPlants(user.ownedplants)
    }, [user])

    const userPlants = ownedPlants.map(plant => plant.plant)
    console.log(userPlants)
    const userFish = ownedFish.map(fish => fish.fish)
    
    let totalPlants = userPlants.length
    let totalFish = userFish.length
    
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

    const ownedFishTile = userFish.map(fish => <Tile key={fish.id} type='fish' handleRemove={handleRemove} {...fish}/>)
    const ownedPlantTile = userPlants.map(plant => <Tile key={plant.id} type='plant' handleRemove={handleRemove} {...plant}/>)

    return(
        <Grid container maxWidth={'100%'} style={{
            top:'13vh',
            height:'77vh',
            position:'fixed',
            left:'1vw',
            right:'1vw',
            marginTop:'3%',
            backgroundColor:'rgba(249, 247, 240, .4)',
            padding:'1%'
            }}
            >
            <Grid 
                item 
                xs={6} 
                sx={{ 
                    display:'flex', 
                    flexDirection:'column'
                    }}
                >
                <Typography 
                    variant='h1' 
                    fontSize={'5vh'} 
                    textAlign={'left'}
                    sx={{
                        color: 'rgb(63, 35, 5)'
                    }}
                    >
                    Welcome, {user.username}!
                </Typography>
                <Container sx={{
                    margin:'2%',
                    marginTop:'4%',
                    minHeight:'5%',
                    width:'95%'
                }}>
                    <Typography 
                        variant='h1'
                        fontSize={'1.8vh'} 
                        style={{color:'rgb(63, 35, 5)'}}
                        >
                        Bio: 
                    </Typography>
                    <Typography 
                        variant='h2'
                        fontSize={'1.7vh'} 
                        style={{
                            color:'rgb(63, 35, 5)'
                            }}
                        >
                        {user.bio === null ? 'add a bio' : user.bio}
                    </Typography>
                </Container>
                <Divider width={'98%'} style={{marginBottom:'4%', backgroundColor: 'rgb(63, 35, 5)', height: '1.75px' }}/>
                <Typography 
                    variant='overline' 
                    fontSize={'1.5vh'}
                    style={{color:'rgb(63, 35, 5)'}}
                    >
                    Total Fish: {totalFish}
                </Typography>
                <Typography 
                    variant='overline' 
                    fontSize={'1.5vh'}
                    style={{color:'rgb(63, 35, 5)'}}
                    >
                    Total Plants: {totalPlants}
                </Typography>
                <Divider width={'98%'} style={{marginBottom:'4%', backgroundColor: 'rgb(63, 35, 5)', height: '.25px' }}/>
  
                <Button 
                    onClick={handleEditClick} 
                    sx={{
                        color:'rgb(20, 99, 142)'
                        }}
                    >
                    {isEditing ? 'Close' : 'Edit Account Information'}
                </Button>
                { isEditing ? <EditAccount onSuccess={updateUser} onFail={handleFailedUpdate} user={user}/> : <></>}
            </Grid>
            <Grid 
                item 
                xs={6} 
                style={{
                    display:'flex', 
                    flexDirection:'column', 
                    overflow:'hidden', 
                    maxWidth:'80%', 
                    alignItems:'center'
                    }}
                >
                <Grid maxWidth={'90%'}>
                    <Typography 
                        variant='h1'
                        sx={{
                            fontSize:'4vh', 
                            textAlign:'center', 
                            textDecoration:'underline', 
                            marginTop:'1%', 
                            marginBottom:'1%', 
                            color:'rgb(63, 35, 5)'
                            }}
                        >
                        Your Fish
                    </Typography>
                    <Grid 
                        container 
                        item 
                        xs={12} 
                        sx={{
                            backgroundColor:'rgb(20, 99, 142, .3)', 
                            marginTop:'1.5%', 
                            overflow:'scroll', 
                            height:'33.5vh', 
                            justifyContent:'center'
                            }}
                        >
                        {ownedFishTile}
                    </Grid>
                    <Typography 
                        variant='h1' 
                        sx={{
                            fontSize:'4vh', 
                            textAlign:'center', 
                            textDecoration:'underline',
                            marginTop:'1%', 
                            marginBottom:'1%', 
                            color:'rgb(63, 35, 5)',
                            }}
                            >
                        Your Plants
                    </Typography>
                    <Grid 
                        container 
                        item xs={12} 
                        sx={{
                            backgroundColor:'RGB(118, 136, 91, .9)', 
                            marginTop:'1.5%',  
                            overflow:'scroll',  
                            height:'33.5vh', 
                            justifyContent:'center'
                            }}
                        >
                        {ownedPlantTile}
                    </Grid>
                </Grid>
            </Grid>
            <Snackbar
                open={openSnackBar}
                autoHideDuration={3000}
                onClose={handleSnackbarClose}
                message={snackbarMessage}
                anchorOrigin={{
                    vertical: 'top', 
                    horizontal: 'right'
                }}
                />
    </Grid>
    )

}

export default Home