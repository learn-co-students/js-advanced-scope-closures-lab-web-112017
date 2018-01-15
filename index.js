function produceDrivingRange(range) {
  return function blockRange(start,end) {
    distance = Math.abs(parseInt(start)-parseInt(end))
    if (distance > range) {
      return `${distance-range} blocks out of range`
    } else {
      return `within range by ${range-distance}`
    }
  }
}

function produceTipCalculator(dec) {
  return function tip(bill) {
    return bill * dec
  }
}
