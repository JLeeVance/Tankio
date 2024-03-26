import { useState, useContext } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { 
    Box, 
    TextField, 
    Button, 
    FormControl,
    Snackbar,
} from '@mui/material'
import { UserContext } from '../../context/user';

function Login({ updateUser , setHasAccount  }){
    const [ openSnackBar , setOpenSnackBar ] = useState(false)
    const [ snackbarMessage , setSnackbarMessage ] = useState('')

    const handleSnackbarClose = () => {
        setOpenSnackBar(false)
    }
    
    function handleSignupClick(){
        setHasAccount(false)
    }

    const formSchema = yup.object().shape({
        username: yup.string().required('Must enter a username'),
        password: yup.string().required('Must enter a password')
    });

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema: formSchema,
        onSubmit: (values) => {
            fetch('/login', {
                method: 'POST',
                headers: {
                    'content-type':'application/json',
                },
                body: JSON.stringify(values, null, 2)
            })
            .then((r) => {
                if (r.ok){
                    r.json().then((userData) => {

                        updateUser(userData)
                        
                    })
                } else if (r.status === 401 || r.status === 404 ){
                    setSnackbarMessage('Error: Authetication Failed.')
                    setOpenSnackBar(true)
                    
                }
            })
        }
    })


    return(
        <FormControl
            component={'form'}
            display={'block'}
            height={'100%'}
            autoComplete='off'
            onSubmit={formik.handleSubmit}
            >
            <TextField
                required
                label="Username"
                name='username'
                onChange={formik.handleChange}
                value={formik.values.username}
                helperText='required *'
                />
            <TextField  
                required
                label="Password"
                name='password'
                type='password'
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
            <Button type='submit'>Login</Button>
            <Button type='click' onClick={handleSignupClick}>New here? Click to signup!</Button>
        </FormControl >
    )
}

export default Login;