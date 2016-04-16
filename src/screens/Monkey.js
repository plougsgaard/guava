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

import {
  loadFoods,
  handleAddFood,
  deleteFood
} from '../actions/foods'

const Monkey = ({
  dispatch, foods, // redux
  setTimeout, // react-timeout
  monkey, runMonkey // withState
}) => {
  return (
    <View>
      <Text>{' '}</Text>
      <Text>This is the monkey screen</Text>
      {_.map(foods.entries, (f) => <Text key={f.id}>{f.id}</Text>)}
      <Text onPress={() => setTimeout(() => runMonkey(true), 5000)}>Show me the monkey!</Text>
      <Text>monkey: {Boolean(monkey).toString()}</Text>
    </View>
  )
}

export default compose(
  //ReactTimeout,
  connect(({ foods, brands }) => ({ foods, brands })),
  withState('monkey', 'runMonkey', false),
  lifecycle({
    enter: (d) => {
      d(loadFoods())
    },
    leave: (d) => {
      alert('bye')
    }
  })
)(Monkey)
//
//
//
//
//
// <View>
//   <Text>{' '}</Text>
//   <Text>{' '}</Text>
//   <Text onPress={() => setRoute(routes.monkey)}>
//     Monkey
//   </Text>
//   <Text onPress={() => setRoute(routes.banana)}>
//     Banana
//   </Text>
//   <Text onPress={() => setRoute(routes.apples)}>
//     Apples
//   </Text>
//   <Text>{' '}</Text>
//   <Text>
//     I never realized how awesome hot reloading would be
//     compared to regular old live reloading.
//     The current route is {_.findKey(routes, (r) => r === route)}.
//   </Text>
//   {route === routes.monkey &&
//     <Monkey />}
// </View>
