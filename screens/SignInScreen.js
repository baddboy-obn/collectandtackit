import React, {Component} from 'react';
import {View, Text, Button, TextInput, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {Actions} from 'react-native-router-flux';

export default class SignInScreen extends Component {
  render() {
    return (
      <SafeAreaView
        style={{flex: 1, justifyContent: 'center', backgroundColor: '#5956E9'}}>
        <View
          style={{
            width: '100%',
            height: '25%',
            justifyContent: 'center',
            margin: 20,
          }}>
          <Text style={{fontSize: 48, color: '#ffffff', fontWeight: 'bold'}}>
            Добро{'\n'}пожаловать
          </Text>
        </View>
        <View
          style={{backgroundColor: '#FFFFFF', borderRadius: 25, height: '75%'}}>
          <View style={{margin: 30}}>
            <Text style={{fontWeight: 'bold', marginBottom: 40}}>
              Регистрация
            </Text>
            <Text style={{color: '#444444', fontSize: 14}}>Телефон</Text>
            <TextInput
              keyboardType={'phone-pad'}
              style={{borderBottomWidth: 0.5, height: 40}}
            />
            <Text style={{color: '#444444', fontSize: 14, marginTop: 25}}>
              Код подтверждения
            </Text>
            <TextInput
              keyboardType={'number-pad'}
              style={{borderBottomWidth: 0.5, height: 40}}
            />
            <TouchableOpacity
              onPress={() => alert('Enter')}
              style={{
                width: '100%',
                backgroundColor: '#5956E9',
                justifyContent: 'center',
                alignItems: 'center',
                height: 60,
                borderRadius: 10,
                marginTop: 100,
              }}>
              <Text style={{color: '#FFFFFF'}}>Войти</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => Actions.shops()}
              style={{
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                height: 60,
                borderRadius: 10,
              }}>
              <Text style={{color: '#5956E9'}}>Пропустить</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
