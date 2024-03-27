import { 
    Card,
    CardContent,
    Grid,
    IconButton,
    Typography
} from '@mui/material'
import {  useNavigate } from 'react-router-dom'

function Tile({
    id,
    common_name,
    handleRemove,
    type
}){

    const nav = useNavigate()

    const handleNavToID = () => {
        if(type === 'fish'){
            nav(`/freshwater_fish/${id}`)
        }else if(type === 'plant'){
            nav(`/plants/${id}`)
        }
    }

    
    if(type === 'fish'){
        return (
        <Card 
            raised 
            sx={{
                height:'6vh',
                margin:'.75%',
                width:'95%', 
                backgroundColor:'rgb(255, 255, 254)'
                }}>
            <CardContent>
                <Grid container textAlign={'left'}>
                    <Grid item xs={5}>
                        <Typography 
                            variant='h2' 
                            noWrap 
                            fontSize={'2vh'} 
                            style={{
                                color: 'rgba(7, 42, 64, .8)'
                                }} 
                            onClick={handleNavToID}
                            >
                            {common_name}
                        </Typography>
                    </Grid>
                    <Grid item xs={7}>
                        <IconButton 
                            sx={{
                                fontSize:'1.5vh', 
                                color:'rgba(224, 71, 91, .6)', 
                                marginLeft:'3%'
                                }} 
                                onClick={() => handleRemove(id, type, common_name)}
                            >
                            Remove from profile
                        </IconButton>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
        )}else{
            return(
                <Card 
                    raised 
                    sx={{
                        height:'6vh',
                        margin:'.75%',
                        width:'95%', 
                        backgroundColor:'rgb(255, 255, 254)'
                        }}>
                    <CardContent>
                        <Grid container textAlign={'left'}>
                            <Grid item xs={5}>
                                <Typography 
                                    variant='h2' 
                                    noWrap 
                                    fontSize={'2vh'} 
                                    style={{
                                        color: 'rgba(7, 42, 64, .8)'
                                        }} 
                                    onClick={handleNavToID}
                                    >
                                    {common_name}
                                </Typography>
                            </Grid>
                            <Grid item xs={7}>
                                <IconButton 
                                    sx={{
                                        fontSize:'1.5vh', 
                                        marginLeft:'3%', 
                                        color:'rgba(224, 71, 91, .6)'
                                        }} 
                                        onClick={() => handleRemove(id, type, common_name)}
                                    >
                                    Remove from profile
                                </IconButton>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            )
        }
    }
export default Tile