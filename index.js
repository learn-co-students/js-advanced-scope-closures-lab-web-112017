function produceDrivingRange(blockRange) {
    return function(tripSt1, tripSt2) {
      var tripLength = Math.abs(parseInt(tripSt1) - parseInt(tripSt2))

      const diff = (tripLength - blockRange)

      if (diff >= 0) {
        return `${diff} blocks out of range`
      } else {
        return `within range by ${-diff}`
      }

    }
}

function produceTipCalculator(pct) {
  return function (amt) {
    return amt * pct
  }
}
