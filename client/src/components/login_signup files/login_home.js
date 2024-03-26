import { Grid } from '@mui/material'
import SiteInfo from './site_info'
import AccessContainer from './access_container'

function LogInHome({ updateUser }){

    return (
        <Grid container 
            style={{
                top:'13vh',
                height:'77vh',
                position:'fixed',
                left:'1vw',
                right:'1vw',
                marginTop:'3%',
                backgroundColor:'rgba(249, 247, 240, .5)',
                padding:'1%'
                }}
                >
            <Grid item xs={6} textAlign={'center'}>
                <SiteInfo />
            </Grid>
            <Grid item xs={6} textAlign={'center'} style={{marginTop:'5%'}}>
                <AccessContainer xs={6} updateUser={updateUser}/>
            </Grid>
        </Grid>
    )
}

export default LogInHome