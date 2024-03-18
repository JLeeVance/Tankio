import { useState, useContext, useEffect } from 'react'
import { UserContext } from '../../context/user'
import { OwnedFishContext } from '../../context/ownedfish'
import { DataCard } from '../datacard'
import { 
    Container, 
    Typography,
    Snackbar,
    Grid
} from '@mui/material'

function FreshwaterFish(){
    
    const { user } = useContext(UserContext)
    const { ownedFish, setOwnedFish } = useContext(OwnedFishContext)

    const [ allFish , setAllFish ] = useState([])

    const [ openSnackBar , setOpenSnackBar ] = useState(false)
    const [ snackbarMessage , setSnackbarMessage ] = useState('')

    useEffect(() => {
        fetch('/freshwater_fish')
        .then(r => r.json())
        .then(fish => setAllFish(fish))
    }, [])

    const type = 'fish'
    const ownedFishIds = ownedFish.map((ownedFish) => ownedFish.fish_id)

    const handleSnackbarClose = () => {
        setOpenSnackBar(false)
    }

    const addOwnedFish = (fish_id, common) => {
        const postData = {
            "fish_id":fish_id,
            "user_id":user.id
        }
        fetch('/owned_fish', {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(postData)
        }).then(r => {
        if (r.status === 201){
            r.json()
            .then(newOwnedFish => setOwnedFish([...ownedFish, newOwnedFish]))
            setSnackbarMessage(`${common} has been added to your profile.`)
            setOpenSnackBar(true)
        } else {
            setSnackbarMessage('There was an error adding your profile')
            setOpenSnackBar(true)
        }
    })
}

    const deleteOwnedFish = (fish_id, common) => {
        const fishToRemove = ownedFish.find((fish) => fish.fish_id === fish_id && fish.user_id === user.id)
        fetch(`/owned_fish/${fishToRemove.id}`, { method:'DELETE' })
        .then(r => {
            if(r.status === 204){
                const newOwnedFish = ownedFish.filter((fish) => fish !== fishToRemove)
                setOwnedFish(newOwnedFish)
                setSnackbarMessage(`${common} was deleted from your profile`)
                setOpenSnackBar(true)
            }
        })
    }
    
    const dataCards = allFish.map(fish => {
        return(
            <Grid key={fish.id} item xs={3}>
                <DataCard
                    image={fish.image}
                    common={fish.common_name}
                    scientific={fish.scientific_name}
                    id={fish.id}
                    ownedIds={ownedFishIds}
                    type={type}
                    addOwned={addOwnedFish}
                    removeOwned={deleteOwnedFish}
                    />
            </Grid>
        )
    })
  
    return(
        <Container maxWidth={'xl'}>
            <Snackbar
                open={openSnackBar}
                autoHideDuration={2000}
                onClose={handleSnackbarClose}
                message={snackbarMessage}
                anchorOrigin={{vertical: 'top', horizontal: 'right'}}
            />
            <Container>
                <Typography variant='h3' align="center" sx={{marginBottom:'2%'}}>Freshwater Fish</Typography>
            </Container>
            <Grid container spacing={3} maxWidth={'auto'}>
                {dataCards}
            </Grid>
        </Container>
        )
}

export default FreshwaterFish;