import {
    Box,
    Dialog,
    DialogContent,
    DialogContentText,
    DialogTitle,
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
                <DialogTitle 
                    variant='h2' 
                    textAlign={'center'} 
                    style={{color:'rgb(63, 35, 5)'}}
                    >
                    Welcome, to TankTester!
                </DialogTitle>
                <Divider 
                    style={{
                        backgroundColor:'rgb(79, 92, 60)', 
                        height:'1.5px'
                        }}/>
                <DialogContent>
                    <DialogContentText>
                        <Grid 
                        container 
                        alignItems='center' 
                        justifyContent='center' 
                        style={{height:'auto'}}>
                            <Grid 
                            item 
                            xs={12} 
                            sx={{paddingBottom:'3%'}}>
                                <Typography 
                                    variant='h1' 
                                    fontSize={'2.4vh'}
                                    style={{
                                        paddingLeft:'10%', 
                                        paddingRight:'10%', 
                                        color:'rgb(79, 92, 60)',
                                        textAlign:'center'
                                        }}
                                    >
                                    Thank you for choosing TankTester, your essential tool for optimizing the health and balance of your freshwater aquarium. With TankTester, you can effortlessly assess the ecosystem's health for your planned tank. Simply select your tank size, add some fish and plants, and see how your stocking stacks up!
                                </Typography>
                                <Typography
                                    variant='h1'
                                    fontSize={'1.7vh'}
                                    sx={{
                                        paddingLeft:'10%',
                                        paddingRight:'10%',
                                        marginTop:'1.70%',
                                        color:'rgb(63, 35, 5, .75)',
                                        textAlign:'center'
                                    }}
                                    >
                                    On average, most aquarium keepers perform a 20%-25% water change weekly out of necessity. When the water has an odor, and gunk prevails, the keeper dreads the next encounter. Our goal is to educate past, current, and future freshwater aquatic hobbyists on the benefits of maintaining planted aquariums, ensuring a harmonious and thriving environment for aquatic inhabitants.                                
                                </Typography>
                            </Grid>
                            <Grid 
                                item xs={12} 
                                sx={{
                                    maxWidth:'100%', 
                                    paddingBottom:'5%',
                                    alignItems:'center',
                                    justifyContent:'center'
                                }}>
                                <Container sx={{maxWidth:'100%', justifyContent:'center', alignItems:'center'}}>
                                    <Typography 
                                        variant='h3' 
                                        noWrap 
                                        sx={{
                                            fontSize:'1.1vh',
                                            color:'rgba(224, 71, 91, .95)',
                                            textAlign:'center'
                                            }}
                                        >
                                        * All fish and plants have been assigned a value representing their ecological impact. Plants are assigned their value 'per healthy clump' *
                                    </Typography>
                                </Container>
                            </Grid>
                            <Grid 
                                item 
                                xs={6} 
                                display={'flex'} 
                                flexDirection={'column'} 
                                paddingLeft={'3%'} 
                                paddingBottom={'1%'}>
                                <Typography 
                                    variant='overline'
                                    sx={{
                                        fontSize:'1.7vh', 
                                        paddingBottom:'.5%', 
                                        textDecoration:'underline', 
                                        color:'rgb(20, 99, 142)'
                                    }} 
                                    >
                                    Steps
                                </Typography>
                                <Typography 
                                    variant='overline'
                                    sx={{
                                        fontSize:'1.3vh', 
                                        color:'rgb(20, 99, 142)'
                                    }} 
                                    >
                                    1. Select your tank size
                                </Typography>
                                <Typography 
                                    variant='overline'
                                    sx={{
                                        fontSize:'1.3vh', 
                                        color:'rgb(20, 99, 142)'
                                    }} 
                                    >
                                    2. Add your proposed fish 
                                </Typography>
                                <Typography 
                                    variant='overline'
                                    sx={{
                                        fontSize:'1.3vh', 
                                        color:'rgb(20, 99, 142)'
                                    }} 
                                    >
                                    3. Add your proposed plants
                                </Typography>
                                <Typography 
                                    variant='overline'
                                    sx={{
                                        fontSize:'1.3vh', 
                                        color:'rgb(20, 99, 142)'
                                    }} 
                                    >
                                    4. Run the test!
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Box>
                                    <Typography 
                                    variant='subtitle1' 
                                    textAlign={'center'} 
                                    fontSize={'1.4vh'} 
                                    paddingBottom={'2%'} 
                                    style={{color:'rgb(79, 92, 60)'}}
                                    >
                                    "When I started in the hobby, I learned my lesson on balanced ecosystems the hard way, numerous times. The TankTester is a love letter to all of my lost fish."
                                    </Typography>
                                    <Grid container textAlign={'right'}>
                                        <Grid 
                                            item 
                                            xs={12} 
                                            display={'flex'} 
                                            flexDirection={'column'}>
                                            <Typography 
                                                variant='overline' 
                                                paddingRight={'24%'} 
                                                fontSize={'1.1vh'} 
                                                style={{color:'rgb(79, 92, 60)'}}
                                                >
                                                - J Vance
                                            </Typography>
                                            <Typography 
                                                variant='overline' 
                                                paddingRight={'10%'} 
                                                fontSize={'.9vh'} 
                                                style={{color:'rgb(79, 92, 60)'}}
                                                >
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