import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import { Navigator } from 'react-native-deprecated-custom-components';

import HomeView from './Components/Home/Home';
import MineView from './Components/Mine/Mine';
import MoreView from './Components/More/More';
import ShopView from './Components/Shop/Shop';

export default class App extends Component {
  constructor(props){
    super(props);

    this.state={
      selectedTab:'home'
    };

    this.renderNavigatorItem = this.renderNavigatorItem.bind(this);
  }

  render() {
    return (
      <TabNavigator>
        {this.renderNavigatorItem('home', '首页', 'icon_tabbar_homepage', 'icon_tabbar_homepage_selected', '首页', HomeView)}
        {this.renderNavigatorItem('shop', '商家', 'icon_tabbar_merchant_normal', 'icon_tabbar_merchant_selected', '商家', ShopView)}
        {this.renderNavigatorItem('mine', '我的', 'icon_tabbar_mine', 'icon_tabbar_mine_selected', '我的', MineView)}
        {this.renderNavigatorItem('more', '更多', 'icon_tabbar_misc', 'icon_tabbar_misc_selected', '更多', MoreView)}
      </TabNavigator>
    );
  }

  renderNavigatorItem(text, title, renderIcon, renderSelectedIcon,navigatorName,component){
    return <TabNavigator.Item
      selected={this.state.selectedTab === text}
      title={title}
      renderIcon={() => <Image source={{ uri: renderIcon }} style={styles.iconStyle} />}
      renderSelectedIcon={() => <Image source={{ uri: renderSelectedIcon }} style={styles.iconStyle} />}
      onPress={() => this.setState({ selectedTab: text })}>
      <Navigator
        initialRoute={{ name: navigatorName, component: component }}
        configureScene={() => {
          return Navigator.SceneConfigs.PushFromRight;
        }}
        renderScene={(route, navigator) => {
          let Component = route.component;
          return <Component {...route.passPorps} navigator={navigator} />
        }}
      />
    </TabNavigator.Item>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  iconStyle:{
    width: Platform.OS==="ios"? 30:25,
    height: Platform.OS === "ios" ? 30 : 25
  }
});
