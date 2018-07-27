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

const {width,height}=Dimensions.get("window");

export default class MineMiddle extends Component {
    render() {
        return (
            <View style={styles.container}>
                {this.renderItems()}
            </View>
        );
    }

    renderItems(){
        let items=[];
        let itemName=['待付款','待使用','待评价','退款/售后'];
        for(i=0;i<4;i++){
            items.push(
                <View key={i} style={styles.mineMiddleCell}>
                <Image source={{ uri: "order"+(i+1) }} style={styles.image} />
                <Text>{itemName[i]}</Text>
            </View>
            );
        }
        return items;
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flexDirection:"row",
        paddingVertical:10
    },
    image:{
        height:35,
        width:45,
    },
    mineMiddleCell:{
        width: width/4,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
