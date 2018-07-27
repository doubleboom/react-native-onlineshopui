import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    Switch
} from 'react-native';

export default class ListCell extends Component {
    constructor(props){
        super(props);

        this.state={
            isOn:false,
        }

        this.renderRight = this.renderRight.bind(this);
        this.renderLeft = this.renderLeft.bind(this);
    }

    render() {
        return (
            <View style={styles.listCell}>
                {this.renderLeft()}
                {this.renderRight()}
            </View>
        );
    }
    
    renderLeft() {
        return (
            <View style={styles.cellLeft}>
                {this.props.icon&&this.renderImage(this.props.icon)}
                <Text style={styles.cellLeft}>{this.props.title}</Text>
            </View>
        );
    }

    renderRight(){
        if(this.props.isSwitch==="true")
            return <Switch value={this.state.isOn} onValueChange={()=>this.setState({isOn:!this.state.isOn})}/>;
        return(
            <View style={styles.cellRight}>
                <Text>{this.props.text||""}</Text>
                <Image source={{ uri: "icon_cell_rightarrow" }} style={styles.arrowImage} />
            </View>
        );
    }

    renderImage(icon){
        return <Image source={{ uri: icon }} style={styles.leftImage} />;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    listCell: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        height: 40,
        borderBottomWidth:1,
        borderBottomColor:"#dddddd"
    },
    arrowImage: {
        width: 15,
        height: 15,
    },
    leftImage:{
        width: 25,
        height: 25,
        borderRadius:12.5
    },
    cellLeft: {
        marginLeft: 5,
        flexDirection: "row",
        alignItems: "center",
    },
    cellRight:{
        flexDirection: "row" ,
        alignItems:"center",
        marginRight:5
    }
});
