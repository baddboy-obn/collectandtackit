import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Image, Alert,
} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import data from '../data/recipe/food.json';
import product from '../data/products/products.json';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';

class RecipeDetailScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    data: {
      title: '123',
      ingredients: [],
      description: [],
    },
  };

  componentDidMount() {
    let item = data[this.props.root].filter(item => item.id === this.props.id);
    this.setState({
      data: item[0],
    });
  }

  addToOrder = type => {
    let _arr1 = [];
    data[type]
      .filter(item => item.id === this.props.id)[0]
      .ingredients.forEach(item => {
        if (item.productId) {
          _arr1.push(item.productId);
        }
      });

    let _arr2 = [];
    Object.keys(product).forEach(item => {
      product[item].forEach(_item => {
        _arr2.push(_item);
      });
    });

    _arr1.map(item => {
      _arr2.map(_item => {
        if (item === _item.id) {
          this.props.addItemToCart(_item);
        }
      });
    });
    alert('Товары добвлены в корзину');
  };

  render() {
    return (
      <SafeAreaView style={{backgroundColor: '#f2f2f2'}}>
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
        <ScrollView>
          <View
            style={{
              marginLeft: 20,
              marginRight: 20,
              backgroundColor: '#ffffff',
              marginBottom: 100,
            }}>
            <ImageBackground
              source={{uri: this.state.data.img}}
              style={{
                flex: 1,
                resizeMode: 'cover',
                width: null,
                height: 250,
                borderTopLeftRadius: 50,
                borderTopRightRadius: 50,
              }}
            />
            <Text style={{fontSize: 24, margin: 20}}>
              {this.state.data.title}
            </Text>
            <Text style={{fontSize: 22, margin: 20}}>Ингридиенты:</Text>
            {this.state.data.ingredients.map((item, i) => {
              return (
                <View key={i} style={{marginLeft: 25, marginRight: 10}}>
                  <Text>
                    {i + 1}. {item.name} - {item.weight} {item.unit}
                  </Text>
                </View>
              );
            })}

            <Text style={{fontSize: 22, margin: 20}}>
              Способы приготовления:
            </Text>
            {this.state.data.description.map((item, i) => {
              return (
                <View key={i} style={{marginLeft: 25, marginRight: 10, marginTop: 10}}>
                  <Text>
                    {i + 1}. {item.text}
                  </Text>
                </View>
              );
            })}

            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                borderRadius: 10,
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 20,
                marginBottom: 30,
                marginLeft: 20,
                marginRight: 20,
                backgroundColor: '#5956E9',
              }}
              onPress={() => this.addToOrder(this.props.root)}>
              <Text style={{color: '#ffffff'}}>
                Добавить ингридиенты в заказ
              </Text>
            </TouchableOpacity>
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

export default connect(null, mapDispatchToProps)(RecipeDetailScreen);
