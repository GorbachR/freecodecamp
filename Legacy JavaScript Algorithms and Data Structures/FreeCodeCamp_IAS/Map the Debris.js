function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  const newArr = arr.slice();
  newArr.forEach((item) => {
    item.orbitalPeriod = 
    2 * Math.PI * Math.sqrt(Math.pow(item.avgAlt + earthRadius, 3) / GM);
    item.orbitalPeriod = Math.round(item.orbitalPeriod);
    delete item.avgAlt
  })
  return newArr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);