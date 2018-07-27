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
import MineHeader from './MineHeader';
import MineMiddle from './MineMiddle';


export default class Mine extends Component {
    render() {
        return (
            <View style={styles.container}>
                <MineHeader />
                <ListCell title="我的订单" icon="collect" text="查看全部订单"/>
                <MineMiddle />
                <View style={{marginTop:10}}>
                    <ListCell title="钱包" icon="draft" text="账户余额:￥100" />
                    <ListCell title="抵用券" icon="like" text="0" />
                </View>
                <View style={{ marginTop: 10 }}>
                    <ListCell title="积分商城" icon="card" />
                </View>
                <View style={{ marginTop: 10 }}>
                    <ListCell title="今日推荐" icon="new_friend" text="new" />
                </View>
                <View style={{ marginTop: 10 }}>
                    <ListCell title="我要合作" icon="pay" text="轻松开店，招财进宝" />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E5E5E5',
    },
});
