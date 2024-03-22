import { useState } from 'react'
import { 
    Card,
    CardContent,
    CardActionArea,
    Button,
    Typography
} from '@mui/material'

function TankTile({
    common,
    number,
    object,
    onAddTile
}){
   
    const [fish, setFish] = useState(object.hasOwnProperty('bioload'))

    function handleAddClick(){
        onAddTile(object)
    }

    return(
        <>
        {fish? 
        <Card raised sx={{maxWidth:'90%', margin:'.5%'}}>
            <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button onClick={() => handleAddClick()}>
                    Add to test
                </Button>
                <Typography variant={'overline'}>
                    {number}
                </Typography>
                <Typography variant={'h6'} sx={{fontSize:'auto'}}>
                    {common}
                </Typography>
            </CardContent>
        </Card>
        :
        <Card raised sx={{maxWidth:'90%', maxHeight:'50%', margin:'.5%'}}>
            <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant={'subtitle1'} sx={{fontSize:'auto'}}>
                    {common}
                </Typography>
                <Typography variant={'overline'}>
                    {number}
                </Typography>
                <Button onClick={() => handleAddClick()}>
                    Add to test
                </Button>
            </CardContent>
        </Card>
        }
        </> 
    )
}

export default TankTile