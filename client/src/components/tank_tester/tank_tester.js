import { useContext, useState, useEffect } from 'react'
import {
    Grid,
    Box,
    Typography,
    Divider,
    Snackbar,
    Button,
} from '@mui/material'
import { OwnedPlantsContext } from '../../context/ownedplants'
import { OwnedFishContext } from '../../context/ownedfish'
import TankTile from './tanktile'
import StockedTile from './stockedtile'
import TankSelector from './tankselector'
import ResultsMessage from './results_message'
import { 
    getFishTotalBioload,
    getPlantTotalImprovement,
    handleBadResponse,
    handleGoodResponse,
    handleNoFishStocked,
    handleHeavilyPlantedTank
 } from './functions'
import { response } from './test_responses'

function TankTester(){

    const { ownedPlants } = useContext(OwnedPlantsContext)
    const { ownedFish } = useContext(OwnedFishContext)

    const [ allTanks, setAllTanks ] = useState([])
    const [ chosenTank, setChosenTank ] = useState({})

    const [ stockedFish, setStockedFish ] = useState([])
    const [ stockedPlants, setStockedPlants ] = useState([])

    const [ stockedObjects, setStockedObjects ] = useState([])

    const [ plantTestCountDic, setPlantTestCountDic ] = useState({})
    const [ fishTestCountDic, setFishTestCountDic ] = useState({})
    const [ message, setMessage ] = useState('')

    useEffect(() => {
        fetch('/tanks').then(r => r.json())
        .then(tanks => {
            setAllTanks(tanks)
        })
    }, [])

    useEffect(() => {
        handleStockedObjects()
    }, [stockedObjects])

    useEffect(() => {
        handleTankSet(10)
    }, [allTanks])
   
    const ownedFTile = ownedFish.map(fish => <TankTile key={fish.fish.common_name} common={fish.fish.common_name} number={fish.fish.bioload} object={fish.fish} onAddTile={addToTest2}/>)
    const ownedPTile = ownedPlants.map(plant => <TankTile key={plant.plant.common_name} common={plant.plant.common_name} number={plant.plant.filtration} object={plant.plant} onAddTile={addToTest2}/>)

    function handleCountChange(object, action){
        if(object.hasOwnProperty('bioload')){
            if(action === 'increase'){
                setFishTestCountDic((fishTestCountDic) => {
                    let newDic = { ...fishTestCountDic}
                    newDic[object.common_name] += 1
                    return newDic
                })
            } else if(action === 'decrease'){
                setFishTestCountDic((fishTestCountDic) => {
                    let newDic = { ...fishTestCountDic}
                    newDic[object.common_name] -= 1
                    return newDic
                })
            }
        } else if(object.hasOwnProperty('filtration')){
            if(action === 'increase'){
                setPlantTestCountDic((plantTestCountDic) => {
                    let newDic = { ...plantTestCountDic }
                    newDic[object.common_name] += 1
                    return newDic
                })
            } else if(action === 'decrease'){
                setPlantTestCountDic((plantTestCountDic) => {
                    let newDic = { ...plantTestCountDic }
                    newDic[object.common_name] -= 1
                    return newDic
                })
            }
        }
    }

    function addToTestDic(object){
        if(object.hasOwnProperty('bioload')){
            setFishTestCountDic((fishTestCountDic) => ({
                ...fishTestCountDic,
                [object.common_name]:1
            }))
        } else if(object.hasOwnProperty('filtration')){
            setPlantTestCountDic((plantTestCountDic) => ({
                ...plantTestCountDic,
                [object.common_name]:1
            }))
        }
    }

    function removeFromTestDic(object){
        if(object.hasOwnProperty('bioload')){
            setFishTestCountDic(fishTestCountDic => {
                const newDic = { ...fishTestCountDic }
                delete newDic[object.common_name]
                return newDic
            })
        } else if(object.hasOwnProperty('filtration')){
            setPlantTestCountDic(plantTestCountDic => {
                const newDic = {...plantTestCountDic}
                delete newDic[object.common_name]
                return newDic
            })
        }
    }

    function handleTankSet(value){
        let tankToSet = allTanks.filter((tank) => tank.size === parseInt(value))[0]
        setChosenTank(tankToSet)
    }

    function addToTest2(object){
        if(stockedObjects.includes(object)){
            return
        }
        addToTestDic(object)
        setStockedObjects([...stockedObjects, object])
    }

    function removeFromTest2(object){
        let newStockedObjects = stockedObjects.filter(currObj => currObj !== object)
        removeFromTestDic(object)
        setStockedObjects(newStockedObjects)
    }

    function handleStockedObjects(){
        let newStockedFish = []
        let newStockedPlants = []

        stockedObjects.forEach(obj => {
            if(obj.hasOwnProperty('bioload')){
                let newStockedTile = <StockedTile key={obj.common_name} object={obj} onRemoveClick={removeFromTest2} onStateChange={handleCountChange}/>
                newStockedFish.push(newStockedTile)
            } else if(obj.hasOwnProperty('filtration')){
                let newStockedTile = <StockedTile key={obj.common_name} object={obj} onRemoveClick={removeFromTest2} onStateChange={handleCountChange}/>
                newStockedPlants.push(newStockedTile)
            }
        })
        setStockedFish(newStockedFish)
        setStockedPlants(newStockedPlants)
    }
    
    function runTest(){
        console.log('hit')
        console.log(chosenTank)
        console.log(fishTestCountDic)
        console.log(plantTestCountDic)
        console.log(stockedFish)
        console.log(stockedPlants)


        let fishImpact = getFishTotalBioload(fishTestCountDic, stockedFish)  // Negative Num
        let plantImprovement = getPlantTotalImprovement(plantTestCountDic, stockedPlants)

        const benchmarker = chosenTank.maximum_bioload
        let testmarker = fishImpact - plantImprovement
        let difference = 0
        if(fishImpact === 0 && plantImprovement === 0){
            setMessage(response['NothingStocked'].message)
            }else{
                if(testmarker >= 0){
                    difference = benchmarker - testmarker
                    if(difference >= 0){
                        setMessage(handleGoodResponse(difference))
                    }else{
                        setMessage(handleBadResponse(difference))
                    }
                }else{
                    let fishCount = stockedFish.length
                    if(fishCount === 0){
                        setMessage(handleNoFishStocked())
                    }else{
                        setMessage(handleHeavilyPlantedTank())
                    }
                }
            }
    }

    function resetMessage(){
        setMessage('')
    }
    
    





    // const removeFromTest = (type, object,) => {
    //     console.log('OBJECT PASSED IN:' ,object)
    //     console.log('stockedNames Inside removeFromTest' , stockedNames)
        
    //     let common_name = object.common_name
        
    //     let nameToDelete = stockedNames.filter(name => name === common_name)
    //     console.log('NAME FROM FILTERED LIST TO DELETE' , nameToDelete)
        
    //     let newStockedNames = stockedNames.filter(name => name !== common_name)
    //     console.log('AFTER DELETE ~newStockedNames')

    //     setStockedNames(newStockedNames)
    //     removeTileFromTest(type, object, stockedNames, stockedFish, stockedPlants)
    // }

    // function removeTileFromTest({type, object, stockedNames, stockedPlants}){
    //     if(type === 'fish'){
    //         console.log('Inside RemoveTileFromTest~state, StockedFish', stockedFish)
    //         // let newStockedFish = stockedFish.filter(fish => fish.props.object.common_name !== common_name)
    //         // console.log('After Filter of StockedFish' , newStockedFish)
    //         // setStockedFish(newStockedFish)
    //         // removeFromTestDic(type, object)
    //     } else if(type === 'plant'){
    //         console.log('Inside RemoveTileFromTest~state, StockedPlants', stockedPlants)
    //         // let newStockedPlants = stockedPlants.filter(plant => plant.props.object.common_name !== common_name)
    //         // console.log('After Filter of StockedFish' , newStockedPlants)
    //         // setStockedPlants(newStockedPlants)
    //         // removeFromTestDic(type, object)
    //     }
    // }
    
    // function addToTest(type, object){
    //     if(stockedNames.includes(object.common_name)){
    //         return
    //     }
    //     setStockedNames((stockedNames)=> [...stockedNames, object.common_name])
    //     console.log(stockedNames)
    //     if(stockedNames.length > 0){
    //     addTileToTest(type, object)
    //     }
    // }

    // function addTileToTest(type, object){

    //     if(type === 'fish'){
    //         console.log(stockedNames)
    //         let newStockedTile = <StockedTile key={object.common_name} type={type} object={object} onRemoveClick={removeFromTest} onStateChange={handleCountChange} stockedNames={stockedNames} stockedFish={stockedFish}/>
    //         setStockedFish((stockedFish) => [...stockedFish, newStockedTile])
    //         console.log('inside addTileToTest~After setStockedFish' , stockedNames)
    //     } else if(type === 'plant'){
    //         let newStockedTile = <StockedTile key={object.common_name} type={type} object={object} onRemoveClick={removeFromTest} onStateChange={handleCountChange} stockedNames={stockedNames} stockedPlants={stockedPlants}/>
    //         setStockedPlants((stockedPlants)=> [...stockedPlants, newStockedTile])
    //         console.log('inside addTileToTest~After setStockedPlants', stockedNames)
    //     }
    // }
    // console.log('outside addTileToTest' , stockedNames)


    return (
        <Grid container maxWidth={'100%'} maxHeight={'100%'} sx={{backgroundColor:'lightgrey'}}>
            {message.length > 0 && <ResultsMessage 
                                        results_message={message} 
                                        onResultClose={resetMessage} 
                                        stockedFish={stockedFish} 
                                        stockedPlants={stockedPlants} 
                                        tank={chosenTank}/>
                                        }
            <Grid item xs={12} textAlign={'center'} margin={'1%'}>
                <Typography variant='h4' sx={{textDecoration:'underline'}}>TankTester</Typography>
            </Grid>
            <Divider/>
            <Grid container maxWidth={'100%'}>
                <Grid item xs={3} textAlign={'left'}>
                    <Typography variant='h6' sx={{textDecoration:'underline', textAlign:'center'}}>Your Plants</Typography>
                    <Box>
                        {ownedPTile}
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Grid container maxWidth={'100%'} sx={{backgroundColor:'white'}} >
                        <Grid item xs={12} >
                            <TankSelector onTankSelect={handleTankSet} />
                        </Grid>
                        <Divider/>
                        <Grid item xs={4} sx={{textAlign:'center'}}>
                            <Typography variant='overline' sx={{textDecoration:'underline'}}>Stocked</Typography>{stockedPlants}
                        </Grid>
                        <Grid item xs={4} sx={{textAlign:'center'}}>
                            <Box>
                                <Button onClick={runTest}>Run Tank Test</Button>
                            </Box>
                        </Grid>
                        <Grid item xs={4} sx={{textAlign:'center'}}>
                        <Typography variant='overline' sx={{textDecoration:'underline'}}>Stocked</Typography>{stockedFish}
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={3} textAlign={'right'}>
                    <Typography variant='h6' sx={{textDecoration:'underline', textAlign:'center'}}>Your Fish</Typography>
                    <Box>
                        {ownedFTile}
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default TankTester


