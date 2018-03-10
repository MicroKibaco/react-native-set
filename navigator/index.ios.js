
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,
    TouchableOpacity,
} from 'react-native';


class NavButton extends Component {



    render() {

        return (<TouchableOpacity style={styles.button}
                                  underlayColor='#E42327'
                                  onPress={this.props.onPress}>
            <Text style={styles.buttonText}>{this.props.text}</Text>
        </TouchableOpacity>);

    }

}

class NavMenu extends Component {


    render() {

        return (
            <View style={styles.scenes}>
                <Text style={styles.msgText}> {this.props.message}</Text>
                <NavButton onPress={() => {

                    this.props.navigator.push({
                                                  message: '向右拖拽关闭开关',
                                                  sceneConfig: Navigator.SceneConfigs.FloatFromRight,
                                              });

                }}
                           text="从右向左边切入页面(带有透明度变化)"
                />
                <NavButton onPress={() => {

                    this.props.navigator.push({
                                                  message: '向下拖拽关闭开关',
                                                  sceneConfig: Navigator.SceneConfigs.FloatFromBottom,
                                              });

                }}
                           text="从下往上切入页面(带有透明度变化)"
                />
                <NavButton onPress={() => {

                    this.props.navigator.pop();

                }}
                           text="页面弹出(回退一页)"
                />
                <NavButton onPress={() => {

                    this.props.navigator.popToTop();

                }}
                           text="页面弹出(回退最后一页)"
                />


            </View>);

    }

}

class NavigatorDemo extends Component {


    render() {

        return (
            <Navigator
                style={styles.container}
                initialRoute={{message: '初始化页面',}}
                renderScene={(route, navigator) =>

                    <NavMenu message={route.message}
                             navigator={navigator}
                    />}

                configureScene={(route) => {

                    if (route.sceneConfig) {

                        return route.sceneConfig;

                    }

                    return Navigator.SceneConfigs.FloatFromBottom;
                    }
                }

            />
         );

    }
}

const styles = StyleSheet.create({
                                     container: {
                                         flex: 1
                                     },
                                     button: {
                                         backgroundColor: 'white',
                                         padding: 15,
                                         borderBottomWidth: StyleSheet.hairlineWidth,
                                         borderBottomColor: '#CDCDCD',
                                     },

                                     msgText: {
                                         fontSize: 17,
                                         fontWeight: '500',
                                         padding: 15,
                                         marginTop: 50,
                                         marginLeft: 15,
                                     }

                                 });

AppRegistry.registerComponent('NavigatorDemo', () => NavigatorDemo);
