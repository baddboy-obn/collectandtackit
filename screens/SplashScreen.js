import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {Actions} from 'react-native-router-flux';

export default class SplashScreen extends Component {
  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: '#5956E9',
        }}>
        <View style={{margin: 25}}>
          <Text style={{fontSize: 48, color: '#ffffff', fontWeight: 'bold'}}>
            Доверьте{'\n'}нам ваши{'\n'}покупки
          </Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: '55%',
          }}>
          <Image
            source={require('../data/logo2.png')}
            style={{
              width: '100%',
              height: 450,
            }}
          />
        </View>
        <View style={{margin: 20, justifyContent: 'flex-end', height: '10%'}}>
          <TouchableOpacity
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 10,
              width: '100%',
              height: 60,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => Actions.signin()}>
            <Text style={{color: '#5956E9', fontSize: 22}}>Начать</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}
