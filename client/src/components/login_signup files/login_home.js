import { Grid } from '@mui/material'
import SiteInfo from './site_info'
import AccessContainer from './access_container'

function LogInHome(){

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