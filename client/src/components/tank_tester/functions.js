import { response } from "./test_responses"

function sayHello(){
    console.log('hi')
}

function getFishTotalBioload(fishCount, stockedFish){
    let totalsDic = {}

    stockedFish.forEach((stockedFish) => {
        let bioload = stockedFish.props.object.bioload
        let common = stockedFish.props.object.common_name
        let multiplier = fishCount[common]
        let totalBioload = bioload * multiplier
        totalsDic[common] = totalBioload
    })

    let totalImpact = 0

    for(let num in totalsDic){
        totalImpact += totalsDic[num]
    }

    return totalImpact
}

function getPlantTotalImprovement(plantCount, stockedPlants){
    let totalsDic = {}

    stockedPlants.forEach((stockedPlant) => {
        totalsDic[stockedPlant.props.object.common_name] = (stockedPlant.props.object.filtration * (plantCount[stockedPlant.props.object.common_name]))
    })

    let totalImprovement = 0

    for(let num in totalsDic){
        totalImprovement += totalsDic[num]
    }

    return totalImprovement
}

function handleGoodResponse(difference){
    if(difference >= 0){
        if(difference >= 0 && difference <= 2){
            return response['Nuetral0'].message
        }else if(difference > 2 && difference <= 6){
            return response['Okay1'].message
        }else if(difference > 6 && difference <=12){
            return response['Great2'].message
        }else if(difference > 12 && difference <= 18){
            return response['Amazing3'].message
        }else{
            return response['Perfect4'].message
        }
    }else{
        return response['Halstead'].message
    }
}

function handleBadResponse(difference){
    if(difference < 0 && difference >= -2){
        return response['Nuetral0'].message
    }else if(difference < -2 && difference >= -4){
        return response['Meh-1'].message
    }else if(difference < -4 && difference >= -7){
        return response['Bad-2'].message
    }else if(difference < -7 && difference >= -17){
        return response['OhNo-3'].message
    }else if(difference < -17){
        return response['ICalledTheCops-4'].message
    }
}

function handleNoFishStocked(){
    return response['NoFishZone'].message
}

function handleHeavilyPlantedTank(){
    return response['Halstead'].message
}






export {sayHello, getFishTotalBioload, getPlantTotalImprovement, handleBadResponse, handleGoodResponse, handleNoFishStocked, handleHeavilyPlantedTank}