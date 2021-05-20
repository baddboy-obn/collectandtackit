import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-navigation';

import {connect} from 'react-redux';
import {retrySymbolicateLogNow} from 'react-native/Libraries/LogBox/Data/LogBoxData';
import {Actions} from 'react-native-router-flux';

class CartScreen extends Component {
  constructor(props) {
    super(props);

    if (this.props.cartItems.length > 0) {
      let x = this.props.cartItems.reduce(function (a, b) {
        return {price: a.price + b.price};
      });
    }
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#f5f5f8'}}>
        <View style={{margin: 20}}>
          <TouchableOpacity
            onPress={() => Actions.pop()}
            style={{marginTop: 20, marginBottom: 20}}>
            <Image source={require('../data/left.png')} />
          </TouchableOpacity>
        </View>
        <ScrollView>
          {this.props.cartItems.length > 0 ? (
            this.props.cartItems.map((item, i) => {
              return (
                <View
                  style={{
                    marginRight: 20,
                    marginLeft: 20,
                    marginTop: 10,
                    marginBottom: 10,
                    borderRadius: 20,
                    backgroundColor: '#ffffff',
                  }}>
                  <View style={{flex: 2}}>
                    <View style={{margin: 10, flexDirection: 'row'}}>
                      <Image
                        source={{uri: item.url}}
                        style={{width: '30%', height: 100}}
                      />
                      <View
                        style={{
                          justifyContent: 'flex-start',
                          margin: 10,
                          width: '70%',
                        }}>
                        <View
                          style={{
                            width: '100%',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                          }}>
                          <Text key={i}>{item.name}</Text>
                          <TouchableOpacity
                            onPress={() => this.props.removeItem(item)}>
                            <Image
                              source={require('../data/close.png')}
                              style={{
                                width: 30,
                                height: 30,
                                position: 'absolute',
                                top: -10,
                                right: 10,
                              }}
                            />
                          </TouchableOpacity>
                        </View>
                        <View
                          style={{
                            flex: 2,
                            justifyContent: 'flex-end',
                            alignItems: 'flex-end',
                            width: '100%',
                            paddingRight: 20,
                          }}>
                          <Text
                            style={{
                              fontWeight: '300',
                              fontSize: 24,
                              color: '#5956E9',
                            }}>
                            {item.price} ₽
                          </Text>
                        </View>
                      </View>
                    </View>
                    {/*<View>*/}
                    {/*  <Text key={i}>{item.name}</Text>*/}
                    {/*</View>*/}
                  </View>
                </View>
              );
            })
          ) : (
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                margin: 20,
              }}>
              <Image source={require('../data/emptyCart.png')} />
              <Text style={{fontSize: 26, fontWeight: '300', marginBottom: 10}}>
                Корзина пуста
              </Text>
              <Text
                style={{
                  color: '#555',
                  fontSize: 18,
                  textAlign: 'center',
                  marginBottom: 30,
                }}>
                Вы еще не добавили в корзину ни одного товара
              </Text>
              <TouchableOpacity
                style={{
                  width: '100%',
                  height: 50,
                  backgroundColor: '#58C0EA',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 10,
                }}
                onPress={() => Actions.service()}>
                <Text style={{color: '#fff', fontWeight: '500', fontSize: 18}}>
                  В каталог
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </ScrollView>
        {this.props.cartItems.length > 0 ? (
          <View style={{height: 120}}>
            <View
              style={{
                margin: 10,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <Text style={{fontSize: 22}}>Общая стоимость: </Text>
              <Text style={{fontSize: 24}}>
                {
                  this.props.cartItems.reduce((a, b) => ({
                    price: a.price + b.price,
                  })).price
                }{' '}
                ₽
              </Text>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: 20,
                marginRight: 20,
              }}>
              <TouchableOpacity
                style={{
                  height: 50,
                  backgroundColor: '#5956e9',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%',
                  borderRadius: 15,
                }}
                onPress={() => Actions.order()}>
                <Text style={{color: '#fff'}}>Продолжить</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : null}
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  return {
    cartItems: state,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeItem: product =>
      dispatch({type: 'REMOVE_FROM_CART', payload: product}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartScreen);
