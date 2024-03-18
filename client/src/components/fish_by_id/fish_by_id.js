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
        <Grid container maxWidth={'xl'} sx={{justifyContent:'center'}}>
        <Grid item xs={12} sx={{textAlign:'right'}}>
            <Button onClick={handlePreviousClick}>
                Previous Fish
            </Button>
            <Button onClick={handleNextClick}>
                Next Fish
            </Button>
        </Grid>
        <Grid item xs={12}>
            <Grid container>
                <Grid item xs={5} >
                    <Container component={'img'} src={singleFish.image} />
                </Grid>
                <Grid item xs={7}>
                    <Box bgcolor={'lightgrey'} padding={'3%'} maxWidth={'100%'}>
                        <Typography variant='h2' noWrap sx={{textAlign:'center', maxWidth: '100%', overflow: 'hidden', textOverflow: 'ellipsis'}}>
                            {singleFish.common_name}
                        </Typography>
                        <Divider sx={{marginBottom:'10px'}}/>
                        <Typography variant='h5'  margin={'1%'} sx={{textAlign:'center'}}>
                            Scientific Name: <em>{singleFish.common_name}</em>
                        </Typography>
                        <Typography variant='h6' sx={{textDecoration:'underline'}}>
                            Origin
                        </Typography>
                        <Typography variant='subtitle1'>
                            {singleFish.origin}
                        </Typography>
                        <Typography variant='h6' sx={{textDecoration:'underline'}}>
                            Care Difficulty
                        </Typography>
                        <Typography variant='subtitle1'>
                            {singleFish.care_level}
                        </Typography>
                        <Typography variant='h6' sx={{textDecoration:'underline'}}>
                            Maximum Size
                        </Typography>
                        <Typography variant='subtitle1'>
                            {singleFish.max_size}
                        </Typography>
                        <Typography variant='h6' sx={{textDecoration:'underline'}}>
                            Ph Range
                        </Typography>
                        <Typography variant='subtitle1'>
                            {singleFish.ph_range}
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Grid>
        <Grid marginTop={'1%'}>
            <Grid item xs={12}>
                <Box bgcolor={'lightgrey'} padding={'2%'}>
                    <Typography variant='body2'>
                        {singleFish.bio}
                    </Typography>
                </Box>

            </Grid>
        </Grid>
    </Grid>
    )
}

export default FishByID;