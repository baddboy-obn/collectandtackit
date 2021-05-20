import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import {SafeAreaView} from 'react-navigation';

// import shops from '../data/shop/shops.json';
import {Actions} from 'react-native-router-flux';

const shops = [
  {
    name: 'Магнит',
    img: require('../data/logo-magnit.png'),
    distance: '21км',
    alias: 'magnit',
  },
  {
    name: 'Ашан',
    img: require('../data/auchan-logo.png'),
    distance: '700 метров',
    alias: 'ashan',
  },
  {
    name: 'Перекресток',
    img: require('../data/perek-logo.png'),
    distance: '250 метров',
    alias: 'perekrestok',
  },
];

export default class ShopsScreen extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#f2f2f2'}}>
        <ScrollView>
          {shops.map((shop, i) => {
            return (
              <TouchableOpacity
                key={i}
                activeOpacity={1}
                onPress={() => Actions.service()}
                style={{margin: 20}}>
                <View
                  style={{
                    flex: 1,
                    width: '100%',
                    backgroundColor: '#ffffff',
                    height: 200,
                    borderTopLeftRadius: 30,
                    borderBottomRightRadius: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 20
                  }}>
                  <Image source={shop.img}/>

                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </SafeAreaView>
    );
  }
}
