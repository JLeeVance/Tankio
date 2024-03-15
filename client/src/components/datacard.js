import {
    Card,
    CardContent,
    CardMedia,
    CardActions,
    Button,
    Typography
} from '@mui/material'
import { useNavigate } from 'react-router-dom'

export function DataCard({ common, scientific, image , type, id }){

    const nav = useNavigate()

    function handleLearnClick(){
        if (type === 'fish'){
            nav(`/freshwater_fish/${id}`)
        }
        else if (type === 'plant'){
            nav(`/plants/${id}`)
        }
    }

    return (
        <Card sx={{maxWidth:350}}>
            <CardMedia
                sx={{height:250}}
                image={image}
                title={common}
            />
            <CardContent>
                <Typography variant='h5' component='div'>
                    {common}
                </Typography>
                <Typography variant='caption' >
                    {scientific}
                </Typography>
                <CardActions>
                    <Button size='small' onClick={handleLearnClick}>Learn More</Button>
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