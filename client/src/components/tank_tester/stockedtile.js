import { useState, useEffect } from 'react'
import {
    Card,
    CardContent,
    Typography,
    IconButton,
    Grid,
    CardActionArea
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
            <Card raised sx={{maxWidth:'98%', maxHeight:'22.5%', margin:'1%'}}>
                <CardContent sx={{ display: 'flex'}}>
                    <Grid container maxWidth={'100%'}>
                        <Grid item xs={3}>
                            <Grid container>
                                <Grid item xs={12}>
                                    <Typography variant='overline' sx={{textDecoration:'underline', fontSize:'1.1vh'}}>
                                        Bioload
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant='overline' style={{fontSize:'1.1vh'}}>
                                        {object.bioload} 
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={7}>
                            <Grid container>
                                <Grid item xs={12}>
                                    <Typography variant='h6' style={{fontSize:'1.5vh'}}>
                                        {object.common_name}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sx={{display: 'flex', flexDirection:'column', alignItems: 'center', justifyContent: 'flex-end', marginTop:'5%'}}>
                                    <Typography xs={{textDecoration:'underline'}} style={{fontSize:'1.2vh'}}>
                                        Stocked: {count}
                                    </Typography>
                                    <div style={{flexDirection:'row'}}>
                                        <IconButton size={'small'} onClick={increaseCount} style={{fontSize:'1.85vh'}}>
                                            +
                                        </IconButton>
                                        <IconButton size={'small'} onClick={decreaseCount} style={{fontSize:'1.85vh'}}>
                                            -
                                        </IconButton>
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={1}>
                            <IconButton size={'small'} style={{fontSize:'2vh'}} onClick={handleRemoveClick}>
                                x
                            </IconButton>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
            :
            <Card raised sx={{maxWidth:'98%', maxHeight:'22.5%', margin:'1%'}}>
                <CardContent sx={{ display: 'flex'}}>
                    <Grid container maxWidth={'100%'}>
                        <Grid item xs={1}>
                            <IconButton size={'small'} style={{fontSize:'2vh'}} onClick={handleRemoveClick}>
                                x
                            </IconButton>
                        </Grid>

                        <Grid item xs={7}>
                            <Grid container>
                                <Grid item xs={12}>
                                    <Typography variant='h6' style={{fontSize:'1.5vh'}}>
                                        {object.common_name}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sx={{display: 'flex', flexDirection:'column', alignItems: 'center', justifyContent:'flex-end', marginTop:'5%'}}>
                                    <Typography xs={{textDecoration:'underline'}} style={{fontSize:'1.2vh'}}>
                                        Stocked: {count}
                                    </Typography>
                                    <div style={{flexDirection:'row'}}>
                                        <IconButton size={'small'} onClick={increaseCount} style={{fontSize:'1.85vh'}}>
                                            +
                                        </IconButton>
                                        <IconButton size={'small'} onClick={decreaseCount} style={{fontSize:'1.85h'}}>
                                            -
                                        </IconButton>
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item xs={3}>
                            <Grid container>
                                <Grid item xs={12}>
                                    <Typography variant='overline' sx={{textDecoration:'underline', fontSize:'1.1vh'}}>
                                        Filtration
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant='overline' style={{fontSize:'1.1vh'}}>
                                        {object.filtration} 
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        }
        </>
    )
}

export default StockedTile