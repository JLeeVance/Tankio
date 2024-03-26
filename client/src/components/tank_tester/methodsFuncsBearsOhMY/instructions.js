import {
    Box,
    Button,
    Dialog,
    DialogContent,
    DialogContentText,
    DialogTitle,
    DialogActions,
    Divider,
    Typography,
    Grid,
    Container
} from '@mui/material'
import { useState } from 'react'

function Instructions({ onInstructionsClose }){

    const [ open, setOpen ] = useState(true)

    function handleClose(){
        setOpen(false)
        onInstructionsClose()
    }


    return(
       <Dialog
       open={open}
       maxWidth='xl'
       sx={{maxHeight:'100%'}}
       onClose={handleClose}
       >
                <DialogTitle variant='h2' textAlign={'center'} style={{color:'rgb(63, 35, 5)'}}>Welcome, to TankTester!</DialogTitle>
                <Divider style={{backgroundColor:'rgb(79, 92, 60)', height:'1.5px'}}/>
                <DialogContent>
                    <DialogContentText>
                        <Grid container alignItems='center' justifyContent='center' style={{height:'auto'}}>
                            <Grid item xs={12} sx={{paddingBottom:'3%'}}>
                                <Typography variant='subtitle1' style={{ fontSize: '1.7vh', paddingLeft:'10%', paddingRight:'10%', color:'rgb(63, 35, 5, .75)' }}>
                                Thank you for trying TankTester, your go-to tool for optimizing the health and balance of your freshwater aquarium. With TankTester, effortlessly assess the ecosystem health for a planned tank. Simply select your tank size, add some fish and plants to the tank, and see how your stocking stacks up! On average, most aquarium keepers perform a 20%-25% water change weekly out of neccesity. The water has an odor, the gunk is prevailing, and the keeper dreads the next encounter. Our goal is to educate past, current, and future freshwater aquatic hobbyists on the benefits of keeping planted aquariums, ensuring a harmonious and thriving environment for aquatic inhabitants.</Typography>
                            </Grid>

                            <Grid item xs={12} style={{maxWidth:'100%', paddingBottom:'5%'}}>
                                <Container sx={{maxWidth:'60%'}}>
                                    <Typography variant='overline' textAlign={'center'} sx={{fontSize:'1.3vh', color:'rgb(63, 35, 5, .75)'}}>
                                        * For sake of testing, all fish and plants have been assigned a value representing their impact on the tank, whether that be positive or negative. Plants are assigned their value 'per healthy clump' *
                                    </Typography>
                                </Container>

                            </Grid>


                            <Grid item xs={6} display={'flex'} flexDirection={'column'} paddingLeft={'3%'} paddingBottom={'1%'}>
                                <Typography sx={{fontSize:'1.7vh', paddingBottom:'.5%', textDecoration:'underline', color:'rgb(20, 99, 142)'}} variant='overline'>
                                    Steps
                                </Typography>
                                <Typography sx={{fontSize:'1.3vh', color:'rgb(20, 99, 142)'}} variant='overline'>
                                    1. Select your tank size
                                </Typography>
                                <Typography sx={{fontSize:'1.3vh', color:'rgb(20, 99, 142)'}} variant='overline'>
                                    2. Add your proposed fish 
                                </Typography>
                                <Typography sx={{fontSize:'1.3vh', color:'rgb(20, 99, 142)'}} variant='overline'>
                                    3. Add your proposed plants
                                </Typography>
                                <Typography sx={{fontSize:'1.3vh', color:'rgb(20, 99, 142)'}} variant='overline'>
                                    4. Run the test!
                                </Typography>
                            </Grid>

                            <Grid item xs={6}>
                                <Box>
                                    <Typography variant='subtitle1' textAlign={'center'} fontSize={'1.4vh'} paddingBottom={'2%'} style={{color:'rgb(79, 92, 60)'}}>
                                    "When I started in the hobby, I learned my lesson on balanced ecosystems the hard way, numerous times. The TankTester is a love letter to all of my lost fish."
                                    </Typography>
                                    <Grid container textAlign={'right'}>
                                        <Grid item xs={12} display={'flex'} flexDirection={'column'}>
                                            <Typography variant='overline' paddingRight={'24%'} fontSize={'1.1vh'} style={{color:'rgb(79, 92, 60)'}}>
                                                - J Vance
                                            </Typography>
                                            <Typography variant='overline' paddingRight={'10%'} fontSize={'.9vh'} style={{color:'rgb(79, 92, 60)'}}>
                                                odor-free water since '22
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>

                        </Grid>

                    </DialogContentText>
                </DialogContent>

        </Dialog>
    )
}

export default Instructions