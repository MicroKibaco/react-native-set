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
    TouchableOpacity,
    NativeModules, ToastAndroid, DeviceEventEmitter
} from 'react-native';
let title = 'React Native界面';

export default class RnAndroidCallBack extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.button} onPress={this.skipNativeCall.bind(this)}>
                    <Text style={styles.rnCallAndroid}>
                        RN调用Android方法
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}
                                  onPress={this.promiseComm.bind(this, 'promise发送啦')}>
                    <Text style={styles.rnCallAndroid}>
                        Promise通信方式
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}
                                  onPress={this.callbackComm.bind(this, 'callback发送啦')}>
                    <Text style={styles.rnCallAndroid}>
                        Callback通信方式
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }

    /**
     * 接收原生调用
     */
    componentDidMount() {

        DeviceEventEmitter.addListener('nativeCallRn', (msg) => {
            title = "React Native界面,收到数据：" + msg;
            ToastAndroid.show("发送成功", ToastAndroid.SHORT);

        })
    }

    skipNativeCall() {
        NativeModules.CommModule.rnCallNative('调用原生代码');
    }

    callbackComm(msg) {

        NativeModules.CommModule.rnCallNativeFromCallback(msg, (result) => {
            ToastAndroid.show("CallBack收到消息:" + result, ToastAndroid.SHORT);
        })

    }

    promiseComm(msg) {
        NativeModules.CommModule.rnCallNativeFromPromise(msg).then(
            (result) => {
                ToastAndroid.show("Promise收到消息:" + result, ToastAndroid.SHORT)
            }
        ).catch((error) => {
            console.log(error)
        });
    }
}

const styles = StyleSheet.create({
                                     container: {
                                         flex: 1,
                                         justifyContent: 'center',
                                         alignItems: 'center',
                                         backgroundColor: '#F5FCFF',
                                     },
                                     rnCallAndroid: {
                                         fontSize: 15,
                                         textAlign: 'center',
                                         marginTop: 2,
                                         marginBottom: 2,
                                     },
                                     button: {
                                         height: 20,
                                         marginTop: 15
                                     }
                                 });

AppRegistry.registerComponent('RnAndroidCallBack', () => RnAndroidCallBack);
