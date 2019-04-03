const { Router } = require('express');
const router = new Router();

router.post('/promocode', (req, res, next) => {
  const {promoCode} = req.body;
  if(promoCode.toString().length !== 9) {
    res.status(400).send({ message: 
      'The code you provided is invalid. Make sure it contains 9 numbers'});
  } 
  res.status(200).send({message: 'Valid code, but not the lucky one.'});
})