import { useFormik } from 'formik';
import * as yup from 'yup';
import {
    FormControl,
    Button,
    TextField,
    Typography
} from '@mui/material'

function EditBio({ id, onSuccess, onFail }){

    const successMessage = 'Your Bio has been successfully updated'
    const failedMessage = 'Your Bio could not be updated, try again'

    const formSchema = yup.object().shape({
        bio: yup.string().min(2)
    })

    const formik = useFormik({
        initialValues: {
            bio:'',
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
                <Typography variant='overline' sx={{textDecoration:'underline'}}>Bio</Typography>
                <TextField
                    required
                    label='Bio'
                    name='bio'
                    onChange={formik.handleChange}
                    value={formik.values.bio}
                    helperText='required *'
                    />
                <Button type='submit'>Submit</Button>
            </FormControl>
        </>
    )
}

export default EditBio