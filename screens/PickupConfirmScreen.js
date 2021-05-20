import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {SafeAreaView} from 'react-navigation';

export default class PickupConfirmScreen extends Component {
  render() {
    return (
      <SafeAreaView
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Pickup delivery</Text>
      </SafeAreaView>
    );
  }
}
