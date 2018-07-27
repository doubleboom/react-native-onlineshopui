import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
    Dimensions
} from 'react-native';

import HomeCategoryList from './HomeCategoryList';
import categoryData from './category.json';

const {width,height}=Dimensions.get("window");

export default class HomeCategory extends Component {
    constructor(props){
        super(props);

        this.state={
            activeIndex:0
        }

        this.renderDot=this.renderDot.bind(this);
        this.getActiveIndex = this.getActiveIndex.bind(this);
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView 
                horizontal ={true}
                showsHorizontalScrollIndicator={false}
                pagingEnabled ={true}
                onMomentumScrollEnd={(e)=>this.getActiveIndex(e)}
                contentContainerStyle={styles.category}>
                {this.renderCategoryList()}
                </ScrollView>
                <View style={styles.dot}>
                {this.renderDot()}
                </View>
            </View>
        );
    }

    getActiveIndex(e){
        this.setState({
            activeIndex:Math.round(e.nativeEvent.contentOffset.x/width)
        })
    }

    renderDot(){
        let itemArr=[];
        let dotNum=2;
        for (i = 0; i < dotNum;i++){
            itemArr.push(
                <Text key={i} style={this.state.activeIndex === i ? styles.activeText : styles.text}>&bull;</Text>
            )
        }
        
        return itemArr;
    }

    renderCategoryList(){
        let listItems=[];
        categoryData.forEach((item,index) => {
            listItems.push(
                <View key={index} style={styles.categoryItem}>
                    <HomeCategoryList dataArr={item} />
                </View>
            );
        });
        return listItems;
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height:195,
    },
    category:{
        flexDirection: "row",
        alignItems: "center",
    },
    categoryItem:{
        width: width,
    },
    dot:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
    },
    text:{
        fontSize:20,
        color:"gray"
    },
    activeText: {
        fontSize: 20,
        color: "orange"
    }
});



