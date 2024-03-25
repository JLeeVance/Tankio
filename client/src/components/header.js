import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/user';
import { 
    Box,
    Drawer,
    IconButton,
    List,
    Divider,
    ListItem,
    ListItemButton,
    ListItemText,
    Typography,
    Container,
    Grid
} from '@mui/material'
function Header(){


    const nav = useNavigate()

    const { setUser } = useContext(UserContext)
    const [ open, setOpen ] = useState(false)

    const toggleNav = (newState) => () => {
        setOpen(newState)
      }

    const handleNavigation = (route) => {
        nav(route)
    }

    const handleLogout = () => {
        fetch('/logout', {method: 'DELETE'})
        setUser(null)
    }

    const drawerList = (
        <Box sx={{width:'100%'}} role='presentation' onClick={toggleNav(false)}>
            <List>
                <ListItem >
                    <ListItemButton 
                        onClick={() => handleNavigation('/')}>
                        <ListItemText>
                            {'Home'}
                        </ListItemText>
                    </ListItemButton>
                </ListItem>
                <ListItem >
                    <ListItemButton
                        onClick={() => handleNavigation('/freshwater_fish')}>
                        <ListItemText>
                            {'Freshwater Fish'}
                        </ListItemText>
                    </ListItemButton>
                </ListItem>
                <ListItem >
                    <ListItemButton
                        onClick={() => handleNavigation('/plants')}>
                        <ListItemText>
                            {'Aquatic Plants'}
                        </ListItemText>
                    </ListItemButton>
                </ListItem>
                <ListItem >
                    <ListItemButton
                        onClick={() => handleNavigation('/tanktester')}>
                        <ListItemText>
                            {'TankTester'}
                        </ListItemText>
                    </ListItemButton>
                </ListItem>
            </List>

            <Divider/>

            <List>
                <ListItem>
                    <ListItemButton onClick={handleLogout}>
                        {'LogOut'}
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    )

    return (


        <div
            style={{
                backgroundColor: '#72D7E0',
                height: '12vh',
                position: 'fixed',
                top: '1.5%',
                left: 0,
                right: 0,
                marginBottom: '1%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}
            >
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <IconButton size={'small'} onClick={toggleNav(true)} sx={{ textAlign: 'left', marginTop: 'none' }}>
                Menu
                </IconButton>
                <Drawer open={open} onClose={toggleNav(false)}>
                {drawerList}
                </Drawer>
            </div>
            <Typography variant='h1' fontSize={'10vh'} >
                Tankio
            </Typography>
            <div></div> {/* Placeholder for any additional content you might want to add */}
        </div>







            // <Grid container maxWidth={'100%'} sx={{ backgroundColor:'#72D7E0', height:'12vh', position:'fixed', top:'1.5%', left: 0, right: 0, marginBottom:'1%', }} >
            //     <Grid item xs={4.5} display={'flex'} flexDirection={'row'}>
            //         <IconButton onClick={toggleNav(true)} sx={{ textAlign:'left', marginTop:'none'}}>Menu</IconButton>
            //         <Drawer open={open} onClose={toggleNav(false)}>
            //             {drawerList}
            //         </Drawer>
            //         </Grid>
            //         <Grid item xs={7.5}>
                
            //         <Typography variant='h1' marginBottom={'0%'} style={{fontSize:'10vh', textAlign:'left'}}>
            //             Tankio 
            //         </Typography>
            //     </Grid>
            // </Grid >
        )
}

export default Header;