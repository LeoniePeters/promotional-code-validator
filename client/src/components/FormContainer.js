import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from './Form'
import { validateCode } from '../actions/PromoCode'

class FormContainer extends Component {
  state = { promoCode: '' }

  onSubmit = e => {
    e.preventDefault()
    console.log(this.state)
    this.props.validateCode(this.state)
  }

  onChange = e => {
    console.log('onChange', e.target.name, e.target.value)
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <Form
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        promoCode={this.state.promoCode}
      />
    )
  }
}

export default connect(null, { validateCode })(FormContainer)