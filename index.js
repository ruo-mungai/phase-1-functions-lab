// Code your solution in this file!

function distanceFromHqInBlocks(numberBlock){
  if(numberBlock>=42){
      return (numberBlock-42)
  }
  else {
      return 42-numberBlock
  }
 }
 
 function distanceFromHqInFeet(numberBlock){
     return distanceFromHqInBlocks(numberBlock)*264

 }

 function distanceTravelledInFeet(start, destination){
     if(start>=destination){
         return (start-destination)*264
     }
     else  if(destination>=start){
         return (destination-start)*264

 }
 }
 function calculatesFarePrice (start, destination) {
  const distance = distanceTravelledInFeet(start, destination)

  if (distance <= 400) {
    return 0
  } else if (distance > 400 && distance <= 2000) {
    return .02 * (distance - 400);
  } else if (distance > 2000 && distance < 2500) {
    return 25
  } else {
    return 'cannot travel that far'
  }
}
    



