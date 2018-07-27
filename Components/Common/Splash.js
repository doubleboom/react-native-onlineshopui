import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

import { Navigator } from 'react-native-deprecated-custom-components';
import MainView from '../Main/Main';

class Splash extends Component {

    componentDidMount() {
        setTimeout(() => {
            this.props.navigator.replace({
                component: MainView,
                title: '首页',
            })
        }, 500);
    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={{ uri: 'launchimage' }} style={styles.container} />
            </View>
        );
    }
}

export default class SplashNavigator extends Component {
    render() {
        return (
            <Navigator
                style={styles.container}
                initialRoute={{ name: "启动页", component: Splash }}
                configureScene={() => {
                    return Navigator.SceneConfigs.PushFromRight;
                }}
                renderScene={(route, navigator) => {
                    let Component = route.component;
                    return <Component {...route.passPorps} navigator={navigator} />
                }}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
