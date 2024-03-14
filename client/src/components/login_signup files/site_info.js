import { Container, Typography } from '@mui/material';

function SiteInfo(){

    const welcome = "Welcome to Tankio!"
    const desc = "If you have ever owned a fish, Tankio is for you. Explore our database of Freshwater Fish and Plants, and add the ones you own to your collection! Once ready, head over to the TankTester to test different stocking options for a healthy, balanced aquarium!"


    return (
        <Container>
            <Typography variant='h4'>
                {welcome}
            </Typography>
        </Container>
    )
}

export default SiteInfo