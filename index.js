function produceDrivingRange(blockRange){
  return function inBlockRange(start, end){
    let startPoint = start.slice(0, 2);
    let endPoint = end.slice(0, 2);
    console.log(startPoint, endPoint);
    let delta = Math.abs(parseInt(startPoint) - parseInt(endPoint));
    if (blockRange >= delta ) {
      console.log(delta);
      return 'within range by '+ Math.abs(delta - blockRange).toString()
    }else {
      return Math.abs(blockRange - delta).toString() +' blocks out of range'
    }

  }
}

function produceTipCalculator(percentage){
  return function(amount){
    return percentage * amount;
  }
}

function createDriver(){
 let driverId = 0;

 return class Driver {
  constructor(name) {
    this.name = name;
    this.id = ++driverId;
  }
}}
