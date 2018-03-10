/**
 * 更多菜单
 * @flow
 */
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
} from 'react-native'
import Popover from "./Popover";

export default class MoreMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false,
            buttonRect: {},
        };
        this.MORE_MENU = [
            {id: 0, title: '收藏'},
            {id: 1, title: '去考试'},
            {id: 2, title: '我要保障'},
            {id: 3, title: '我要咨询'},
        ]
    }

    static propTypes = {
        contentStyle: View.propTypes.style,
        menus: PropTypes.array,
    }

    open() {
        this.showPopover();
    }

    showPopover() {

        this.setState({
                          isVisible: true,
                          buttonRect: {x: 0, y: 10, width: 100, height: 100}
                      });

    }

    closePopover() {
        this.setState({
                          isVisible: false,
                      });
        if (typeof(this.props.onClose) == 'function') {
            this.props.onClose();
        }
    }

    onMoreMenuSelect(tab) {
        this.closePopover();
        if (typeof(this.props.onMoreMenuSelect) == 'function') {
            this.props.onMoreMenuSelect(tab);
        }

    }

    renderMoreView() {
        let view = <Popover
            isVisible={this.state.isVisible}
            fromRect={this.state.buttonRect}
            placement="bottom"
            onClose={() => this.closePopover()}
            contentStyle={{opacity: 0.82, backgroundColor: '#343434'}}
            contentMarginRight={-30}
        >
            <View style={{alignItems: 'center', backgroundColor: '#DDDDDD'}}>
                {this.MORE_MENU.map((result, i) => {
                    return <TouchableHighlight key={i} onPress={() => this.onMoreMenuSelect(result)}
                                               underlayColor='transparent'>
                        <Text
                            style={{fontSize: 18, color: '#333A41', padding: 8, fontWeight: '400'}}>
                            {result.title}
                        </Text>
                    </TouchableHighlight>
                })
                }

            </View>
        </Popover>;
        return view;
    }

    render() {
        return (this.renderMoreView());
    }

}