const { Router } = require('express');
const router = new Router();
const { validatePromotionCode } = require('./validator')

router.post('/promocode', (req, res) => {
  console.log(req.body)
  const {promoCode} = req.body;
  if(promoCode.toString().length !== 9) {
    res.status(400).send({ message: 
      'The code you provided is invalid. Make sure it contains 9 numbers'});
  } 
  if(!validatePromotionCode(promoCode)) {
    res.status(400).send({ message: 
      'The code you provided is invalid.'});
  }
  res.status(200).send({message: 'Valid code, but not the lucky one.'});
})

module.exports = router
