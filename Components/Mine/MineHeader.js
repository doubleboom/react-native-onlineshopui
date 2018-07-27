import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Dimensions
} from 'react-native';

const { width, height } = Dimensions.get("window");

export default class MineHeader extends Component {
    render() {
        return (
            <View style={styles.mineHeader}>
                {this.renderTop()}
                {this.renderBottom()}
            </View>
        );
    }

    renderTop() {
        return (
            <View style={styles.mineHeaderTop}>
                <Image source={{ uri: "see" }} style={styles.imageLeft} />
                <View style={styles.mineHeaderRight} >
                    <Text style={styles.text}>电商</Text>
                    <Image source={{ uri: "avatar_vip" }} style={styles.imageRight} />
                </View>
                <Image source={{ uri: "icon_cell_rightarrow" }} style={[styles.imageRight, styles.rightArrow]} />
            </View>
        );
    }

    renderBottom() {
        return (
            <View style={styles.mineHeaderBottom}>
                <View style={styles.mineHeaderBottomCell}>
                    <Text style={styles.text}>100</Text>
                    <Text style={styles.text}>电商券</Text>
                </View>
                <View style={styles.mineHeaderBottomCell}>
                    <Text style={styles.text}>10</Text>
                    <Text style={styles.text}>评价</Text>
                </View>
                <View style={styles.mineHeaderBottomCell}>
                    <Text style={styles.text}>50</Text>
                    <Text style={styles.text}>收藏</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mineHeader: {
        backgroundColor: 'rgba(255,96,0,1)',
        height: 150,
        width: width
    },
    mineHeaderTop: {
        flexDirection: "row",
        alignItems: 'center',
        height: 80,
        marginTop:20
    },
    mineHeaderBottom:{
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: 'rgba(255,255,255,0.3)',
        position:"absolute",
        bottom:0,
        height:50
    },
    mineHeaderBottomCell:{
        alignItems:"center",
        width:width/3+1,
        borderRightWidth:1,
        borderRightColor:"white",
        height:40
    },
    text: {
        color: "white",
        marginRight: 5
    },
    imageLeft: {
        width: width * 0.15,
        height: width * 0.15,
        borderRadius: width * 0.15 / 2,
        marginLeft: 10,
        marginRight: 10,
    },
    mineHeaderRight: {
        flexDirection: "row",
        width: width * 0.8,
        alignItems: 'center',
    },
    imageRight: {
        width: 15,
        height: 15,
    },
    rightArrow: {
        position: "absolute",
        right: 5
    }
});
