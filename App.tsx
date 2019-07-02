import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Space from './components/Space'

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Space name='AI' />
        <Space name='You' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  info: {
    fontSize: 16,
    textAlign: 'center',
    margin: 10,
    color: '#CF6679'
  }
});
