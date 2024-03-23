import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/user';
import { 
    Box,
    Drawer,
    Button,
    List,
    Divider,
    ListItem,
    ListItemButton,
    ListItemText,
} from '@mui/material'

function NavBar(){
    
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
        <div style={{top:'11%', left: 0, right: 0, margin:'.25%'}}>
            <Button onClick={toggleNav(true)}>Menu</Button>
            <Drawer open={open} onClose={toggleNav(false)}>
                {drawerList}
            </Drawer>
        </div>
    )
}

export default NavBar