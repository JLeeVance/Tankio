import {
    Card,
    CardContent,
    CardMedia,
    CardActions,
    Button,
    Typography,
    Box
} from '@mui/material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function DataCard({ 
    common, 
    scientific, 
    image,
    type,
    id,
    ownedIds,
    addOwned,
    removeOwned
}){

    const [ isOwned , setIsOwned ] = useState(ownedIds.includes(id))
    const nav = useNavigate()

    function handleAddClick(){
        addOwned(id, common)
        setIsOwned(!isOwned)
    }
    
    function handleLearnClick(){
        if (type === 'fish'){
            nav(`/freshwater_fish/${id}`)
        }
        else if (type === 'plant'){
            nav(`/plants/${id}`)
        }
    }

    function handleDeleteClick(){
        removeOwned(id, common)
        setIsOwned(!isOwned)
    }

    return (
        <Card sx={{marginBottom:'5%'}}>
            <CardMedia
                sx={{height:'25vh'}}
                image={image}
                title={common}
                
            />
            <CardContent style={{backgroundColor:'rgba(249, 247, 240, .2)'}}>
                <Box>
                    <Typography
                        variant='inherit' 
                        component='div'
                        align='left'
                        fontSize={'3vh'}
                        style={{color:'rgb(63, 35, 5, .8)'}}
                        >
                            {common}
                    </Typography>
                </Box>
                <Typography variant='caption' style={{color:'rgb(63, 35, 5)', fontSize:'1.3vh'}}>
                    {scientific}
                </Typography>
                <CardActions>
                    <Button 
                        variant='contained' 
                        onClick={handleLearnClick} 
                        sx={{
                            fontSize:'small',
                            bgcolor: 'rgb(64, 162, 216, .5)', 
                            '&:hover': { bgcolor: 'rgba(7, 42, 64, .7)' }
                        }}>
                        Learn More
                    </Button>
                    <Button 
                        variant='contained' 
                        onClick={isOwned ? handleDeleteClick : handleAddClick} 
                        sx={{
                            fontSize:'small',  
                            bgcolor: 'rgb(64, 162, 216, .5)', 
                            '&:hover': { bgcolor: 'rgba(7, 42, 64, .7)'}
                            }}>
                        {isOwned ? 'Remove from profile' : 'Add to profile'}
                    </Button>
                </CardActions>
            </CardContent>
        </Card>
    )
}