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
            <Card raised style={{maxWidth:'98%', height:'11.5vh', margin:'1.25%', marginBottom:'2%', backgroundColor:'rgb(255, 255, 254)', boxShadow: '5px 5px 10px rgb(20, 99, 142)'}}>
                <CardContent sx={{ display: 'flex'}}>
                    <Grid container maxWidth={'100%'}>
                        <Grid item xs={3}>
                            <Grid container>
                                <Grid item xs={12}>
                                    <Typography variant='overline' sx={{textDecoration:'underline', fontSize:'1.1vh', color:'rgb(20, 99, 142)'}}>
                                        Bioload
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant='overline' style={{fontSize:'1.1vh', color:'rgb(20, 99, 142)'}}>
                                        {object.bioload} 
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={7}>
                            <Grid container>
                                <Grid item xs={12}>
                                    <Typography variant='h1' style={{fontSize:'1.54vh', color:'rgb(20, 99, 142)'}}>
                                        {object.common_name}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sx={{display: 'flex', flexDirection:'column', alignItems: 'center', justifyContent: 'flex-end', marginTop:'5%'}}>
                                    <Typography xs={{textDecoration:'underline'}} style={{fontSize:'1.3vh', color:'rgb(20, 99, 142)'}}>
                                        Stocked: {count}
                                    </Typography>
                                    <div style={{flexDirection:'row'}}>
                                        <IconButton size={'small'} onClick={increaseCount} style={{fontSize:'1.85vh', color:'rgb(20, 99, 142)'}}>
                                            +
                                        </IconButton>
                                        <IconButton size={'small'} onClick={decreaseCount} style={{fontSize:'1.85vh', color:'rgb(20, 99, 142)'}}>
                                            -
                                        </IconButton>
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={1}>
                            <IconButton size={'small'} style={{fontSize:'2vh', color:'rgb(20, 99, 142)'}} onClick={handleRemoveClick}>
                                x
                            </IconButton>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
            :
            <Card raised style={{maxWidth:'98%', height:'11.5vh', margin:'1.25%', marginTop:'2%', backgroundColor:'rgb(255, 255, 254)', boxShadow: '-5px 5px 10px rgb(79, 92, 60)'}}>
                <CardContent sx={{ display: 'flex'}}>
                    <Grid container maxWidth={'100%'}>
                        <Grid item xs={1}>
                            <IconButton size={'small'} sx={{fontSize:'2vh', color:'rgb(79, 92, 60)'}} onClick={handleRemoveClick}>
                                x
                            </IconButton>
                        </Grid>

                        <Grid item xs={7}>
                            <Grid container>
                                <Grid item xs={12}>
                                    <Typography variant='h1' style={{fontSize:'1.54vh', color:'rgb(79, 92, 60)'}}>
                                        {object.common_name}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sx={{display: 'flex', flexDirection:'column', alignItems: 'center', justifyContent:'flex-end', marginTop:'5%'}}>
                                    <Typography xs={{textDecoration:'underline'}} style={{fontSize:'1.3vh', color:'rgb(79, 92, 60)'}}>
                                        Stocked: {count}
                                    </Typography>
                                    <div style={{flexDirection:'row'}}>
                                        <IconButton size={'small'} onClick={increaseCount} style={{fontSize:'1.85vh', color:'rgb(79, 92, 60)'}}>
                                            +
                                        </IconButton>
                                        <IconButton size={'small'} onClick={decreaseCount} style={{fontSize:'1.85h', color:'rgb(79, 92, 60)'}}
                                        >
                                            -
                                        </IconButton>
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item xs={3}>
                            <Grid container>
                                <Grid item xs={12}>
                                    <Typography variant='overline' sx={{textDecoration:'underline', fontSize:'1.1vh', color:'rgb(79, 92, 60)'}}>
                                        Filtration
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant='overline' style={{fontSize:'1.1vh', color:'rgb(79, 92, 60)'}}>
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