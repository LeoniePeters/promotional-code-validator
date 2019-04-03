import request from 'superagent';

export const validateCode = (code) => dispatch => {
  request
  .post('http://localhost:4000/promocode')
  .send(code)
  .then(response => console.log(response.body))
  .catch(err => console.error(err))
}