function century(year) {
  // Finish this :
  let yearInt = floatToInt(year/100)
  return yearInt == year/100 ? year/100 : yearInt +1
}
function floatToInt(value) {
    return value | 0
}