import { useFormik } from 'formik';
import * as yup from 'yup';
import {
    FormControl,
    TextField,
    Typography,
    IconButton
} from '@mui/material'

function EditUsername({id, onSuccess, onFail}){

    const successMessage = 'Your Username has been successfully updated'
    const failedMessage = 'Your Username could not be updated, try again'

    const formSchema = yup.object().shape({
        username: yup.string().min(3).max(20).required()
    })

    const formik = useFormik({
        initialValues: {
            username:'',
        },
        validationSchema: formSchema,
        onSubmit: (value) => {
            fetch(`/users/${id}`, {
                method: 'PATCH',
                headers: {
                    'content-type':'application/json',
                },
                body: JSON.stringify(value, null, 2)
            })
            .then(r => {
                if (r.ok){
                    r.json().then(user => onSuccess(user, successMessage))
                } else {
                    onFail(failedMessage)
                }
            })
        }
    })

    return (
        <>
            <FormControl
                component={'form'}
                display={'flex'}
                height={'100%'}
                autoComplete='off'
                onSubmit={formik.handleSubmit}
                >
                <Typography 
                    variant='h1' 
                    sx={{
                        textDecoration:'underline', 
                        fontSize:'2.5vh', 
                        paddingBottom:'2%'
                        }}
                    >
                    Username
                </Typography>
                <TextField
                    required
                    label='Username'
                    name='username'
                    onChange={formik.handleChange}
                    value={formik.values.username}
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
        </>
    )
}

export default EditUsername