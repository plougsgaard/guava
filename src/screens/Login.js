import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native'
import _ from 'lodash'
import ReactTimeout from 'react-timeout'
import lifecycle from '../helpers/lifecycle'
import { connect } from 'react-redux'
import { compose, withState } from 'recompose'

import { handleSubmitLogin } from '../reducers/session'

const Monkey = ({
  dispatch, session // redux
}) => {
  const submitter = handleSubmitLogin()
  const submitFn = () => {
    submitter({ email: 'a@a.a', password: 'secret' }, dispatch)
  }
  return (
    <View>
      <Text>{' '}</Text>
      <Text>This is the LOGIN screen</Text>
      <Text>token: {session.token}</Text>

      <Text onPress={submitFn}>login</Text>
    </View>
  )
}

export default compose(
  //ReactTimeout,
  connect(({ session }) => ({ session })),
  lifecycle({
    enter: (d) => {
      alert('enter')
    },
    leave: (d) => {
      alert('bye')
    }
  })
)(Monkey)
