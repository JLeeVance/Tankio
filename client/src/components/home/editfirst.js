import { useFormik } from 'formik';
import * as yup from 'yup';
import {
    FormControl,
    Button,
    TextField,
    Typography
} from '@mui/material'

function EditFirst({ id , onSuccess, onFail }){

    const successMessage = 'Your First Name has been successfully updated'
    const failedMessage = 'Your First Name could not be updated, try again'

    const formSchema = yup.object().shape({
        first_name: yup.string().min(2, 'first name must be longer than 1 character').max(20, 'first name must be shorter than 21 characters').required('first name is required')
    })

    const formik = useFormik({
        initialValues: {
            first_name:'',
        },
        validationSchema: formSchema,
        onSubmit: (value) => {
            fetch(`/users/${id}` , {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
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
                <Typography variant='overline' sx={{textDecoration:'underline'}}>First Name</Typography>
                <TextField
                    required
                    label='First Name'
                    name='first_name'
                    onChange={formik.handleChange}
                    value={formik.values.first_name}
                    helperText='required *'
                    />
                <Button type='submit'>Submit</Button>
            </FormControl>
        </>
    )
}

export default EditFirst