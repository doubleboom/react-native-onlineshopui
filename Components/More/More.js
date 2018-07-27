import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView
} from 'react-native';

import ListCell from '../Common/ListCell';

export default class More extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.NavBar}>
                    <Text style={{color:"white"}}>更多</Text>
                    <Image source={{ uri:"icon_mine_setting"}} style={styles.topImage}/>
                </View> 
                <ScrollView>
                    <ListCell title="扫一扫" />
                    <View style={{ marginTop: 20 }}>
                        <ListCell title="省流量模式" isSwitch="true" />
                        <ListCell title="消息提醒" />
                        <ListCell title="清空缓存" text="1.99M"/>
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <ListCell title="网络诊断" />
                        <ListCell title="关于码团" />
                        <ListCell title="我要应聘" />
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <ListCell title="精品应用" />
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#E5E5E5"
    },
    NavBar: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255,96,0,1)',
        height: 55,
    },
    topImage: {
        position:"absolute",
        right:8,
        width: 25,
        height: 25
    },
});
