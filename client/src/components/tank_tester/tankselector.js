import { useEffect } from 'react'
import { useState } from 'react'
import {
    FormControl,
    FormLabel,
    FormControlLabel,
    Radio,
    RadioGroup
} from '@mui/material'

function TankSelector({ onTankSelect }){

    const tanks = [ 10, 20, 30, 40, 50]
    let labels = tanks.map(tank => <FormControlLabel key={tank} value={tank} control={<Radio size='small'/>} label={tank}/>)

    function handleOnChange(e){
        let value = e.target.value
        onTankSelect(value)
    }

    

    return(
        <FormControl sx={{backgroundColor:'grey', margin:'2%', justifyItems:'center', maxWidth:'100%'}}>
            <FormLabel id="tank_size_radio" sx={{textAlign:'center'}}>Tank Size</FormLabel>
                <RadioGroup
                row
                defaultValue='10'
                name="radio-buttons-group"
                onChange={(e) => handleOnChange(e)}
                >
                    {labels}
            </RadioGroup>
        </FormControl>
    )
    
}

export default TankSelector