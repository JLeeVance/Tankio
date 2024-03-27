import { useEffect , useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
    Box,
    Grid,
    Typography,
    Divider,
    IconButton
} from '@mui/material'

function FishByID(){

    const { id } = useParams()
    const [ singleFish, setSingleFish ] = useState({})

    const nav = useNavigate()
    const nextId = parseInt(id) + 1
    const previousID = parseInt(id) - 1

    useEffect(() => {
        fetch(`/freshwater_fish/${id}`)
        .then( r => {
            if (r.status === 200){
                r.json().then(fish => setSingleFish(fish))
            } else {
                nav(`/freshwater_fish/${previousID}`)
            }
        })
    }, [id])

    function handleNextClick(){
        nav(`/freshwater_fish/${nextId}`)
    }

    function handlePreviousClick(){
        if(previousID === 0){
            nav('/freshwater_fish/1')
        } else {
            nav(`/freshwater_fish/${previousID}`)
        }
    }
    if(!singleFish){
        return <p>Loading</p>
    }

    return (
       
            <Grid 
                container 
                style={{
                    top:'10.5vh',
                    height:'84vh',
                    width:'92vw',
                    position:'fixed',
                    left:'1vw',
                    right:'1vw',
                    marginTop:'3%',
                    justifyContent:'center'
                }}>
                <Grid item xs={12} sx={{textAlign:'right'}}>
                    <IconButton 
                        style={{
                            fontSize:'2vh', 
                            color:'rgb(63, 35, 5, .6)'
                            }} 
                        onClick={handlePreviousClick}
                        >
                        Previous Fish
                    </IconButton>
                    <IconButton 
                        style={{
                            fontSize:'2vh', 
                            color:'rgb(63, 35, 5, .6)'
                            }} 
                        onClick={handleNextClick}
                        >
                        Next Fish
                    </IconButton>
                </Grid>
                <Grid item xs={12} width={'100%'}>
                    <Grid container>
                        <Grid 
                            item 
                            xs={5} 
                            style={{
                                height:'50vh', 
                                padding:'.25%'
                                }}>
                            <img 
                                src={singleFish.image}
                                alt={singleFish.common_name} 
                                height={'100%'} 
                                width={'100%'}/>
                        </Grid>
                        <Grid item xs={7} style={{height:'48vh'}}>
                            <Grid 
                                container 
                                padding={'2%'} 
                                maxWidth={'100%'} 
                                height={'100%'} 
                                textAlign={'center'}
                                >
                                <Grid item xs={12}>
                                    <Typography 
                                        variant='h2' 
                                        noWrap 
                                        sx={{
                                            textAlign:'center', 
                                            maxWidth: '100%', 
                                            fontSize:'4.5vh', 
                                            color:'rgb(63, 35, 5)'
                                            }}
                                        >
                                        {singleFish.common_name}
                                    </Typography>
                                    <Divider 
                                        width={'98%'} 
                                        style={{
                                            marginBottom:'4%',
                                            backgroundColor: 'rgb(63, 35, 5)', 
                                            height: '2px' 
                                            }}
                                            />
                                    <Typography 
                                        variant='inherit' 
                                        style={{
                                            textAlign:'center', 
                                            maxWidth:'100%', 
                                            fontSize:'2vh', 
                                            color:'rgb(63, 35, 5)'
                                            }}
                                            >
                                        Scientific Name: <em>{singleFish.scientific_name}</em>
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} width={'100%'}>
                                    <Typography 
                                        variant='h1' 
                                        sx={{
                                            textDecoration:'underline', 
                                            fontSize:'2.2vh', 
                                            textAlign:'center', 
                                            marginBottom:'3%', 
                                            color:'rgb(63, 35, 5)'
                                            }}
                                            >
                                        Origin
                                    </Typography>
                                    <Typography 
                                        variant='h2' 
                                        sx={{
                                            fontSize:'1.6vh', 
                                            textAlign:'center',
                                            color:'rgb(63, 35, 5, .8)'
                                            }}
                                            >
                                        {singleFish.origin}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Grid container>
                                        <Grid item xs={6} sx={{textAlign:'center'}}>
                                            <Typography 
                                                variant='h1' 
                                                sx={{
                                                    textDecoration:'underline', 
                                                    fontSize:'2.2vh', 
                                                    marginBottom:'3%', 
                                                    color:'rgb(63, 35, 5)'
                                                    }}
                                                    >
                                                pH Range
                                            </Typography>
                                            <Typography 
                                                variant='h2' 
                                                sx={{
                                                    fontSize:'1.8vh', 
                                                    color:'rgb(63, 35, 5, .8)'
                                                    }}
                                                    >
                                                {singleFish.ph_range}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={6} sx={{textAlign:'center'}}>
                                            <Typography 
                                                variant='h1' 
                                                sx={{
                                                    textDecoration:'underline', 
                                                    fontSize:'2.2vh', 
                                                    marginBottom:'3%', 
                                                    color:'rgb(63, 35, 5)'
                                                    }}
                                                    >
                                                Max Size - inch
                                            </Typography>
                                            <Typography variant='h2' sx={{fontSize:'1.8vh', color:'rgb(63, 35, 5, .8)'}}>
                                                {singleFish.max_size}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item={12} style={{justifyContent:'center', textAlign:'center', width:'100%'}}>
                                    <Typography 
                                        variant='h1' 
                                        style={{
                                            textDecoration:'underline', 
                                            fontSize:'2.2vh', 
                                            textAlign:'center', 
                                            color:'rgb(63, 35, 5)'
                                            }}
                                        >
                                        Care Difficulty
                                    </Typography>
                                    <Typography 
                                        variant='h2' 
                                        style={{
                                            fontSize:'1.8vh', 
                                            color:'rgb(63, 35, 5, .8)', 
                                            textAlign:'center'
                                            }
                                        }>
                                        {singleFish.care_level}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} style={{ textAlign:'center' }}>
                    <Box padding={'2%'}>
                        <Typography 
                            variant='body1' 
                            fontSize={'1.6vh'} 
                            sx={{
                                color:'rgb(63, 35, 5)'
                            }
                            }>
                            {singleFish.bio}
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
    )
}

export default FishByID;