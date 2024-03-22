import { useState } from 'react';
import { Container } from '@mui/material';
import Login from './login.js'
import Signup from './signup.js'

function AccessContainer({ updateUser }){

    const [ hasAccount , setHasAccount ] = useState(true)

    return(
        <Container>
            {hasAccount ?
                <Login 
                    updateUser={updateUser}
                    setHasAccount={setHasAccount}/> 
                :
                <Signup 
                    updateUser={updateUser}
                    setHasAccount={setHasAccount}/>
            }
        </Container>
    )
}

export default AccessContainer;