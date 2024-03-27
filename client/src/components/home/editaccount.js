import { useState } from 'react';
import EditFirst from './editfirst';
import EditLast from './editlast';
import EditPassword from './editpassword';
import EditUsername from './editusername';
import EditBio from './editbio';
import {
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    FormLabel
} from '@mui/material'

function EditAccount({ user , onSuccess, onFail }){

    const [ editValue, setEditValue ] = useState('')
    
    function handleEditSelection(e){
        setEditValue(e.target.value)
    }

    return (
    <>
        <FormControl>
            <FormLabel 
                id='manage-account-radio' 
                sx={{
                    textAlign:'center', 
                    marginBottom:'1%', 
                    marginTop:'2%', 
                    color:'rgba(7, 42, 64, .7)'
                    }}
                >
                What would you like to change?
            </FormLabel>
            <RadioGroup
                row
                name='manage-account-radio'
                sx={{
                    textAlign:'center', 
                    justifyContent:'space-evenly'
                }}
                onChange={(e) => handleEditSelection(e)}
            >
                <FormControlLabel 
                    as={'h1'} 
                    value='first_name' 
                    label='First Name'
                    control={<Radio />} 
                    />
                <FormControlLabel 
                    as={'h1'} 
                    value='last_name' 
                    label='Last Name' 
                    control={<Radio />} 
                    />
                <FormControlLabel 
                    as={'h1'} 
                    value='username' 
                    control={<Radio />} 
                    label='Username' 
                    />
                <FormControlLabel 
                    as={'h1'} 
                    value='password' 
                    label='Password' 
                    control={<Radio />} 
                    />
                <FormControlLabel 
                    as={'h1'} 
                    value='bio' 
                    label='Bio' 
                    control={<Radio />} 
                    />
            </RadioGroup>
        </FormControl>
         {editValue === 'first_name' && <EditFirst 
                                            id={user.id} 
                                            onSuccess={onSuccess} 
                                            onFail={onFail}/>}
         {editValue === 'last_name' && <EditLast 
                                            id={user.id} 
                                            onSuccess={onSuccess} 
                                            onFail={onFail}/>}
         {editValue === 'password' && <EditPassword 
                                            user={user} 
                                            onSuccess={onSuccess} 
                                            onFail={onFail}/>}
         {editValue === 'username' && <EditUsername 
                                            id={user.id} 
                                            onSuccess={onSuccess} 
                                            onFail={onFail}/>}
         {editValue === 'bio' && <EditBio 
                                        id={user.id} 
                                        onSuccess={onSuccess} 
                                        onFail={onFail}/>}
    </>
    )

}

export default EditAccount