import { useContext } from 'react'
import { UserContext } from '../../context/user'

function Home(){

    const { user } = useContext(UserContext)

    console.log(user)




    return (
        <>Home</>
    )

}

export default Home