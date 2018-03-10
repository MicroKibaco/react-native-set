/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    TouchableOpacity,
} from 'react-native';

export default class TouchableHighlightDemo extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            eventLog: [],
        };
    }


    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textTitle}>
                    Touchable*实例
                </Text>
                <TouchableHighlight
                    style={styles.touchable}
                    activeOpacity={0.5}
                    underlayColor='rgb(210,230,255)'
                    onHideUnderlay={ () => this._appendEvent('TouchableHighlight   hideUnderlay')}
                    onShowUnderlay={ () => this._appendEvent('TouchableHighlight   showUnderlay')}
                    onPress={() => this._appendEvent('TouchableHighlight   press')}
                >

                    <Text style={styles.textHighlight}>TouchableHighlight:有本事点我呀!</Text>
                </TouchableHighlight>

                <TouchableOpacity
                    style={styles.touchable}
                    onPressIn={ () => this._appendEvent('TouchableOpacity   pressIn')}
                    onPress={() => this._appendEvent('TouchableOpacity   press')}
                    onPressOut={() => this._appendEvent('TouchableOpacity   pressOut')}
                    onLongPress={() => this._appendEvent('TouchableOpacity   longPress')}
                >
                    <Text style={styles.textOpacity}>TouchableOpacity:点我我就变呀!</Text>
                </TouchableOpacity>

                <View style={styles.eventLogBox}>
                    {this.state.eventLog.map((e, ii) => <Text key={ii}>{e}</Text>)}
                </View>

            </View>
        );
    }
    _appendEvent(eventName) {
        let limit = 6;
        let eventLog = this.state.eventLog.slice(0, limit - 1);
        eventLog.unshift(eventName);
        this.setState({eventLog});
    }
}

const styles = StyleSheet.create({
                                     container: {
                                         flex: 1,
                                         justifyContent: 'center',
                                         alignItems: 'center',
                                         backgroundColor: '#F5FCFF',
                                     },
                                     textHighlight: {
                                         fontSize: 16,
                                         color: 'green'
                                     },
                                     textOpacity: {
                                         fontSize: 16,
                                         color: 'blue'
                                     },
                                     textTitle: {
                                         fontSize: 20,
                                         color: 'red'
                                     },
                                     touchable: {
                                         borderRadius: 8,
                                         padding: 6,
                                         marginTop: 5,
                                     },
                                     eventLogBox: {

                                         padding: 10,
                                         margin: 10,
                                         height: 120,
                                         borderWidth: StyleSheet.hairlineWidth,
                                         borderColor: '#f0f0f0',
                                         backgroundColor: '#f9f9f9',

                                     }
                                 });

AppRegistry.registerComponent('TouchableHighlightDemo', () => TouchableHighlightDemo);
