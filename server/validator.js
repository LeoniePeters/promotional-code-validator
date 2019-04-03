const validatePromotionCode = (code) => {
    const array = code.toString().split('').map(num => Number(num));

    if (array.length === 9) {
        return true
    } 
   return false
    

}

module.exports = { validatePromotionCode }