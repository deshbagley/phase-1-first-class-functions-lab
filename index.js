// Code your solution in this file!

const returnFirstTwoDrivers = function(drivers){

    return drivers.slice(0,2)
}


const returnLastTwoDrivers = function(drivers){

    return drivers.slice(2)

}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

const createFareMultiplier = function(num1){
   const multiplier = function(fare){
       return num1 * fare}
    
    return (multiplier)
   }

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

//const fareDoubler = function(num1){
  //  return num1 * 2}

//const fareTripler = function(num1){
  //  return num1 * 3}

function selectDifferentDrivers(drivers, myFunc){
    return myFunc(drivers)
}


