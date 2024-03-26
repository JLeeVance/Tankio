import {
    FormControl,
    FormLabel,
    FormControlLabel,
    Radio,
    RadioGroup,
    Typography
} from '@mui/material'
import { useEffect, useState } from 'react'

function TankSelector({ onTankSelect }){

    const tanks = [ 10, 20, 30, 40, 50]

    const [selectedValue, setSelectedValue] = useState(10);

    function handleOnChange(e){
        setSelectedValue(e.target.value)
    }

    useEffect(() => {
        onTankSelect(selectedValue)
    }, [selectedValue])

    return(
        <FormControl 
            fullWidth 
            style={{alignItems:'center'
            }
            }>
            <FormLabel id="tank_size_radio" sx={{textAlign:'center'}}>
                    <Typography variant='h6' style={{color:'rgb(52, 38, 5, .8)'}}>
                        Tank Size
                    </Typography>
            </FormLabel>
            <RadioGroup
                row
                defaultValue='10'
                name="radio-buttons-group"
                onChange={(e) => handleOnChange(e)}
                >
                    {tanks.map((label) => (
                        <FormControlLabel 
                            key={label} 
                            value={label} 
                            style={{color:'rgb(52, 38, 5, .8)'}} 
                            control={<Radio style={{ color:selectedValue? "rgba(224, 71, 91, 0.5)":'white' }} />} 
                            label={label + ' gal'} />
                    ))}
            </RadioGroup>
        </FormControl>
    )
    
}

export default TankSelector