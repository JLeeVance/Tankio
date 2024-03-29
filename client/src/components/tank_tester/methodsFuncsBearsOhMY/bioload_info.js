import {
    Box,
    Dialog,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Divider,
    Typography
} from '@mui/material'
import { useState } from 'react'

function BioloadInfo({ onDialogClose }){

    const [ open, setOpen ] = useState(true)

    function handleClose(){
        setOpen(false)
        onDialogClose()
    }

    return(
        <Dialog
            open={open}
            maxWidth='md'
            onClose={handleClose}
            sx={{
                justifyContent:'center', 
                textAlign:'center'
            }}
            >
            <DialogTitle 
                variant='h1' 
                sx={{
                    color:'rgb(20, 99, 142)', 
                    fontSize:'5.5vh'
                    }}
                >
                Understanding Bioload
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    <Box container>
                        <Typography 
                            variant='h6' 
                            sx={{
                                marginTop:'3%', 
                                color:'rgb(20, 99, 142)'
                                }}
                            >
                            WHAT
                            <Divider 
                                sx={{
                                    backgroundColor:'rgb(20, 99, 142)', 
                                    height:'.5px', 
                                    marginRight:49, 
                                    marginLeft:49, 
                                    marginBottom:3.5
                                    }}/>
                            <Typography variant='body1'>
                                In the world of aquarium keeping, every fish contributes to what is known as the "bioload" of your tank. This term refers to the amount of waste produced by the fish through respiration, digestion, and other biological processes. Just like how we generate waste in our homes, fish generate waste in their underwater environment.
                            </Typography>
                        </Typography>
                        <Typography 
                            variant='h6' 
                            sx={{
                                marginTop:'3%', 
                                color:'rgb(20, 99, 142)'
                                }}
                            >
                            WHY
                            <Divider 
                                sx={{
                                    backgroundColor:'rgb(20, 99, 142)', 
                                    height:'.5px', 
                                    marginRight:49, 
                                    marginLeft:49, 
                                    marginBottom:3.5
                                    }}/>
                            <Typography variant='body1'>
                                The bioload of your tank has a direct impact on the health and balance of your aquatic ecosystem. When fish produce waste, it releases harmful substances like ammonia into the water. If not properly managed, these substances can accumulate to toxic levels, leading to stress, illness, and even death among your fish.
                            </Typography>
                        </Typography>
                        <Typography 
                            variant='h6' 
                            sx={{
                                marginTop:'3%', 
                                marginBottom:'4.5%', 
                                color:'rgb(20, 99, 142)'
                                }}
                            >
                            HOW
                            <Divider 
                                sx={{ 
                                    backgroundColor:'rgb(20, 99, 142)', 
                                    height:'.5px', 
                                    marginRight:49, 
                                    marginLeft:49, 
                                    marginBottom:3.5
                                    }}/>
                            <Typography variant='body1'>
                                When selecting fish for your tank, it's important to choose species that are compatible with your tank size and filtration system. Some fish produce more waste than others, so it's essential to research each species' bioload and consider how it will impact your tank's ecosystem. By making informed choices, you can create a harmonious underwater world that both you and your fish will enjoy.
                            </Typography>
                        </Typography>
                    </Box>
                </DialogContentText>
            </DialogContent>
        </Dialog>
    )
}

export default BioloadInfo