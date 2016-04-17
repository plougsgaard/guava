import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native'
import _ from 'lodash'
import ReactTimeout from 'react-timeout'
import lifecycle from '../helpers/lifecycle'
import { connect } from 'react-redux'
import { compose, withState } from 'recompose'

import Container from '../blocks/Container'
import Button from '../blocks/Button'

import { HEADER_HEIGHT } from '../config'

import { handleSubmitLogin } from '../reducers/session'

const LoginScreen = ({
  dispatch, session // redux
}) => {
  const submitter = handleSubmitLogin()
  const submitFn = () => {
    submitter({ email: 'a@a.a', password: 'secret' }, dispatch)
  }
  return (
    <Container>
      <Text>This is the LOGIN screen</Text>
      <Text>token: {session.token}</Text>
      <Text>Email</Text>
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        value='' />
      <Text>Password</Text>
      <TextInput value='' />

      <Button
        style={{}}
        textStyle={{}}
        onPress={submitFn}>
        Try credentials
      </Button>
    </Container>
  )
}

export default compose(
  //ReactTimeout,
  connect(({ session }) => ({ session })),
  lifecycle({
    enter: (d) => {

    },
    leave: (d) => {

    }
  })
)(LoginScreen)
