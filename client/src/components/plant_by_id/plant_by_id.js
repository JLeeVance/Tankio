import { useEffect , useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
    Box,
    Grid,
    Typography,
    Divider,
    IconButton
} from '@mui/material'

function PlantByID(){

    const { id } = useParams()
    const [ singlePlant, setSinglePlant ] = useState({})

    const nav = useNavigate()
    const nextId = parseInt(id) + 1
    const previousID = parseInt(id) - 1

    useEffect(() => {
        fetch(`/plants/${id}`)
        .then(r => {
            if (r.status === 200){
                r.json().then(plant => setSinglePlant(plant))
            } else {
                nav(`/plants/${previousID}`)
            }
        })
    }, [id])

    function handleNextClick(){
        nav(`/plants/${nextId}`)
    }

    function handlePreviousClick(){
        if(previousID === 0) {
            nav(`/plants/1`)
        } else {
            nav(`/plants/${previousID}`)
        }
    }

    if(!singlePlant){
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
                    backgroundColor:'rgba(249, 247, 240, .2)',
                    justifyContent:'center'
                }}>
                <Grid item xs={12} sx={{textAlign:'right'}}>
                    <IconButton 
                        style={{
                            fontSize:'2vh', 
                            color:'rgb(63, 35, 5, .5)'
                            }} 
                        onClick={handlePreviousClick}
                        >
                        Previous Plant
                    </IconButton>
                    <IconButton 
                        style={{
                            fontSize:'2vh', 
                            color:'rgb(63, 35, 5, .5)'
                            }} 
                        onClick={handleNextClick}
                        >
                        Next Plant
                    </IconButton>
                </Grid>
                <Grid item xs={12} width={'100%'}>
                    <Grid container>
                        <Grid item xs={5} style={{height:'52vh', padding:'1%'}}>
                            <img src={singlePlant.image} height={'100%'} width={'100%'}/>
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
                                        {singlePlant.common_name}
                                    </Typography>
                                    <Divider 
                                        width={'98%'}
                                        sx={{
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
                                        Scientific Name: <em>{singlePlant.scientific_name}</em>
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
                                        {singlePlant.origin}
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
                                                Preferred Substrate
                                            </Typography>
                                            <Typography 
                                                variant='h2' 
                                                sx={{
                                                    fontSize:'1.8vh',
                                                    color:'rgb(63, 35, 5, .8)'
                                                    }}
                                                    >
                                                {singlePlant.substrate}
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
                                                Lighting Requirements
                                            </Typography>
                                            <Typography variant='h2' sx={{fontSize:'1.8vh', color:'rgb(63, 35, 5, .8)'}}>
                                                {singlePlant.lighting_needs}
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
                                            }}
                                        >
                                        {singlePlant.care_level}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} style={{ textAlign:'center' }}>
                    <Box  padding={'2%'}>
                        <Typography variant='body1' fontSize={'1.6vh'} sx={{color:'rgb(63, 35, 5)'}} >
                            {singlePlant.bio}
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
    )
}

export default PlantByID;