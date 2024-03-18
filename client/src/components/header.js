import { Box, Container } from '@mui/material'
import Typography from '@mui/material/Typography'

function Header(){

    return (
        <Container maxWidth={'false'} sx={{marginBottom:2, padding:'1%', textAlign:'center', backgroundColor:'#72D7E0'}} >
            <Typography variant='h1'>
                Tankio 
            </Typography>
        </Container>
    )
}

export default Header;