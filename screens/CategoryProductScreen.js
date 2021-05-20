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

import data from '../data/products/category.json';
import {Actions} from 'react-native-router-flux';

export default class CategoryProductScreen extends Component {
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
            <TouchableOpacity onPress={() => Actions.cart()} style={{marginTop: 20, marginBottom: 20}}>
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
            {data.map((item, i) => {
              return (
                <View key={i} style={{width: '50%', overflow: 'hidden'}}>
                  <TouchableOpacity
                    style={{
                      height: 120,
                      borderTopLeftRadius: 30,
                      borderBottomRightRadius: 30,
                      backgroundColor: '#dddddd',
                      margin: 10,
                    }}
                    onPress={() => Actions.product({alias: item.alias})}>
                    <Image source={{uri: item.url}} style={{position:'absolute', width: '100%', height: '100%', borderTopLeftRadius: 30,
                    borderBottomRightRadius: 30}} />
                    <View
                      style={{
                        flex: 1,
                        backgroundColor: '#ffffff',
                        borderTopLeftRadius: 30,
                        borderBottomRightRadius: 50,
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        paddingLeft: 15,
                      }}>
                      <Text style={{fontSize: 14, fontWeight: 'bold'}}>
                        {item.name}
                      </Text>
                    </View>

                    <View style={{flex: 1}} />
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
