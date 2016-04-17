import React, { ScrollView, StyleSheet } from 'react-native'
import { HEADER_HEIGHT } from '../config'

export default class Container extends React.Component {
  render () {
    return (
      <ScrollView contantContainerStyle={styles.contentContainer} style={styles.content}>
        {this.props.children}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  content: {
    backgroundColor: '#2F9CB2',
    flex: 1,
    marginTop: HEADER_HEIGHT
  }
})
