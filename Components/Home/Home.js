import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    TextInput,
    ScrollView,
    Dimensions
} from 'react-native';

import HomeDetailView from './HomeDetail';
import HomeCategory from './HomeCategory';
const { width, height } = Dimensions.get("window");

export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                {this.renderNavBar()}
                <ScrollView>
                    <HomeCategory />
                    <TouchableOpacity onPress={() => this.props.navigator.push({
                        component: HomeDetailView,
                        title: '首页详情',
                        passProps: { "url": "https://baidu.com" }
                    })} >
                        <Text>
                            HomeDetail
                        </Text >
                    </TouchableOpacity>
                </ScrollView>
            </View>
        );
    }

    renderNavBar() {
        return (
            <View style={styles.NavBar}>
                <Text style={styles.topLocation}>深圳</Text>
                <TextInput
                    placeholder='输入商家、品类'
                    style={styles.topInput}
                    underlineColorAndroid="transparent"
                />
                <View style={styles.topRight}>
                    <Image source={{ uri: 'icon_homepage_scan' }} style={styles.topImage} />
                    <Image source={{ uri: 'icon_homepage_message' }} style={styles.topImage} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    NavBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'rgba(255,96,0,1)',
        height: 55,
    },
    topInput: {
        width: width * 0.75,
        backgroundColor: 'white',
        height: 40,
        padding: 0,
        borderRadius: 18,
        paddingLeft: 12,
    },
    topLocation: {
        color: "white",
        fontSize: 16
    },
    topImage: {
        width: 25,
        height: 25
    },
    topRight: {
        flexDirection: 'row'
    }
});
