/**
 * 图像预览
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,
    Image,
    TouchableOpacity
} from 'react-native';

export default class NavigatorDemo extends Component {
    render() {

        const routes = [
            {image: require('./images/bulletin_bg.jpg'), index: 0},
            {image: require('./images/channel_vi_default.old.jpg'), index: 1},
            {image: require('./images/home_banner.jpg'), index: 2},
            {image: require('./images/othernet_vi_default.jpg'), index: 3},
            {image: require('./images/othernet_vi_default_s.jpg'), index: 4},
        ];
        let i = 0;
        return (
            <Navigator initialRoute={routes[0]}
                       style={{padding: 100}}
                       initialRouteStack={routes}
                       renderScene={(route, navigator) =>
                           <View >
                               <Image source={route.image} style={ {height: 300, width: 300} }/>
                               <View style={ {flexDirection: 'row'} }>
                                   <TouchableOpacity onPress={() => {
                                       if (i > 0) {
                                           navigator.pop();
                                           --i;
                                       } else {
                                           alert('已经是第一个图呢!');
                                       }
                                   }
                                   }>
                                       <Text style={ {marginTop: 20} }>上一图</Text>
                                   </TouchableOpacity>
                                   <TouchableOpacity style={ {marginLeft: 20} } onPress={() => {
                                       if (i < routes.length - 1) {
                                           navigator.push(routes[++i]);
                                           --i;
                                       } else {
                                           alert('已经是最后一张图呢!');
                                       }
                                   }
                                   }>
                                       <Text style={ {marginTop: 20} }>下一图</Text>
                                   </TouchableOpacity>


                               </View>
                           </View>

                       }

            />
        );

    }

}

const styles = StyleSheet.create({});

AppRegistry.registerComponent('NavigatorDemo', () => NavigatorDemo);
