import { Container, Typography, Box, Divider } from '@mui/material';

function SiteInfo(){

    const welcome = "Welcome to Tankio!"
    const desc = "If you have ever owned a fish, Tankio is for you. Explore our database of Freshwater Fish and Plants, add the ones you own to your collection, and head over to the TankTester to test different stocking options for a healthy, balanced aquarium!"


    return (
        <Container width={'100%'}>
            <Typography variant='h1' fontSize={'5vh'}>
                {welcome}
            </Typography>
            <Divider style={{backgroundColor:'rgb(63, 35, 5)', height:'.1px', marginTop:'4%'}}/>
            <Typography variant='h2' fontSize={'2vh'} sx={{marginTop:'5%'}}>
                {desc}
            </Typography>
        </Container>
    )
}

export default SiteInfo