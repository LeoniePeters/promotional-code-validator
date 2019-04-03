const validatePromotionCode = (code) => {
  const array = code.toString().split('').map(num => Number(num));
  const reducer = (acc, val, currentIndex) => { return acc + val * (9 - currentIndex) };
  const check = array.some((element, index, array) => {
    return element === array[index + 1] && element === array[index + 2]
  })

  if (array.length === 9) {
    if (array.reduce(reducer, 0) % 11 === 0) {
      if (!check) {
        return true
      }
    }
  }
  return false
}

module.exports = { validatePromotionCode }