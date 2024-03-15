import { createContext, useState } from "react";

const OwnedFishContext = createContext({
    ownedFish: [],
    setOwnedFish: () => {}
})

function OwnedFishProvider({ children }){
    const [ ownedFish, setOwnedFish ] = useState([])

    return (
        <OwnedFishContext.Provider value={{ ownedFish, setOwnedFish }}>
            {children}
        </OwnedFishContext.Provider>
    )
}

export { OwnedFishContext, OwnedFishProvider}
