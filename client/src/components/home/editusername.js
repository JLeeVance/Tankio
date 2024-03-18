import { useFormik } from 'formik';
import * as yup from 'yup';
import {
    FormControl,
    Button,
    TextField,
    Typography
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
                <Typography variant='overline' sx={{textDecoration:'underline'}}>Username</Typography>
                <TextField
                    required
                    label='Username'
                    name='username'
                    onChange={formik.handleChange}
                    value={formik.values.username}
                    helperText='required *'
                    />
                <Button type='submit'>Submit</Button>
            </FormControl>
        </>
    )
}

export default EditUsername