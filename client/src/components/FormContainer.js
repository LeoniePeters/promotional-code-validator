import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from './Form'
import { validateCode } from '../actions/PromoCode'

class FormContainer extends Component {
  state = { promoCode: '' }

  onSubmit = e => {
    e.preventDefault()
    this.props.validateCode(this.state)
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
        validationMsg={this.props.validationMsg}
      />
    )
  }
}

const mapStateToProps = state => ({
  validationMsg: state.validationMsg
})

export default connect(mapStateToProps, { validateCode })(FormContainer)