import request from 'superagent';

export const VALID_CODE = 'VALID_CODE'
export const INVALID_CODE = 'INVALID_CODE'

const validCode = message => ({
  type: VALID_CODE,
  message
})

const invalidCode = errMessage => ({
  type: INVALID_CODE,
  errMessage
})

export const validateCode = (code) => dispatch => {
  request
    .post('http://localhost:4000/promocode')
    .send(code)
    .then(response => dispatch(validCode(response.body.message)))
    .catch(err => {
      if (err.status === 400) {
        dispatch(invalidCode(err.response.body.message))
      }
      console.error(err)
    })
}