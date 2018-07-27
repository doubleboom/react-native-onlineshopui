import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    WebView
} from 'react-native';

export default class HomeDetail extends Component {
    render() {
        
        return (
            <View style={styles.container}>
                <WebView
                    style={{
                        backgroundColor: "white",
                        height: 200,
                    }}
                    source={{ uri: this.props.navigator.state.routeStack[1].passProps.url }}
                    scalesPageToFit={true}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
