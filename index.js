function produceDrivingRange(blockRange){
//blockRange is an int
  return function(startSt,endSt){
    //startSt and endSt are street name strings
    let tf = function(stName){
      return parseInt(stName)
      //i can't believe this works.
    };
    let diff = tf(endSt) - tf(startSt)
    let rsp;
    diff > blockRange ? rsp = `${diff-blockRange} blocks out of range`: rsp = `within range by ${blockRange-diff}`
    return rsp;
  }
}

function produceTipCalculator(percentage){
  return function(bill){
    return  percentage * bill
  }
}

function createDriver(){
  let id = 0
  return class Driver {
    constructor(name){
      this.name = name
      this.id = id++
    }

  }
}
