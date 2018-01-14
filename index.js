function produceDrivingRange(max) {
    return function(start, finish) {
      let x = Math.abs(parseInt(finish) - parseInt(start))
      if (max > x) {
        return `within range by ${max - x}`
      }
      else {
        return `${x - max} blocks out of range`
      }
    }
}

function produceTipCalculator(ratio) {
  return function(amount){
    return amount*ratio
  }
}
