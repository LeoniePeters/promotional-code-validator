import { VALID_CODE, INVALID_CODE } from '../actions/PromoCode'

export default (state = null, action = {}) => {
  switch (action.type) {
    case VALID_CODE:
      return action.message
    case INVALID_CODE:
      return action.errMessage
    default:
    return state
  }
}