import { 
    Button, 
    Dialog, 
    DialogActions, 
    DialogContent, 
    DialogContentText, 
    DialogTitle,
    Divider,
    Grid,
    List,
    ListItem,
    ListItemText,
    ListSubheader
 } from '@mui/material'
import { useState, useContext } from 'react'
import { UserContext } from '../../context/user'

function ResultsMessage({
    results_message, 
    onResultClose,
    stockedFish,
    stockedPlants,
    tank
}){

    const { user } = useContext(UserContext)
    const [ open, setOpen ] = useState(true)

    function handleClose(){
        onResultClose()
        setOpen(false)
    }

    const stockedFishNames = stockedFish.map(fish => fish.props.object.common_name)
    const stockedPlantNames = stockedPlants.map(plant => plant.props.object.common_name)

    function produceStockedList(array){
        return (
            <List
                sx={{
                width: '100%',
                maxWidth: 360,
                overflow: 'auto',
                maxHeight: 300,
                '& ul': { padding: 0 },
                }}
            >
            {array.map((name) =>
                <ListItem key={name}>
                    <ListItemText primary={name} />
                </ListItem>
            )}
            </List>
        )
    }

    return(
        <Dialog
            open={open}
            maxWidth='xl'
            sx={{maxHeight:'100%'}}
            onClose={handleClose}
        >
            <DialogTitle sx={{paddingBottom:'.1'}}>
                Results for User: {user.username} | Tank Size: {tank.size} Gal
            </DialogTitle>
            <Divider sx={{paddingBottom:'1%'}}/>
            <DialogContent>
                <DialogContentText>
                    <Grid container maxWidth={'100%'}>
                        <Grid item xs={12}>
                            {results_message}
                        </Grid>
                        <Divider/>
                        <Grid item xs={6} sx={{alignItems:'center'}}>
                            Stocked Plants
                            <Divider/>
                            {produceStockedList(stockedPlantNames)}
                        </Grid>
                        <Grid item xs={6} sx={{alignItems:'center'}}>
                            Stocked Fish
                            <Divider/>
                            {produceStockedList(stockedFishNames)}
                        </Grid>
                    </Grid>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={handleClose}>
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default ResultsMessage