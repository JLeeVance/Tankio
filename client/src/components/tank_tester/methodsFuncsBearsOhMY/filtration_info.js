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

function FiltrationInfo({ onDialogClose }){

    const [ open, setOpen ] = useState(true)

    function handleClose(){
        setOpen(false)
        onDialogClose()
        
    }

    return (
        <Dialog
            open={open}
            maxWidth='md'
            onClose={handleClose}
            sx={{
                justifyContent:'center', 
                textAlign:'center'
            }}>
            <DialogTitle 
                variant='h1' 
                sx={{ 
                    color:'rgb(79, 92, 60)', 
                    fontSize:'5.5vh'
                    }}
                >
                Understanding Plant Filtration
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    <Box container>
                        <Typography 
                            variant='h6' 
                            sx={{
                                marginTop:'3%', 
                                color:'rgb(79, 92, 60, .95)'
                                }}
                            >
                            WHAT
                            <Divider 
                                sx={{
                                     marginBottom:'1%',
                                    backgroundColor:'rgb(63, 35, 5)',
                                    height:'.5px',
                                    marginRight:49,
                                    marginLeft:49,
                                    marginBottom:3.5
                                    }}/>
                            <Typography variant='body1'>
                                Plant filtration involves the use of live aquatic plants to absorb nutrients such as nitrates, ammonia, and phosphates from the water. These nutrients are essential for plant growth, and by removing them from the water, plants help prevent the buildup of harmful substances that can endanger fish health. Additionally, plants release oxygen into the water through photosynthesis, which benefits fish and other aquatic inhabitants.                       
                            </Typography>
                        </Typography>
                        <Typography 
                            variant='h6' 
                            sx={{
                                marginTop:'3%', 
                                color:'rgb(79, 92, 60, .95)'
                                }}
                                >
                            WHY
                            <Divider 
                                sx={{
                                    backgroundColor:'rgb(63, 35, 5)', 
                                    height:'.5px', 
                                    marginRight:49, 
                                    marginLeft:49, 
                                    marginBottom:3.5
                                    }}/>
                            <Typography variant='body1'>
                                Maintaining water quality is essential for the health and well-being of fish and other aquatic life. Excess nutrients and waste products can lead to water pollution, algae overgrowth, and stress-related illnesses in fish. Plant filtration provides a natural and effective way to remove these pollutants from the water, creating a cleaner and more balanced aquatic ecosystem.                          
                            </Typography>
                        </Typography>
                        <Typography 
                            variant='h6' 
                            sx={{
                                marginTop:'3%', 
                                marginBottom:'4.5%', 
                                color:'rgb(79, 92, 60, .95)'
                                }}
                            >
                            HOW
                            <Divider 
                                sx={{
                                    backgroundColor:'rgb(63, 35, 5)', 
                                    height:'.5px', 
                                    marginRight:49, 
                                    marginLeft:49, 
                                    marginBottom:3.5
                                    }}/>
                            <Typography variant='body1'>
                                Aquatic plants absorb nutrients through their roots and leaves, utilizing them for growth and photosynthesis. In the process, plants uptake nitrogen compounds like ammonia and nitrates, as well as phosphates, which are common pollutants in aquariums. By incorporating a diverse array of plant species into your tank, you can maximize the filtration capacity and create a more stable and resilient aquatic environment.                            </Typography>
                        </Typography>
                    </Box>
                </DialogContentText>
            </DialogContent>
        </Dialog>
    )
}

export default FiltrationInfo