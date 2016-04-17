import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native'

import _ from 'lodash'
import { compose, withState } from 'recompose'
import { connect } from 'react-redux'

import { navigatePush, navigatePop } from './actions/navigation'

const First = ({ navigation, onNavigate, onBack }) => (
  <View style={styles.container}>
    <Text style={styles.title}>First Screen</Text>
    <TouchableOpacity onPress={() => onNavigate('Second')}>
      <Text>Next screen maybe?</Text>
    </TouchableOpacity>
  </View>
)
const EnhancedFirst = connect(
	state => ({
		navigation: state.navigation
	}),
	dispatch => ({
		onNavigate: (destState) => dispatch(navigatePush(destState)),
		onBack: () => dispatch(navigatePop())
	})
)(First)

const Second = () => (
  <View>
    <Text>Second screen</Text>
    <Text>Second screen</Text>
    <Text>Second screen</Text>
    <Text>Second screen</Text>
    <Text>Second screen</Text>
    <Text>Second screen</Text>
  </View>
)

const Third = () => (
  <View>
    <Text>Second screen</Text>
    <Text>Second screen</Text>
    <Text>Second screen</Text>
    <Text>Second screen</Text>
    <Text>Second screen</Text>
    <Text>Second screen</Text>
  </View>
)

const styles = StyleSheet.create({
	outerContainer: {
		flex: 1
	},
  container: {
		flex: 1,
		backgroundColor: '#2BF200',
		justifyContent: 'center',
		alignItems: 'center'
	},
	title: {
		fontSize: 24,
		fontWeight: '500',
		color: '#ffffff',
		marginBottom: 30
	}
})

import Home from './screens/Home'
import Login from './screens/Login'
const Monkey = require('./screens/Monkey.js').default

let decorateKey = (o) => _.mapValues(o, (v, key) => ({ ...v, key }))

export const routes = decorateKey({
  home: { title: 'Home', Component: Home },
  login: { title: 'Sign in', Component: Login },
  monkey: { title: 'MONKEY', Component: Monkey },
  First: { title: 'Welcome buddy', Component: EnhancedFirst },
  Second: { title: 'Second thing', Component: Second },
  Third: { title: 'Third?', Component: Third }
})
