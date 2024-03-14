import { Grid } from '@mui/material'
import SiteInfo from './site_info'
import AccessContainer from './access_container'

function LogInHome(){

    const welcome = "Welcome to Tankio!"
    const desc = "If you have ever owned a fish, Tankio is for you. Explore our database of Freshwater Fish and Plants, and add the ones you own to your collection! Once ready, head over to the TankTester to test different stocking options for a healthy, balanced aquarium!"


    return (
        <Grid container>
            <Grid item xs={6} textAlign={'center'}>
                <SiteInfo />
            </Grid>
            <Grid item xs={6} textAlign={'center'}>
                <AccessContainer xs={6}/>
            </Grid>
        </Grid>
    )
}

export default LogInHome