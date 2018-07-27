import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    FlatList,
    Dimensions,
    TouchableOpacity
} from 'react-native';

const { width, height } = Dimensions.get("window");


export default class HomeCategoryList extends Component {
    constructor(props){
        super(props);

        this.state={
            columnNum:5
        }
    }

    render() {
        return (
            <FlatList 
                data={this.props.dataArr}
                renderItem={({ item,index }) => this.renderRow(item)}
                contentContainerStyle={styles.container}
                numColumns={this.state.columnNum}
                columnWrapperStyle={styles.column}
                keyExtractor= {(item, index) => index}
            />
        );
    }

    renderRow(row,index){
        return(
            <TouchableOpacity activeOpacity={0.5} key={index}  onPress={()=>alert('点击了分类')}>
            <View style={styles.cell}>
                <Image source={{ uri: row.icon }} style={styles.image}/>
                <Text>{row.title}</Text>
            </View>
            </TouchableOpacity>
            );
        }
    }
    
const styles = StyleSheet.create({
    container: {
       width:width,
    },
    image:{
        height:55,
        width:55
    },
    text:{

    },
    column:{
        justifyContent: "center",
        alignItems: "center",
    },
    cell:{
        width: width/5,
        justifyContent:"center",
        alignItems:"center",
        marginTop: 8
        
    }
});
