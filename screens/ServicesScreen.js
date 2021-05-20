import React, {Component} from 'react';
import {View, Text, TouchableOpacity, TextInput, Image} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {Actions} from 'react-native-router-flux';
import {Icon} from 'react-native-elements';

export default class ServicesScreen extends Component {
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
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          <TouchableOpacity
            style={{
              flex: 2,
              backgroundColor: '#fff',
              margin: 20,
              height: 200,
              borderRadius: 15,
              padding: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            activeOpacity={0.8}
            onPress={() => Actions.recipe()}>
              <Image source={ require('../data/recipe-img.png')} style={{marginBottom: 10}}/>
            <Text>Рецепты</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 2,
              backgroundColor: '#fff',
              margin: 20,
              height: 200,
              borderRadius: 15,
              padding: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            activeOpacity={0.8}
            onPress={() => Actions.category()}>
              <Image source={ require('../data/products-img.png')} style={{marginBottom: 10}}/>
            <Text>Продукты</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}
