import { 
    Dialog, 
    DialogContent, 
    DialogContentText, 
    DialogTitle,
    Divider,
    Grid,
    List,
    ListItem,
    ListItemText,
    Typography
 } from '@mui/material'
import { useState, useContext } from 'react'
import { UserContext } from '../../../context/user'

function ResultsMessage({
    results_message, 
    onResultClose,
    stockedFish,
    stockedPlants,
    tank,
    plantTestCountDic,
    fishTestCountDic
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
                overflow: 'auto',
                height:'30vh',
                }}
            >
            {array.map((name) => {
                let count = 0
                if(array === stockedFishNames){
                    count = fishTestCountDic[name]
                } else {
                    count = plantTestCountDic[name]
                }
                return (
                    <ListItem key={name} style={{justifyContent:'center'}}>
                        <ListItemText>
                            <Typography fontSize={'1.5vh'} color={{color:'rgb(79, 92, 60)'}}>
                            {name} | {count}
                            </Typography>
                        </ListItemText>
                    </ListItem>
                )
            }
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
            <DialogTitle 
                variant='h4' 
                sx={{
                    textAlign:'center', 
                    padding:'3%', 
                    color:'rgb(63, 35, 5)'
                    }}
                >
                Results for User: {user.username}
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    <Grid container maxWidth={'100%'}>
                        <Grid 
                            item 
                            xs={12} 
                            sx={{
                                textAlign:'left', 
                                paddingLeft:'5%', 
                                paddingRight:'5%', 
                                paddingBottom:'6%'
                            }}>
                            <Typography 
                                variant='subtitle1' 
                                fontSize={'1.5vh'} 
                                style={{color:'rgb(63, 35, 5, .7)'}}
                                >
                                {results_message}
                            </Typography>
                        </Grid>
                        <Divider/>
                        <Grid 
                            item 
                            xs={6} 
                            alignItems={'center'} 
                            justifyContent={'center'} 
                            sx={{textAlign:'center'}}>
                            <Typography 
                                variant='h5' 
                                style={{color:'rgb(63, 35, 5)'}}
                                >
                                Stocked Plants
                            </Typography>
                            <Divider/>
                            {produceStockedList(stockedPlantNames)}
                        </Grid>
                        <Grid 
                            item 
                            xs={6} 
                            alignItems='center' 
                            justifyContent={'center'} 
                            sx={{textAlign:'center'}}>
                            <Typography variant='h5' style={{color:'rgb(63, 35, 5)'}}>
                                Stocked Fish
                            </Typography>
                            <Divider/>
                            {produceStockedList(stockedFishNames)}
                        </Grid>
                    </Grid>
                    <Typography 
                        fontSize={'2vh'} 
                        sx={{
                            textAlign:'center', 
                            color:'rgb(20, 99, 142)'
                        }}
                        >
                        Tank Size: {tank.size} Gal
                    </Typography>
                </DialogContentText>
            </DialogContent>
        </Dialog>
    )
}

export default ResultsMessage