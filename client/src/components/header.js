import { Box, Container } from '@mui/material'
import Typography from '@mui/material/Typography'

function Header(){

    return (
        <div style={{  top:'1%', left: 0, right: 0, marginBottom:'1%' }}>
            <Container maxWidth={'false'} sx={{textAlign:'center', backgroundColor:'#72D7E0', maxHeight:'20%'}} >
                <Typography variant='h1'>
                    Tankio 
                </Typography>
            </Container>
        </div>
        )
}

export default Header;