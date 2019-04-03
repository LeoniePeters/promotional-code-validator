import React from 'react';

const Form = ({onSumbit, onChange, promoCode}) => {
  return(
    <div>
      <form>
        <label onSumbit={onSumbit}>
          Promotional code
          <input 
          type='number' 
          name='promoCode' 
          value={promoCode}
          onChange={onChange}>
          </input>
        </label>
      </form>
    </div>
  )
}

export default Form