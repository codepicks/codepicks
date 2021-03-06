/* eslint-disable */
import React, { Component } from 'react'
import { View, StyleSheet, StatusBar } from 'react-native'
import { colors } from '../constants'

type Props = {
  children?: React.ReactNode
  style?: Record<string, any> // TODO:
  noPadding?: boolean
  white?: boolean
}

export default class ViewContainer extends Component<Props> {
  render() {
    const { children, style, noPadding, white } = this.props

    return (
      <View
        style={[
          styles.container,
          noPadding ? styles.noPadding : {},
          white ? styles.white : {},
          style,
        ]}
      >
        <StatusBar barStyle="light-content" />
        {children}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: colors.white,
  },
  noPadding: {
    paddingTop: 0,
  },
  white: {
    backgroundColor: colors.white,
  },
})
