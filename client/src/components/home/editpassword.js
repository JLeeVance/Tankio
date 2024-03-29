import { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import {
    FormControl,
    TextField,
    Typography,
    IconButton
} from '@mui/material'

function EditPassword({ user, onSuccess, onFail }){

    const [ authed, setAuthed ] = useState(false)

    const successMessage = 'Your Password has been successfully updated'
    const failedMessage = 'Your Password could not be updated, try again'

    const authFormSchema = yup.object().shape({
        password: yup.string().required('your current password is required')
    })

    const authformik = useFormik({
        initialValues: {
            password:'',
            username:user.username,
        },
        validationSchema: authFormSchema,
        onSubmit:(values) => {
            fetch('/login', {
                method: 'POST',
                headers: {
                    'content-type':'application/json',
                },
                body: JSON.stringify(values)
            })
            .then(r => {
                if(r.ok){
                    r.json().then(user => 
                        setAuthed(true))
                } else {
                    r.json().then(() => onFail(failedMessage))
                }
            })
        }
    })

    const passwordFormSchema = yup.object().shape({
        password: yup.string().required('you must enter a new password')
    })

    const passformik = useFormik({
        initialValues: {
            password: '',
        },
        validationSchema: passwordFormSchema,
        onSubmit:(values) => {
            fetch(`/users/${user.id}`, {
                method: 'PATCH',
                headers: {
                    'content-type':'application/json',
                },
                body: JSON.stringify(values)
            })
            .then(r => {
                if(r.ok){
                    r.json().then(updatedUser => onSuccess(updatedUser, successMessage))
                } else {
                    r.json().then(() => onFail(failedMessage))
                }
            })
        }

    })

    return (
        <>
            {authed ? 
            <FormControl
                component={'form'}
                display={'flex'}
                height={'100%'}
                autoComplete='off'
                onSubmit={passformik.handleSubmit}
                >
                <Typography 
                    variant='h1' 
                    sx={{
                        textDecoration:'underline', 
                        fontSize:'2.5vh', 
                        paddingBottom:'2%'
                        }}
                    >
                    New Password
                </Typography>
                <TextField
                    required
                
                    label='New Password'
                    name='password'
                    onChange={passformik.handleChange}
                    value={passformik.values.password}
                    />
                <IconButton 
                    type='submit' 
                    style={{
                        fontSize:'2.5vh', 
                        paddingBottom:'2%'
                        }}
                    >
                    Submit
                </IconButton>
            </FormControl> 
            :
            <FormControl
                component={'form'}
                display={'flex'}
                height={'100%'}
                autoComplete='off'
                onSubmit={authformik.handleSubmit}
                >
                <Typography 
                    variant='h1' 
                    sx={{
                        textDecoration:'underline', 
                        fontSize:'2.5vh', 
                        paddingBottom:'2%'
                        }}
                    >
                    Current Password
                </Typography>
                <TextField
                    required
                    
                    label='Current Password'
                    name='password'
                    onChange={authformik.handleChange}
                    value={authformik.values.password}
                    />
                <IconButton 
                    type='submit' 
                    style={{
                        fontSize:'2.5vh', 
                        paddingBottom:'2%'
                        }}
                    >
                    Submit
                </IconButton>
            </FormControl>
            }
        </>
    )
}

export default EditPassword