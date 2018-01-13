function produceDrivingRange(range){
  return function(start, end) {
    let a = parseInt(start.slice(0,-2))
    let b = parseInt(end.slice(0,-2))
    if (b-a > range) {
      return `${b-a-range} blocks out of range`
    } else {
      return `within range by ${b-a}`
    }
  }
}

function produceTipCalculator(decimal) {
  return function(subTotal) {
    return subTotal * (decimal)
  }
}
