import { useEffect } from 'react'
import { useState } from 'react'
import {
    FormControl,
    FormLabel,
    FormControlLabel,
    Radio,
    RadioGroup,
    Grid,
    Typography
} from '@mui/material'

function TankSelector({ onTankSelect }){

    const tanks = [ 10, 20, 30, 40, 50]
  
    function handleOnChange(e){
        let value = e.target.value
        onTankSelect(value)
    }

    

    return(
        <FormControl fullWidth sx={{backgroundColor:'lightgrey', justifyItems:'center'}}>
            <FormLabel id="tank_size_radio" sx={{textAlign:'center'}}><Typography variant='h6'>Tank Size</Typography></FormLabel>
                <RadioGroup
                row
                defaultValue='10'
                name="radio-buttons-group"
                onChange={(e) => handleOnChange(e)}
                >
                    <Grid container spacing={2} justifyContent={'center'} textAlign={'center'}>
                    {tanks.map((label) => (
                        <Grid item key={label}>
                            <FormControlLabel value={label} control={<Radio />} label={label + ' gal'}/>
                        </Grid>
                    ))}
                    </Grid>
            </RadioGroup>
        </FormControl>
    )
    
}

export default TankSelector