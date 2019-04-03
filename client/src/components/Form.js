import React from 'react';

const Form = (props) => {
  const{ onSubmit, onChange, promoCode, validationMsg} = props
  return(
    <div>
      <form onSubmit={onSubmit}>
        <label>
          Promotional code
          <input 
          type='text' 
          name='promoCode' 
          value={promoCode}
          onChange={onChange}>
          </input>
        </label>
        <input type='submit' value='Submit Code' />
      </form>
      <p>{validationMsg}</p>
    </div>
  )
}

export default Form