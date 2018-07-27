import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class Shop extends Component {
    constructor(props){
        super(props);

        this.state={
            nowTime: Date.now()
        }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({
            });
        },1000)
    }

    render() {
        var date = new Date();
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var hour = date.getHours();
        var minute = date.getMinutes();
        var second = date.getSeconds();
        return (
            <View style={styles.container}>
                <Text>
                    {year + '年' + month + '月' + day + '日 ' + hour + ':' + minute + ':' + second}
                </Text>
            </View>
        );
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});
