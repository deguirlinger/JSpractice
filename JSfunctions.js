function highestNumber(numberSet) {
  var max
  for (let i = 0; i <= numberSet.length; i++) {
    if (numberSet[i] > numberSet[i - 1]) {
      max = numberSet[i]
    }
  }
  return max
}

console.log(highestNumber([5, 3, 6, 3, 2, 0]))


function highestNumber(numberSet) {
  var max = 0
  numberSet.forEach(function(el) {
    if (el > max) {
      max = el
    }
  })
  return max
}

console.log(highestNumber([5, 10, 6, 3, 9, 0]))
