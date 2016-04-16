import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  NavigationExperimental
} from 'react-native'
const {
  AnimatedView,
  Card,
  Header
} = NavigationExperimental

import _ from 'lodash'
import { compose, withState } from 'recompose'

// redux store things
import { connect } from 'react-redux'
import { Provider } from 'react-redux'
import configureStore from './store'
import { NODE_ENV } from './config'
const store = configureStore({})

// screens
import Login from './screens/Login'
import Monkey from './screens/Monkey'

// more navigate stuff
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

// routes
const routes = {
  monkey: 0,
  banana: 1,
  apples: 2
}

class AppContainer extends React.Component {
	render() {
		let { navigation, onNavigate, onBack } = this.props

		return (

			// Note that we are not using a NavigationRootContainer here because Redux is handling
			// the reduction of our state for us. Instead, we grab the navigationState we have in
			// our Redux store and pass it directly to the <AnimatedView />.
			<AnimatedView
        style={styles.outerContainer}
				navigationState={navigation}
				onNavigate={(action) => {
					if (action.type === 'back') {
						onBack()
					}
				}}
				renderOverlay={(props) => {
          return (
  					<Header
  						{...props}
  						renderTitleComponent={({ scene: { navigationState: { key }} }) => (
                <Header.Title>{key}</Header.Title>
              )}
  						onNavigate={onBack}
  					/>
          )
        }}
				renderScene={(props) => {
          console.log('renderScene', props)
          return (
  					// Again, we pass our navigationState from the Redux store to <Card />.
  					// Finally, we'll render out our scene based on navigationState in _renderScene().
  					<Card
  						{...props}
  						key={props.scene.navigationState.key}
  						renderScene={this._renderScene}
  					/>
				  )}
        }
			/>
		)
	}

	_renderScene({scene}) {
		const { navigationState } = scene

		switch(navigationState.key) {
  		case 'First':
  			return <EnhancedFirst />
  		case 'Second':
  			return <Second />
  		case 'Third':
  			return <Third />
  		}
	}
}

const EnhancedAppContainer = connect(
	state => ({
		navigation: state.navigation
	}),
	dispatch => ({
		onNavigate: (destState) => dispatch(navigatePush(destState)),
		onBack: () => dispatch(navigatePop())
	})
)(AppContainer)

const styles = StyleSheet.create({
	outerContainer: {
		flex: 1
	},
  container: {
		flex: 1,
		backgroundColor: '#2F9CB2',
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

const Main = ({
  route, setRoute // withState
}) => {
  return (
    <Provider store={store}>
      <EnhancedAppContainer />
    </Provider>
  )
}

export default compose(
  withState('route', 'setRoute', routes.banana)
)(Main)
