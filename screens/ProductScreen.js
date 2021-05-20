import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  ImageBackground,
} from 'react-native';
import {SafeAreaView} from 'react-navigation';

import data from '../data/products/products.json';
import {Actions} from 'react-native-router-flux';

import {connect} from 'react-redux';

class ProductScreen extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    data: null,
  };

  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#f2f2f2'}}>
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
          <TextInput
            style={{
              height: 40,
              backgroundColor: '#ffffff',
              marginTop: 5,
              borderRadius: 10,
              paddingLeft: 10,
            }}
            placeholder={'Магазин'}
            keyboardType={'web-search'}
          />
          <TextInput
            style={{
              height: 40,
              backgroundColor: '#ffffff',
              marginTop: 10,
              borderRadius: 10,
              paddingLeft: 10,
            }}
            placeholder={'Адрес доставки'}
            keyboardType={'web-search'}
          />
        </View>
        <ScrollView>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              flexWrap: 'wrap',
              margin: 20,
            }}>
            {data[this.props.alias].map((item, i) => {
              return (
                <View
                  key={item.id}
                  style={{width: '50%', overflow: 'hidden'}}>
                  <TouchableOpacity
                    onPress={() => this.props.addItemToCart(item)}>
                    <View
                      style={{
                        margin: 10,
                        backgroundColor: '#ffffff',
                        height: 250,
                        padding: 5,
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        borderRadius: 20,
                      }}>
                      <Image
                        source={{uri: item.url}}
                        style={{width: '100%', height: 100}}
                      />
                      <Text style={{textAlign: 'center'}}>{item.name}</Text>
                      <Text style={{color: '#999999'}}>{item.unit}</Text>
                      <View
                        style={{
                          width: '100%',

                          borderRadius: 20,
                          height: 25,
                          backgroundColor: '#5956E9',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Text
                          style={{
                            textAlign: 'center',
                            color: '#ffffff',
                            fontWeight: 'bold',
                          }}>
                          {item.price} ₽
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addItemToCart: product => {
      dispatch({type: 'ADD_TO_CART', payload: product});
    },
  };
};

export default connect(null, mapDispatchToProps)(ProductScreen);
