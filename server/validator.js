const validatePromotionCode = (code) => {
  const array = code.toString().split('').map(num => Number(num));
  const reducer = (acc, val, currentIndex) => { return acc + val * (9 - currentIndex) };
  console.log('array', array)
  console.log('reducer', array.reduce(reducer, 0))

  if (array.length === 9) {
    if(array.reduce(reducer, 0) % 11 === 0) {
      return true
    }
  }
  return false
}

module.exports = { validatePromotionCode }