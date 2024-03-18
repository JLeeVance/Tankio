import { 
    Card,
    CardContent,
    CardActionArea,
    Button,
    Typography
} from '@mui/material'

function TankTile({
    common,
    number
}){




    
    return (
        <Card raised sx={{maxWidth:'90%', maxHeight:'50%', margin:'.5%'}}>
            <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant={'overline'} sx={{textAlign:'left'}}>
                    {number}
                </Typography>
                <Typography variant={'h6'} sx={{textAlign:'right'}}>
                    {common}
                </Typography>
                
            </CardContent>
        </Card>
    )
}

export default TankTile