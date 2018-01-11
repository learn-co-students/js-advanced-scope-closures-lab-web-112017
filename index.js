function produceDrivingRange(blockRange) {
  return function compare(start, end) {
    let distance = parseInt(end.slice(0, 2)) - parseInt(start.slice(0, 2));
    if (distance > blockRange) {
      return `${distance - blockRange} blocks out of range`;
    } else {
      return `within range by ${blockRange - distance}`;
    }
  }
}

function produceTipCalculator(percent) {
  return function tip(fare) {
    return fare * percent;
  }
}
