import { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { 
    Box, 
    TextField, 
    Button, 
    FormControl,
    Snackbar,
} from '@mui/material'


function Signup({ updateUser , setHasAccount }){
    const [ openSnackBar , setOpenSnackBar ] = useState(false)
    const [ snackbarMessage , setSnackbarMessage ] = useState('')

    const handleSnackbarClose = () => {
        setOpenSnackBar(false)
    }

    const handleUserExists = () => {
        setHasAccount(true)
    }

    const formSchema = yup.object().shape({
        first_name: yup.string().required('Must enter first name'),
        last_name: yup.string().required('Must enter last name'),
        username: yup.string().required('Must declare a username'),
        password: yup.string().required('Must enter a password')
    })

    const formik = useFormik({
        initialValues: {
            first_name: '',
            last_name: '',
            username: '',
            password: '',
        },
        validationSchema: formSchema,
        onSubmit: (values) => {
            fetch('/signup', {
                method: 'POST',
                headers: {
                    'content-type':'application/json',
                },
                body: JSON.stringify(values, null, 2)
            })
            .then(r => {
                if (r.status === 201){
                    r.json().then((newUser) => {
                        updateUser(newUser)
                    })
                } else {
                    setSnackbarMessage('Error: User Creation failed')
                    setOpenSnackBar(true)
                }
            })
        }
    })

    return (
        <FormControl 
            component={'form'}
            alignContent={'center'}
            display={'block'}
            height={'100%'}
            backgroundColor={'grey'}
            autoComplete='off'
            onSubmit={formik.handleSubmit}
        >
            <TextField 
                label='First Name'
                name='first_name'
                onChange={formik.handleChange}
                value={formik.values.first_name}
                helperText='required *'
                />
            <TextField
                label='Last Name'
                name='last_name'
                onChange={formik.handleChange}
                value={formik.values.last_name}
                helperText='required *'
                />
            <TextField
                label="Username"
                name='username'
                onChange={formik.handleChange}
                value={formik.values.username}
                helperText='required *'
                />
            <TextField 
                label='Password'
                name='password'
                onChange={formik.handleChange}
                value={formik.values.password}
                helperText='required *'
                />
            <Snackbar
                open={openSnackBar}
                autoHideDuration={3000}
                onClose={handleSnackbarClose}
                message={snackbarMessage}
                anchorOrigin={{vertical: 'top', horizontal: 'right'}}
            />
            <Button type='submit'>Sign Up</Button>
            <Button type='click' onClick={handleUserExists}>Already have an Account?</Button>

        </FormControl>
    )
}

export default Signup