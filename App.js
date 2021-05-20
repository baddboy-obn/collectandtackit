import React, {Component} from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

import SplashScreen from './screens/SplashScreen';
import SignInScreen from './screens/SignInScreen';
import CartScreen from './screens/CartScreen';
import RecipeScreen from './screens/RecipeScreen';
import CategoryProductScreen from './screens/CategoryProductScreen';
import ProductScreen from './screens/ProductScreen';
import DeliveryConfirmScreen from './screens/DeliveryConfirmScreen';
import PickupConfirmScreen from './screens/PickupConfirmScreen';
import ServicesScreen from './screens/ServicesScreen';
import ShopsScreen from './screens/ShopsScreen';
import ConfirmOrderScreen from './screens/ConfirmOrderScreen';
import RecipeDetailScreen from './screens/RecipeDetailScreen';

import {Router, Scene} from 'react-native-router-flux';

import store from './store';

import {Provider} from 'react-redux';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Scene key={'root'}>
            <Scene
              key={'splash'}
              component={SplashScreen}
              title={'Splash'}
              initial
              hideNavBar
            />
            <Scene
              key={'signin'}
              component={SignInScreen}
              title={'Авторизация/Регистрация'}
              hideNavBar
            />
            <Scene key={'cart'} component={CartScreen} title={'Cart'} back />
            <Scene
              key={'category'}
              component={CategoryProductScreen}
              title={'Категории продуктов'}
              hideNavBar
            />
            <Scene
              key={'product'}
              component={ProductScreen}
              title={'Продукты'}
              hideNavBar
            />
            <Scene
              key={'recipe'}
              component={RecipeScreen}
              title={'Рецепты'}
              hideNavBar
            />
            <Scene
              key={'order'}
              component={ConfirmOrderScreen}
              title={'Заказы'}
              hideNavBar
            />
            <Scene
              key={'delivery'}
              component={DeliveryConfirmScreen}
              title={'Доставка'}
              hideNavBar
            />
            <Scene
              key={'pickup'}
              component={PickupConfirmScreen}
              title={'Самовывоз'}
              back
            />
            <Scene
              key={'service'}
              component={ServicesScreen}
              title={'Услуги'}
              hideNavBar
            />
            <Scene key={'shops'} component={ShopsScreen} title={'Магазины'} />
            <Scene
              key={'recipeDetail'}
              component={RecipeDetailScreen}
              title={'Делатьльно'}
              hideNavBar
            />
            <Scene
              key={'cart'}
              component={CartScreen}
              title={'Корзина'}
              hideNavBar
            />
          </Scene>
        </Router>
      </Provider>
      // <TabNavigator>
      //   <TabNavigatorItem
      //     selected={this.state.selectedTab === 'home'}
      //     title="Home"
      //     selectedTitleStyle={{color: '#000'}}
      //     onPress={() => this.setState({selectedTab: 'home'})}>
      //     <SignInScreen />
      //   </TabNavigatorItem>
      //   <TabNavigatorItem
      //     selected={this.state.selectedTab === 'splash'}
      //     title="Splash"
      //     selectedTitleStyle={{color: '#000'}}
      //     onPress={() => this.setState({selectedTab: 'splash'})}>
      //     <SplashScreen />
      //   </TabNavigatorItem>
      // </TabNavigator>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#dddddd',
  },
  text: {
    color: '#000',
  },
});
