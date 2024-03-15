import { createContext , useState  } from "react";

const OwnedPlantsContext = createContext({
    ownedPlants: [],
    setOwnedPlants: () => {}
})

function OwnedPlantsProvider({ children }){
    const [ ownedPlants, setOwnedPlants ] = useState([])

    return (
        <OwnedPlantsContext.Provider value={{ownedPlants, setOwnedPlants}}>
            {children}
        </OwnedPlantsContext.Provider>
    )
}

export { OwnedPlantsContext, OwnedPlantsProvider}