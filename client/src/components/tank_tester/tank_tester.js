import TankTile from './tanktile'
import StockedTile from './stockedtile'
import TankSelector from './tankselector'
import BioloadInfo from './methodsFuncsBearsOhMY/bioload_info'
import FiltrationInfo from './methodsFuncsBearsOhMY/filtration_info'
import ResultsMessage from './methodsFuncsBearsOhMY/results_message'
import Instructions from './methodsFuncsBearsOhMY/instructions'
import AddFromTest from './methodsFuncsBearsOhMY/add_from_test'
import { useContext, useState, useEffect } from 'react'
import { OwnedPlantsContext } from '../../context/ownedplants'
import { OwnedFishContext } from '../../context/ownedfish'
import { response } from './methodsFuncsBearsOhMY/test_responses'
import { 
    getFishTotalBioload,
    getPlantTotalImprovement,
    handleBadResponse,
    handleGoodResponse,
    handleNoFishStocked,
    handleHeavilyPlantedTank
} from './methodsFuncsBearsOhMY/func_for_test'
import {
    Grid,
    Typography,
    IconButton,
    Container,
} from '@mui/material'

function TankTester(){

    const { ownedPlants } = useContext(OwnedPlantsContext)      /* Control for plants in a User's Profile */
    const { ownedFish } = useContext(OwnedFishContext)          /* Control for fish in a User's Profile */

    const [ allTanks, setAllTanks ] = useState([])
    const [ chosenTank, setChosenTank ] = useState({})          /* State for Tank selection */

    const [ stockedFish, setStockedFish ] = useState([])        /* State for stocked inhabitants cards */
    const [ stockedPlants, setStockedPlants ] = useState([])    /* State for stocked inhabitants cards */

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
    })

    useEffect(() => {
        handleStockedObjects()
    }, [stockedObjects])

    useEffect(() => {
        handleTankSet(10)
    }, [allTanks])
   
    const ownedFTile = ownedFish.map(fish => <TankTile 
                                                    key={fish.fish.common_name} 
                                                    common={fish.fish.common_name} 
                                                    number={fish.fish.bioload} 
                                                    object={fish.fish} 
                                                    onAddTile={addToTest2}/>)
    const ownedPTile = ownedPlants.map(plant => <TankTile 
                                                    key={plant.plant.common_name} 
                                                    common={plant.plant.common_name} 
                                                    number={plant.plant.filtration} 
                                                    object={plant.plant} 
                                                    onAddTile={addToTest2}/>)
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

    function addToTest2(object) {
        console.log(object);
        console.log(stockedObjects);
    
        let isStocked = stockedObjects.some(obj => obj.common_name === object.common_name);
    
        if (isStocked) {
            return;
        } else {
            addToTestDic(object);
            setStockedObjects([...stockedObjects, object]);
        }
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
                let newStockedTile = <StockedTile 
                                        key={obj.common_name} 
                                        object={obj} 
                                        onRemoveClick={removeFromTest2} 
                                        onStateChange={handleCountChange}
                                        />
                newStockedFish.push(newStockedTile)
            } else if(obj.hasOwnProperty('filtration')){
                let newStockedTile = <StockedTile 
                                        key={obj.common_name} 
                                        object={obj} 
                                        onRemoveClick={removeFromTest2} 
                                        onStateChange={handleCountChange}
                                        />
                newStockedPlants.push(newStockedTile)
            }
        })
        setStockedFish(newStockedFish)
        setStockedPlants(newStockedPlants)
    }
    
    function runTest(){

        let fishImpact = getFishTotalBioload(fishTestCountDic, stockedFish)
        let plantImprovement = getPlantTotalImprovement(plantTestCountDic, stockedPlants)

        const benchmarker = chosenTank.maximum_bioload                      /* Chosen tank maximum Bioload  (rated off of reccomended stocking for an average 10 gallon, then scaled up per tank   )*/
        let testmarker = fishImpact - plantImprovement                      /* Caluculates difference for the stocked tank                                                                          */
            let difference = 0
            if(fishImpact === 0 && plantImprovement === 0){                 /* Checks for empty Test                                                                                                */
            setMessage(response['NothingStocked'].message)                  
            }else{
                if(testmarker >= 0){                                        /* If test score is positive, meaning fish and plants have been stocked, and the filtration doesnt outweight the fish   */
                    difference = benchmarker - testmarker                   /* The difference between the maxBioload of the tank and the stocked inhabitant is caluculated                          */
                    if(difference >= 0){
                        setMessage(handleGoodResponse(difference))          /* If the tank has a positive score, good Response */
                    }else{
                        setMessage(handleBadResponse(difference))           /* If the tank has a negative score, bad Response  */
                    }
                }else{
                    let fishCount = stockedFish.length
                    if(fishCount === 0){
                        setMessage(handleNoFishStocked())                   /* Handles a plant only test                                                                                            */
                    }else{
                        setMessage(handleHeavilyPlantedTank())              /* If fish are present, and the stocked tank still has a negative num, handle GREAT response                             */
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
                    <Grid item xs={6}>
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
                    <Grid item xs={6}>
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
                        <Grid item xs={.5} ></Grid>     
                        <Grid 
                            item 
                            xs={5.75} 
                            sx={{ 
                                textAlign:'center',
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


