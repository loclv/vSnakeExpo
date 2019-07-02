import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const data = {
  'You': {
    txt: 'You',
    backgroundColor: '#121212',
  },
  'AI': {
    txt: 'AI',
    backgroundColor: '#000',
  }
}

class Space extends Component {
	render() {
    const p = data[this.props.name];
		return (
      <View style={{flex: 1,
          backgroundColor: p.backgroundColor,
          width: '100%'}}>
        <Text style={styles.info}>{p.txt}</Text>
      </View>
		);
	}
}

const styles = StyleSheet.create({
  info: {
    fontSize: 16,
    textAlign: 'center',
    margin: 10,
    color: '#CF6679',
    bottom: 8,
    position: 'absolute'
  }
});

export default Space;
