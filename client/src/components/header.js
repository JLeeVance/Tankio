import { Box } from '@mui/material'
import Typography from '@mui/material/Typography'

function Header(){

    return (
        <Box sx={{width:"110%", margin:-1, marginBottom:3, padding:'0', textAlign:'center'}} bgcolor="#72D7E0" >
            <Typography variant='h1' padding={'1%'} >
                Tankio 
            </Typography>
        </Box>
    )
}

export default Header;