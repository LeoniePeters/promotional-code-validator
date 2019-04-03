import React from 'react';

const Form = (props) => {
  const{ onSubmit, onChange, promoCode, validationMsg} = props
  return(
    <div className='form'>
      <form onSubmit={onSubmit}>
        <label className='title'>
          Promotional code
          <input 
          type='text' 
          name='promoCode' 
          value={promoCode}
          onChange={onChange}>
          </input>
        </label>
        <input className='button' type='submit' value='Submit Code' />
      </form>
      <p>{validationMsg}</p>
    </div>
  )
}

export default Form