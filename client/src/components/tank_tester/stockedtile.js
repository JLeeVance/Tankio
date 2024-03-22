import { useState, useEffect } from 'react'
import {
    Card,
    CardContent,
    Typography,
    IconButton,
    Icon
} from '@mui/material'
 

function StockedTile({
    object, 
    onRemoveClick,
    onStateChange,
}){

    const [ fish, setFish ] = useState(object.hasOwnProperty('bioload'))
    const [ count, setCount ] = useState(1)


    function increaseCount(){
        let action = 'increase'
        setCount(count +1)
        onStateChange(object, action)
    }

    function decreaseCount(){
        if(count === 1){
            return
        }
        let action = 'decrease'
        setCount(count -1)
        onStateChange(object, action)
    }

    function handleRemoveClick(){
        onRemoveClick(object)
    }

    return(
        <>
        {fish?
            <Card raised sx={{maxWidth:'90%', margin:'.5%'}}>
                <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant={'overline'}>
                        {object.bioload} <Typography variant='overline'> :Bioload</Typography>
                    </Typography>
                    <Typography variant={'h6'} sx={{fontSize:'small', float:'right'}}>
                        {object.common_name} <Typography variant='overline'>  Stocked:{count}</Typography>
                        <IconButton onClick={increaseCount}>
                            +
                        </IconButton>
                        <IconButton onClick={decreaseCount}>
                            -
                        </IconButton>
                    </Typography>
                    <IconButton onClick={handleRemoveClick} sx={{margin:'-10%'}}>
                        x
                    </IconButton>
                </CardContent>
            </Card>
            :
            <Card raised sx={{maxWidth:'90%', maxHeight:'50%', margin:'.5%'}}>
                <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <IconButton onClick={handleRemoveClick} sx={{margin:'-10%'}}>
                        x
                    </IconButton>
                    <Typography variant={'h6'} fontSize={'small'} sx={{ marginLeft:'0%', marginRight:'0%'}}>
                        <Typography variant='overline' fontSize={'x-small'}>Stocked:{count} </Typography>{object.common_name}
                        <IconButton onClick={increaseCount}>
                            +
                        </IconButton>
                        <IconButton onClick={decreaseCount}>
                            -
                        </IconButton>
                    </Typography>
                    <Typography variant={'overline'}>
                        <Typography variant='overline' fontSize={'xsmall'}> Filtration:</Typography>{object.filtration}
                    </Typography>
                </CardContent>
            </Card>
        }
        </>
    )
}

export default StockedTile