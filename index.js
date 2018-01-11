function produceDrivingRange(setRange) {
  const range = setRange;

  return function(start, end) {
    const distance = parseInt(end) - parseInt(start);
    if (distance <= range) {
      return `within range by ${distance}`;
    } else {
      return `${distance - range} blocks out of range`;
    }
  }
}

function produceTipCalculator(setPercentage) {
  const percentage = setPercentage;

  return function(total) {
    return total * percentage;
  }
}

function createDriver() {
  let driverId = 0
  return class {
    constructor(name){
      ++driverId;
      this.name = name;
      this.id = driverId
    }
  }
}
