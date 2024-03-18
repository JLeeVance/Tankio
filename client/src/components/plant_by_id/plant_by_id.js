import { useEffect , useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
    Box,
    Container,
    Grid,
    Typography,
    Paper,
    Divider,
    Button
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
            <Grid container maxWidth={'xl'} sx={{justifyContent:'center'}}>
                <Grid item xs={12} sx={{textAlign:'right'}}>
                    <Button onClick={handlePreviousClick}>
                        Previous Plant
                    </Button>
                    <Button onClick={handleNextClick}>
                        Next Plant
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <Grid container>
                        <Grid item xs={5} >
                            <Container component={'img'} src={singlePlant.image} />
                        </Grid>
                        <Grid item xs={7}>
                            <Box bgcolor={'lightgrey'} padding={'3%'} maxWidth={'100%'}>
                                <Typography variant='h2' noWrap sx={{textAlign:'center', maxWidth: '100%', overflow: 'hidden', textOverflow: 'ellipsis'}}>
                                    {singlePlant.common_name}
                                </Typography>
                                <Divider sx={{marginBottom:'10px'}}/>
                                <Typography variant='h5'  margin={'1%'} sx={{textAlign:'center'}}>
                                    Scientific Name: <em>{singlePlant.common_name}</em>
                                </Typography>
                                <Typography variant='h6' sx={{textDecoration:'underline'}}>
                                    Origin
                                </Typography>
                                <Typography variant='subtitle1'>
                                    {singlePlant.origin}
                                </Typography>
                                <Typography variant='h6' sx={{textDecoration:'underline'}}>
                                    Care Difficulty
                                </Typography>
                                <Typography variant='subtitle1'>
                                    {singlePlant.care_level}
                                </Typography>
                                <Typography variant='h6' sx={{textDecoration:'underline'}}>
                                    Lighting Requirements
                                </Typography>
                                <Typography variant='subtitle1'>
                                    {singlePlant.lighting_needs}
                                </Typography>
                                <Typography variant='h6' sx={{textDecoration:'underline'}}>
                                    Preferred Substrate
                                </Typography>
                                <Typography variant='subtitle1'>
                                    {singlePlant.substrate}
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid marginTop={'1%'}>
                    <Grid item xs={12}>
                        <Box bgcolor={'lightgrey'} padding={'2%'}>
                            <Typography variant='body2'>
                                {singlePlant.bio}
                            </Typography>
                        </Box>

                    </Grid>
                </Grid>
            </Grid>

   

        )
    }


export default PlantByID;

{/* <Typography variant={'body2'}>
                                    {singlePlant.bio}
                                </Typography> */}

            {/* <Container component={'img'} src={singlePlant.image} /> */}