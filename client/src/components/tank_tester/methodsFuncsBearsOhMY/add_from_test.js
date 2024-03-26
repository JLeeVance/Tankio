import { Container, Dialog } from '@mui/material'
import { useEffect, useState } from 'react'
import FreshwaterFish from '../../freshwater_fish/freshwater_fish'
import Plants from '../../plants/plants'

function AddFromTest({ onAddFromTestClose, type}){

    const [ open , setOpen ] = useState(false)
    
    useEffect(() => {
        setOpen(true)
    }, [type])

    function handleClose(){
        setOpen(false)
        onAddFromTestClose()
    }

    if(type === 'fish'){
        return(
            <Dialog
            open={open}
            maxWidth='md'
            onClose={handleClose}
            >
                <FreshwaterFish/>
            </Dialog>
        )
    }else if(type === 'plant'){
        return(
            <Dialog
            open={open}
            maxWidth='md'
            onClose={handleClose}
            >
                <Plants/>
            </Dialog>

        )
    }
}

export default AddFromTest