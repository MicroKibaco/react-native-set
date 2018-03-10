'use strict';
import React, {Component, PropTypes} from 'react'
import {
    ListView,
    StyleSheet,
    RefreshControl,
    TouchableHighlight,
    Text,
    Image,
    Linking,
    View,
    TouchableOpacity,
    AppRegistry,

} from 'react-native';
import Popover from "./Common/Popover";

export default class ModalDemo extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            isVisible: false,
            buttonRect: {},
        };
        this.MORE_MENU = [
            {id: 0, title: '我的收藏',img:require('./images/favorite.png')},
            {id: 1, title: '一起考试',img:require('./images/feedback.png')},
            {id: 2, title: '我要保障',img:require('./images/lock.png')},
            {id: 3, title: '我要咨询',img:require('./images/task.png')},
        ]
    }

    showPopover() {
        this.refs.button.measure((ox, oy, width, height, px, py) => {
            this.setState({
                              isVisible: true,
                              buttonRect: {x: px, y: py, width: width, height: height}
                          });
        });
    }

    closePopover() {
        this.setState({isVisible: false});
    }

    onMoreMenuSelect(tab) {
        this.closePopover();
        alert(tab.title);
        if (typeof(this.props.onMoreMenuSelect) == 'function') {
            this.props.onMoreMenuSelect(tab);
        }

    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity ref='button' style={styles.button} onPress={this.showPopover.bind(this)}>
                    <Text style={styles.buttonText}>我弹</Text>
                </TouchableOpacity>

                <Popover
                    contentMarginRight={-30}
                    isVisible={this.state.isVisible}
                    fromRect={this.state.buttonRect}
                    contentStyle={{opacity: 0.82, backgroundColor: '#DDDDDD'}}
                    placement="bottom"
                    onClose={this.closePopover.bind(this)}>
                    <View style={{alignItems: 'center', backgroundColor: '#DDDDDD'}}>
                         {this.MORE_MENU.map((result, i) => {
                         return <TouchableOpacity key={i} onPress={this.onMoreMenuSelect.bind(this,result)}
                         underlayColor='transparent'>
                            <View style={{flexDirection:'row',alignItems:'flex-start'}}>
                                <Image source={result.img} style={styles.img}/>
                                <Text
                                    style={{fontSize: 12, color: '#333A41', padding: 8, fontWeight: '400'}}>
                                    {result.title}
                                </Text>
                            </View>
                         </TouchableOpacity>
                         })
                         }

                    </View>
                </Popover>
            </View>
        );
    }
}

const styles = StyleSheet.create({
                                     container: {
                                         flex: 1,
                                         alignItems: 'center',
                                         justifyContent: 'center',

                                     },
                                     button: {
                                         borderRadius: 4,
                                         padding: 10,
                                         marginLeft: 10,
                                         marginRight: 10,
                                         backgroundColor: '#ccc',
                                         borderColor: '#333',
                                         borderWidth: 1,
                                     },
                                     img:{
                                         width:20,
                                         height:20,
                                     }
                                 });

AppRegistry.registerComponent('ModalDemo', () => ModalDemo);
