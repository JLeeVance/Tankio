import { useContext, useState, useEffect } from 'react'
import {
    Grid,
    Paper,
    Typography,
    Divider,
    Button,
    IconButton,
    Box,
    Container
} from '@mui/material'
import { OwnedPlantsContext } from '../../context/ownedplants'
import { OwnedFishContext } from '../../context/ownedfish'
import TankTile from './tanktile'
import StockedTile from './stockedtile'
import TankSelector from './tankselector'
import ResultsMessage from './results_message'
import BioloadInfo from './methodsFuncsBearsOhMY/bioload_info'
import FiltrationInfo from './methodsFuncsBearsOhMY/filtration_info'
import { 
    getFishTotalBioload,
    getPlantTotalImprovement,
    handleBadResponse,
    handleGoodResponse,
    handleNoFishStocked,
    handleHeavilyPlantedTank
 } from './methodsFuncsBearsOhMY/func_for_test'
import { response } from './methodsFuncsBearsOhMY/test_responses'

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
    const [ showBioInfo, setShowBioInfo ] = useState(false)
    const [ showFiltrationInfo, setShowFiltrationInfo ] = useState(false)


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

    function handleShowBioInfo(){
        setShowBioInfo(true)
    }

    function handleCloseBioInfo(){
        setShowBioInfo(false)
    }

    function handleShowFiltrationInfo(){
        setShowFiltrationInfo(true)
    }

    function handleCloseFiltrationInfo(){
        setShowFiltrationInfo(false)
    }

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
    
    return (
        <div
            style={{
            backgroundColor: 'lightgrey',
            top: '150%',
            position: 'inherit',
            
            }}>
            <Grid container maxWidth={'100%'} style={{height:'80vh'}}>
                {message.length > 0 && <ResultsMessage 
                                            results_message={message} 
                                            onResultClose={resetMessage} 
                                            stockedFish={stockedFish} 
                                            stockedPlants={stockedPlants} 
                                            tank={chosenTank}/>
                                            }
                <Grid item xs={12} textAlign={'center'} sx={{padding:'1%'}}>

                    <Grid container>
                        <Grid item xs={2}>
                            <IconButton size={'small'} onClick={handleShowFiltrationInfo} sx={{top:'20%', bottom:0, left:-10}}>
                                Filtration Info
                            </IconButton>
                            {showFiltrationInfo && <FiltrationInfo onDialogClose={handleCloseFiltrationInfo}/>}
                        </Grid>
                        <Grid item xs={8}>
                            <Typography variant='h4' sx={{textDecoration:'underline'}}>TankTester</Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <IconButton size={'small'} onClick={handleShowBioInfo} sx={{top:'20%', bottom:0, left:10}}>
                                Bioload Info
                            </IconButton>
                            {showBioInfo && <BioloadInfo onDialogClose={handleCloseBioInfo}/>}
                        </Grid>
                    </Grid>


                </Grid>


                <Divider />


                <Grid container maxWidth={'100%'}>
                    <Grid item xs={3} textAlign={'left'} padding={'1%'}>    
                        <Typography variant='h6' sx={{textDecoration:'underline', textAlign:'center', marginBottom:'2%'}}>Your Plants</Typography>
                        <div style={{ overflow: 'scroll', height:'61vh', backgroundColor:'grey', padding:'1%'}}>
                            {ownedPTile}
                        </div>
                    </Grid>
                    <Grid item xs={6} >
                        <Grid container maxWidth={'100%'} style={{height:'65vh', backgroundColor:'white'}} >

                            <Grid item xs={12} padding={'1%'}>
                                <TankSelector onTankSelect={handleTankSet} />
                            </Grid>

                            <Grid item xs={4} sx={{textAlign:'center', backgroundColor:'lightgrey', height:'50vh'}}>
                                <Grid container maxWidth={'100%'}>
                                    <Grid item xs={12}>
                                        <Typography variant='overline' sx={{textDecoration:'underline'}}>Stocked</Typography>
                                        <div style={{ overflow: 'scroll', padding:'1%'}}>
                                            {stockedPlants}
                                        </div>
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid item xs={4} sx={{textAlign:'center'}}>
                                <Box>
                                    <Button onClick={runTest}>Run Tank Test</Button>
                                </Box>
                            </Grid>

                            <Grid item xs={4} sx={{textAlign:'center', backgroundColor:'lightgrey', height:'50vh'}}>
                                <Typography variant='overline' sx={{textDecoration:'underline'}}>Stocked</Typography>
                                <div style={{ overflow: 'scroll', padding:'1%'}}>
                                    {stockedFish}
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={3} textAlign={'right'} padding={'1%'}>
                        <Typography variant='h6' sx={{textDecoration:'underline', textAlign:'center', marginBottom:'2%'}}>Your Fish</Typography>
                        <div style={{ overflow: 'scroll', height:'61vh', backgroundColor:'grey', padding:'1%'}}>
                            {ownedFTile}
                        </div>
                    </Grid>  
                </Grid>


            </Grid>
        </div>
    )
}

export default TankTester


