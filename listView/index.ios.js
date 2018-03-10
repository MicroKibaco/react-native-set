/**
 * ListView实现图文横向排列
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
    require('./images/zbjk@2x.png'),
    require('./images/yytxj@2x.png'),
    require('./images/yytkhpm@2x.png'),
    require('./images/wangdianzoufang@2x.png'),
    require('./images/rz@2x.png'),
    require('./images/share@3x.png'),
    require('./images/update@3x.png'),
    require('./images/kaoshi@3x.png'),


];

export default class ListViewDemo extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        let dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {

            ds: dataSource.cloneWithRows(
                this.genRows())

        };
    }

    genRows() {

        let dataBlob = [];
        for (let i = 0; i < THUMB_URLS.length; i++) {

            let pressText = '单元格' + i;
            dataBlob.push(pressText);

        }

        return dataBlob;

    }

    _renderRow(rowData: string, sectionID: number, rowID: number) {

        let imgSrc = THUMB_URLS[rowID];

        return (<TouchableOpacity underlayColor='red'>

            <View>
                <View style={styles.row}>

                    <Image style={styles.thumb} source={imgSrc}/>
                    <Text style={styles.text}>{rowData}</Text>

                </View>
            </View>

        </TouchableOpacity>);

    }

    render() {
        return (
            <ListView dataSource={this.state.ds}
                      initialListSize={12}
                      contentContainerStyle={styles.list}
                      renderRow={this._renderRow}
            />
        );
    }
}

const styles = StyleSheet.create({

                                     list: {
                                         marginTop: 5,
                                         justifyContent: 'space-around',
                                         flexWrap: 'wrap',
                                         flexDirection: 'row',
                                     },
                                     row: {
                                         justifyContent: 'center',
                                         padding: 5,
                                         margin: 3,
                                         width: 85,
                                         height: 85,
                                         backgroundColor: '#F6F6F6',
                                         alignItems: 'center',
                                         borderWidth: 1,
                                         borderRadius: 5,
                                         borderColor: '#ccc'
                                     },
                                     thumb: {
                                         width: 45,
                                         height: 45,
                                     },
                                     text: {
                                         flex: 1,
                                         marginTop: 5,
                                         fontWeight: 'bold',
                                     }
                                 });

AppRegistry.registerComponent('ListViewDemo', () => ListViewDemo);
