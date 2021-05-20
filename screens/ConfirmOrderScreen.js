import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {Actions} from 'react-native-router-flux';

export default class ConfirmOrderScreen extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{margin: 20}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity
              onPress={() => Actions.pop()}
              style={{marginTop: 20, marginBottom: 20}}>
              <Image source={require('../data/left.png')} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => Actions.cart()}
              style={{marginTop: 20, marginBottom: 20}}>
              <Image
                source={require('../data/cartIcon.png')}
                style={{width: 20, height: 20}}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            margin: 20,
            padding: 20,
            backgroundColor: '#fff',
            borderRadius: 10,
          }}>
          <Text style={{fontSize: 16, fontWeight: '300', marginBottom: 10}}>
            Василий Теркин
          </Text>
          <Text style={{fontSize: 16, fontWeight: '300', marginBottom: 10}}>
            Адрес забора
          </Text>
          <Text style={{fontSize: 16, fontWeight: '300', marginBottom: 10}}>
            Время выдачи с 10:00 до 18:00
          </Text>
          <Text style={{fontSize: 16, fontWeight: '300'}}>
            +7 999 999 99 99
          </Text>
        </View>
        <View style={{margin: 20}}>
          <TouchableOpacity
            style={{
              height: 50,
              backgroundColor: '#5956e9',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              borderRadius: 10,
            }}
            onPress={() => Actions.delivery()}>
            <Text style={{color: '#fff'}}>Продолжить</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}
