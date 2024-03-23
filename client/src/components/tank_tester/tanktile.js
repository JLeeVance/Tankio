import { useState } from 'react'
import { 
    Card,
    CardContent,
    Typography,
    Grid,
    IconButton
} from '@mui/material'


function TankTile({
    common,
    number,
    object,
    onAddTile
}){
   
    const [ fish, setFish ] = useState(object.hasOwnProperty('bioload'))

    function handleAddClick(){
        onAddTile(object)
    }

    return(
        <>
        {fish? 
        
            <Card raised sx={{maxWidth:'100%', maxHeight:'100%', margin:'1%', textAlign:'center'}}>
                <CardContent>
                    <Grid container justifyContent={'center'} alignItems={'center'}>
                        <Grid item xs={2} margin={'-1%'}>
                            <IconButton onClick={() => handleAddClick()}>
                                +
                            </IconButton>
                        </Grid>
                        <Grid item xs={4} >
                            <Grid container>
                                <Grid item xs={12}>
                                    <Typography variant={'overline'} sx={{textDecoration:'underline'}}>
                                        Bioload 
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant={'overline'}>
                                        {number}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography noWrap variant={'overline'}>
                                {common}
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        
        :
        
            <Card raised sx={{maxWidth:'100%', maxHeight:'100%', margin:'1%', textAlign:'center'}}>
                <CardContent>
                    <Grid container justifyContent={'center'} alignItems={'center'}>
                        <Grid item xs={6}>
                            <Typography noWrap variant={'overline'}>
                                {common}
                            </Typography>
                        </Grid>
                        <Grid item xs={4} >
                            <Grid container>
                                <Grid item xs={12}>
                                    <Typography variant='overline' sx={{textDecoration:'underline'}}>
                                        Filtration
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant={'overline'}>
                                        {number}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={2} margin={'-1%'}>
                            <IconButton onClick={() => handleAddClick()}>
                                +
                            </IconButton>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        
        }
        </> 
    )
}

export default TankTile


{/* <Card raised sx={{maxWidth:'90%', maxHeight:'50%', margin:'.5%'}}>
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
</Card> */}