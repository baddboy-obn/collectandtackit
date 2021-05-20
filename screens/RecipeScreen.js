import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import data from '../data/recipe/food.json';
import {Actions} from 'react-native-router-flux';

export default class RecipeScreen extends Component {
  render() {
    return (
      <SafeAreaView>
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
              margin: 15,
            }}>
            {Object.keys(data).map((root, x) => {
              return data[root].map((item, i) => {
                return (
                  <View style={{width: '50%'}} key={i}>
                    <TouchableOpacity
                      style={{
                        height: 150,
                        borderTopLeftRadius: 30,
                        borderBottomRightRadius: 30,
                        backgroundColor: '#dddddd',
                        margin: 10,
                      }}
                      onPress={() =>
                        Actions.recipeDetail({id: item.id, root: root})
                      }>
                      <Image source={{uri: item.img}} style={{position:'absolute', width: '100%', height: '100%', borderTopLeftRadius: 30,
                        borderBottomRightRadius: 50}} />
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
                          {item.title}
                        </Text>
                      </View>
                      <View style={{flex: 1}} />
                    </TouchableOpacity>
                  </View>
                );
              });
            })}
          </View>

          {/*{data.soup.map((item, i) => {*/}
          {/*  return (*/}
          {/*    <View style={{flex: 1, width: '100%', marginBottom: 20}} key={i}>*/}
          {/*      <ImageBackground*/}
          {/*        source={{uri: item.img}}*/}
          {/*        style={{*/}
          {/*          flex: 1,*/}
          {/*          resizeMode: 'cover',*/}
          {/*          width: null,*/}
          {/*          height: 250,*/}
          {/*        }}*/}
          {/*      />*/}
          {/*      <View*/}
          {/*        style={{*/}
          {/*          position: 'absolute',*/}
          {/*          left: 0,*/}
          {/*          right: 0,*/}
          {/*          bottom: 10,*/}
          {/*          top: 0,*/}
          {/*          justifyContent: 'flex-end',*/}
          {/*          alignItems: 'center',*/}
          {/*        }}>*/}
          {/*        <Text style={{fontSize: 16, color: '#ffffff'}}>*/}
          {/*          {item.title}*/}
          {/*        </Text>*/}
          {/*      </View>*/}
          {/*    </View>*/}
          {/*  );*/}
          {/*})}*/}
        </ScrollView>
      </SafeAreaView>
    );
  }
}
