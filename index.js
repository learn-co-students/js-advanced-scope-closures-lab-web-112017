function produceDrivingRange (num) {
  return function(start, end) {
    let blocks = parseInt(end) - parseInt(start);
    let difference = blocks - num
    if (difference < 0) {
      return `within range by ${Math.abs(difference)}`
    } else {
      return `${Math.abs(difference)} blocks out of range`
    }
  }
}

function produceTipCalculator (tip_percent) {
  return function(amount) {
    return amount * tip_percent;
  }
}

function createDriver () {
  let driverId = 0;
  return class {
    constructor (name) {
      this.name = name
      this.id = ++driverId
    }
  }
}
