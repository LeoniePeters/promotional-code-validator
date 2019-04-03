import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from './Form'


class FormContainer extends Component {
  state = { promoCode: null }

  onSubmit = e => {
    const { promoCode } = this.state
    e.preventDefault()
    //validateCode(promoCode)
  }

  onChange = e => {
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

export default FormContainer