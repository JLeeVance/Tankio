import { useFormik } from 'formik';
import * as yup from 'yup';
import {
    FormControl,
    Button,
    TextField,
    Typography
} from '@mui/material'

function EditLast({ id, onSuccess, onFail }){

    const successMessage = 'Your Last Name has been successfully updated'
    const failedMessage = 'Your First Name could not be updated, try again'

    const formSchema = yup.object().shape({
        last_name: yup.string().min(2, 'last name must be longer than 1 character').max(20, 'last name must be shorter than 21 characters').required('last name is required')
    })

    const formik = useFormik({
        initialValues: {
            last_name:'',
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
    return(
        <>
            <FormControl
                component={'form'}
                display={'flex'}
                height={'100%'}
                autoComplete='off'
                onSubmit={formik.handleSubmit}
                >
                <Typography variant='overline' sx={{fontSize:'large', textDecoration:'underline'}}>Last Name</Typography>
                <TextField
                    required
                    label='Last Name'
                    name='last_name'
                    onChange={formik.handleChange}
                    value={formik.values.last_name}
                    helperText='required *'
                    />
                <Button type='submit'>Submit</Button>
            </FormControl>
        </>
    )
}

export default EditLast