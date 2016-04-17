import React, {
  NavigationExperimental
} from 'react-native'

const {
  AnimatedView,
  Card,
  Header
} = NavigationExperimental

import _ from 'lodash'
import { compose, withState } from 'recompose'
import { connect } from 'react-redux'
import { navigatePush, navigatePop } from './actions/navigation'

import { routes } from './router'

/**
 * AppContainer
 * - handle navigation
 *  - push, pop, reset, replace
 * - render header
 */

const handleNavigate = (onBack) => (action) => {
  if (action.type === 'back') {
    onBack()
  }
}
const renderTitleComponent = ({ scene: { navigationState } }) => {
  const { title } = routes[navigationState.key]
  return (
    <Header.Title>{title}</Header.Title>
  )
}
const renderOverlay = (onBack) => (props) => {
  return (
    <Header
      {...props}
      renderTitleComponent={renderTitleComponent}
      onNavigate={onBack}
    />
  )
}
const renderScene = (props) => {
  return (
    <Card
      {...props}
      key={props.scene.navigationState.key}
      renderScene={({ scene: { navigationState } }) => {
        const { Component } = routes[navigationState.key]
        return <Component />
      }}
    />
  )
}
const AppContainer = ({ navigation, onNavigate, onBack }) => {
  return (
    <AnimatedView
      style={{ flex: 1 }}
      navigationState={navigation}
      onNavigate={handleNavigate(onBack)}
      renderOverlay={renderOverlay(onBack)}
      renderScene={renderScene}
    />
  )
}

export default connect(
	state => ({
		navigation: state.navigation
	}),
	dispatch => ({
		onNavigate: (destState) => dispatch(navigatePush(destState)),
		onBack: () => dispatch(navigatePop())
	})
)(AppContainer)
