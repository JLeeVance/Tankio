import { useContext, useState, useEffect } from 'react'
import {
    Grid,
    Typography,
    IconButton,
    Container,
} from '@mui/material'
import { OwnedPlantsContext } from '../../context/ownedplants'
import { OwnedFishContext } from '../../context/ownedfish'
import TankTile from './tanktile'
import StockedTile from './stockedtile'
import TankSelector from './tankselector'
import BioloadInfo from './methodsFuncsBearsOhMY/bioload_info'
import FiltrationInfo from './methodsFuncsBearsOhMY/filtration_info'
import ResultsMessage from './methodsFuncsBearsOhMY/results_message'
import Instructions from './methodsFuncsBearsOhMY/instructions'
import AddFromTest from './methodsFuncsBearsOhMY/add_from_test'
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
    const [ showInstructions, setShowInstructions ] = useState(false)
    const [ showAddFromTest, setShowAddFromTest ] = useState(false)

    const [ addType, setAddType ] = useState('')


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

    function handleShowInstructions(){
        setShowInstructions(true)
    }

    function handleCloseInstructoins(){
        setShowInstructions(false)
    }

    function handleAddFromTest(type){
        setAddType(type)
        setShowAddFromTest(true)
    }

    function handleCloseAddFromTest(){
        setShowAddFromTest(false)
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
        // console.log('hit')
        // console.log(chosenTank)
        // console.log(fishTestCountDic)
        // console.log(plantTestCountDic)
        // console.log(stockedFish)
        // console.log(stockedPlants)

        let fishImpact = getFishTotalBioload(fishTestCountDic, stockedFish)
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
   
            <Grid 
                container 
                style={{
                    height:'78vh', 
                    backgroundColor: 'rgba(249, 247, 240, .2)', 
                    position:'fixed', 
                    top:'10vh', 
                    marginTop:'3%', 
                    justifyContent:'center',
                    left:.1,
                    right:.1

                    }}
                    >
                    {message.length > 0 && <ResultsMessage 
                                                results_message={message} 
                                                onResultClose={resetMessage} 
                                                stockedFish={stockedFish} 
                                                stockedPlants={stockedPlants} 
                                                tank={chosenTank}
                                                plantTestCountDic={plantTestCountDic}
                                                fishTestCountDic={fishTestCountDic}/>
                                                }
                <Grid 
                    item 
                    xs={12} 
                    textAlign={'center'} 
                    sx={{padding:'.25%'}}
                    >
                    <Grid container>
                        <Grid item xs={2}>
                            <IconButton 
                                size={'small'} 
                                onClick={handleShowFiltrationInfo} 
                                sx={{
                                    fontSize:'2.25vh', 
                                    top:'120%',
                                    color:'rgb(79, 92, 60)', 
                                    bottom:0, 
                                    left:-10
                                    }}
                                >
                                Filtration Info
                            </IconButton>
                            {showFiltrationInfo && <FiltrationInfo onDialogClose={handleCloseFiltrationInfo}/>}
                        </Grid>
                        <Grid item xs={8}>
                            <Typography 
                                variant='h4' 
                                fontSize={'3.5vh'} 
                                sx={{
                                    color:'rgb(63, 35, 5)' 
                                    }}
                                >
                                TankTester
                            </Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <IconButton 
                                size={'small'} 
                                onClick={handleShowBioInfo} 
                                sx={{
                                    fontSize:'2.25vh', 
                                    top:'120%',
                                    bottom:0, 
                                    left:10,
                                    color:'rgb(20, 99, 142)', 
                                    }
                                }>
                                Bioload Info
                            </IconButton>
                            {showBioInfo && <BioloadInfo onDialogClose={handleCloseBioInfo}/>}
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} textAlign={'center'}>
                    <IconButton 
                        sx={{
                            fontSize:'2.8vh',
                            color:'rgb(63, 35, 5, .8)' 
                        }} 
                        variant='h4' 
                        onClick={handleShowInstructions}
                        >
                        Instructions
                    </IconButton >
                    {showInstructions && <Instructions onInstructionsClose={handleCloseInstructoins} />}
                </Grid>
                <Grid container maxWidth={'100%'}>
                    <Grid 
                        item xs={3} 
                        textAlign={'left'} 
                        padding={'1%'}
                        >    
                        <Typography 
                            variant='h6' 
                            sx={{
                                fontSize:'3.2vh', 
                                textDecoration:'underline', 
                                textAlign:'center', 
                                marginBottom:'2%',
                                color: 'rgb(79, 92, 60)' 
                                }}
                            >
                            Your Plants
                        </Typography>
                        <div 
                            style={{ 
                                overflow: 'scroll', 
                                height:'60vh', 
                                backgroundColor:'RGB(118, 136, 91, .9)', 
                                padding:'1%'
                                }}
                            >
                            {ownedPTile}
                        </div>
                        <IconButton 
                            onClick={() => handleAddFromTest('plant')} 
                            sx={{
                                fontSize:'1.9vh', 
                                top:'2.5%',
                                color:'rgb(79, 92, 60)'
                                }}
                            >
                            Need More Plants?
                        </IconButton>
                        {showAddFromTest && <AddFromTest type={addType} onAddFromTestClose={handleCloseAddFromTest} />}
                    </Grid>
                    <Grid item xs={6} height={'50%'}>
                        <Grid 
                            container 
                            maxWidth={'100%'} 
                            style={{
                                height:'65vh',
                                padding:'.75%'
                                }}
                            >
                            <Grid 
                                item 
                                xs={12} 
                                padding={'1%'} 
                                style={{
                                    display: 'flex', 
                                    flexDirection: 'row', 
                                    alignItems: 'center'
                                    }}
                                >
                                <TankSelector onTankSelect={handleTankSet} />
                            </Grid>
                            <Grid 
                                item 
                                xs={5.75} 
                                style={{ 
                                    textAlign: 'center',
                                    backgroundColor:'rgb(255, 255, 254)'
                                }}
                                >
                                <Typography 
                                    variant='overline' 
                                    sx={{
                                        textDecoration: 'underline',
                                        color:'rgb(63, 35, 5)',
                                        fontSize:'1.5vh' 
                                        }}
                                    >
                                        Stocked
                                </Typography>
                                <Container 
                                    style={{ 
                                        padding: '1%', 
                                        height:'50vh', 
                                        overflow:'scroll'
                                        }}
                                    >
                                    {stockedPlants}
                                </Container>
                            </Grid>
                            <Grid item xs={.5} bgcolor={'rgb(255, 255, 254)'}></Grid>     
                            <Grid 
                                item 
                                xs={5.75} 
                                sx={{ 
                                    textAlign:'center', 
                                    backgroundColor:'rgb(255, 255, 254)'
                                }}
                                >
                                <Typography 
                                    variant='overline' 
                                    sx={{ 
                                        textDecoration: 'underline',
                                        color:'rgb(63, 35, 5)',
                                        fontSize:'1.5vh' 
                                        }}
                                    >
                                    Stocked
                                </Typography>
                                <Container 
                                    style={{ 
                                        overflow: 'scroll', 
                                        padding: '1%',  
                                        height:'50vh'
                                    }}
                                    >
                                    {stockedFish}
                                </Container>
                            </Grid>
                        </Grid>
                        <Grid 
                            item 
                            xs={12} 
                            sx={{
                                display: 'flex', 
                                flexDirection: 'column', 
                                alignItems: 'center', 
                                justifyContent: 'flex-end'
                                }
                            }>
                            <IconButton 
                                onClick={runTest} 
                                sx={{
                                    fontSize:'2.2vh', 
                                    top:'3.3vh',
                                    color:'rgb(63, 35, 5)'
                                    }}
                                >
                                Run Tank Test
                            </IconButton>
                        </Grid>
                    </Grid>
                    <Grid 
                        item 
                        xs={3} 
                        textAlign={'right'} 
                        padding={'1%'}
                        >
                        <Typography 
                            variant='h6'
                            sx={{
                                fontSize:'3.2vh', 
                                textDecoration:'underline', 
                                textAlign:'center', 
                                marginBottom:'2%',
                                color: 'rgb(20, 99, 142)' 
                                }}
                            >
                            Your Fish
                        </Typography>
                        <div 
                            style={{
                                overflow: 'scroll', 
                                height:'60vh', 
                                backgroundColor: 'rgb(64, 162, 216, .3)', 
                                padding:'1%'
                                }}
                            >
                            {ownedFTile}
                        </div>
                        <IconButton 
                            onClick={() => handleAddFromTest('fish')} 
                            sx={{
                                fontSize:'1.9vh', 
                                top:'2.5%',
                                color:'rgb(20, 99, 142)'
                                }}
                            >
                            Need More Fish?
                        </IconButton>
                        {showAddFromTest && <AddFromTest type={addType} onAddFromTestClose={handleCloseAddFromTest} />}
                    </Grid>  
                </Grid>
            </Grid>
    )
}

export default TankTester


