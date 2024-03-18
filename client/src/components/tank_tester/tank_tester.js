import { useContext, useState } from 'react'
import {
    Grid,
    Box,
    Typography,
    Divider,
    Paper,
    Button,
    Snackbar
} from '@mui/material'
import { OwnedPlantsContext } from '../../context/ownedplants'
import { OwnedFishContext } from '../../context/ownedfish'
import TankTile from './tanktile'

function TankTester(){

    const { ownedPlants } = useContext(OwnedPlantsContext)
    const { ownedFish } = useContext(OwnedFishContext)

    const [ stockedFish, setStockedFish ] = useState([])
    const [ stockedPlants, setStockedPlants ] = useState([])

    const ownedfish = ownedFish.map(fish => fish.fish)
    const ownedplants = ownedPlants.map(plant => plant.plant)
    
    const ownedFTile = ownedfish.map(fish => <TankTile key={fish.id} common={fish.common_name} number={fish.bioload}/>)

    return (
        <Grid container maxWidth={'100%'} maxHeight={'100%'} sx={{backgroundColor:'lightgrey'}}>
            <Grid item xs={12} textAlign={'center'} margin={'1%'}>
                <Typography variant='h4' sx={{textDecoration:'underline'}}>TankTester</Typography>
            </Grid>
            <Divider/>
            <Grid container maxWidth={'100%'}>
                <Grid item xs={3} textAlign={'left'}>
                    <Typography variant='h6' sx={{textDecoration:'underline', textAlign:'center'}}>Your Plants</Typography>
                </Grid>
                <Grid item xs={6}>

                </Grid>
                <Grid item xs={3} textAlign={'right'}>
                    <Typography variant='h6' sx={{textDecoration:'underline', textAlign:'center'}}>Your Fish</Typography>
                    <Box>
                        {ownedFTile}
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default TankTester