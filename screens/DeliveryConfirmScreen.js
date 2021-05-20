import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {Actions} from 'react-native-router-flux';

export default class DeliveryConfirmScreen extends Component {
    constructor(props) {
        super(props);
    }
  render() {
    return (
      <SafeAreaView
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            margin: 20,
          }}>
          <Image source={require('../data/emptyCart.png')} />
          <Text style={{fontSize: 26, fontWeight: '300', marginBottom: 10}}>
            Заказ оформлен
          </Text>

              {this.props.deliveryType == '0'
                  ?
                  <Text
                      style={{
                          color: '#555',
                          fontSize: 18,
                          textAlign: 'center',
                          marginBottom: 30,
                      }}>Ваш заказ будет ожидать вас в указанное время в точке выдачи</Text>
                  :
                  <Text
                      style={{
                          color: '#555',
                          fontSize: 18,
                          textAlign: 'center',
                          marginBottom: 30,
                      }}>Ваш заказ будет доставлен курьером</Text>
              }

          <View style={{ width: '100%'}}>
            <TouchableOpacity
              style={{
                width: 300,
                height: 50,
                backgroundColor: '#58C0EA',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
              }}
              onPress={() => Actions.category()}>
              <Text style={{color: '#fff', fontWeight: '500', fontSize: 18}}>
                В каталог
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
