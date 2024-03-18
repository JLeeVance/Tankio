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
        <Card>
            <CardMedia
                sx={{height:300}}
                image={image}
                title={common}
            />
            <CardContent>
                <Box>
                    <Typography
                        variant='inherit' 
                        component='div'
                        align='left'
                        fontSize={'x-large'}
                        >
                            {common}
                    </Typography>
                </Box>
                <Typography variant='caption'>
                    {scientific}
                </Typography>
                <CardActions>
                    <Button variant='contained' onClick={handleLearnClick} sx={{fontSize:'small', bgcolor: 'lightgrey', '&:hover': { bgcolor: 'darkgrey' }}}  >Learn More</Button>
                    <Button variant='contained' onClick={isOwned ? handleDeleteClick : handleAddClick} sx={{fontSize:'small', bgcolor: 'lightgrey', '&:hover': { bgcolor: 'darkgrey' }}}>{isOwned ? 'Remove from profile' : 'Add to profile'}</Button>
                </CardActions>
            </CardContent>
        </Card>
    )
}

/* 
Need to use the Type sent in from plant.js to determine the line for the Learn more.
Same with the fish.js. Need a type of 'fish'.
Need to use the type for the fetch also when I set up the add to collection button
*/