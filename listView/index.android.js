/**
 * ListView的使用
 */
'use strict';
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    TouchableOpacity,
    Image
} from 'react-native';

const THUMB_URLS = [

    require('./images/bandaged.png'),
    require('./images/call.png'),
    require('./images/dislike.png'),
    require('./images/fist.png'),
    require('./images/flowers.png'),
    require('./images/like.png'),
    require('./images/party.png'),
    require('./images/poke.png'),
    require('./images/superlike.png'),
    require('./images/victory.png'),

];

export default class ListViewDemo extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        let dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        this.state = {

            ds: dataSource.cloneWithRows(
                ['row 1', 'row 2', 'row 3', 'row 4', 'row 5', 'row 6', 'row 7', 'row 8', 'row 9',
                 'row 10'])

        };
    }



    _renderRow(rowData: string, sectionID: number, rowID: number) {

        let imgSrc = THUMB_URLS[rowID];

        return (

            <TouchableOpacity underlayColor="red">
                <View>
                    <View style={styles.row}>

                        <Image style={styles.thumb} source={imgSrc}/>

                        <Text style={styles.item}>{ "  我是测试行号"+rowData }</Text>

                    </View>
                </View>
            </TouchableOpacity>

        );

    }

    render() {
        return (
            <ListView dataSource={this.state.ds}
                      renderRow={this._renderRow}
            />
        );
    }

    _itemPress(text) {

        alert(text.rowData);

    }
}

const styles = StyleSheet.create({

                                     item: {

                                         flex: 1,
                                         fontSize: 16,
                                         color: 'blue',
                                         borderBottomColor: '#ddd',
                                     },

                                     row: {

                                         flexDirection: 'row',
                                         justifyContent: 'center',
                                         padding: 10,
                                         backgroundColor: '#F6F6F6',

                                     },

                                     thumb: {

                                         width: 25,
                                         height: 25,

                                     }
                                 });

AppRegistry.registerComponent('ListViewDemo', () => ListViewDemo);
