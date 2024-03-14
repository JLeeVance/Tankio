import { useState } from 'react';

function AccessContainer(){

    const [ hasAccount , setHasAccount ] = useState(true)

    if(hasAccount){
        return(
            <>
                <h1>Login</h1>
            </>
        )
    }
    else{
        return(
            <>
                <h1>SignUp</h1>
            </>
        )
    } 


}

export default AccessContainer;