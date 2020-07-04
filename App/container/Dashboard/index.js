import { FlatList, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react'
import Appstyles from '../../utils/Appstyles';
import { ApiCallGet } from '../../Services/ApiServices';
import { UsersApi } from '../../config';
import { SafeAreaProvider } from 'react-native-safe-area-context';
const DashBoard = ({ navigation }) => {
    const [list, setlist] = useState([])
    useEffect(() => {
        getList();
    }, [])
    const getList = async () => {
        let ApiResponse = await ApiCallGet(UsersApi, '');
        console.log('Api response', JSON.stringify(ApiResponse))
        setlist(ApiResponse)
    }
    const renderList = (item) => {
        return (
            <View style={{marginVertical: 10,paddingHorizontal:10}}>
                <Text>{item.item.name}</Text>
                <Text>{item.item.email}</Text>

            </View>
        )
    }
    return (
        <SafeAreaProvider style={{ backgroundColor: '#fff', flex: 1 }}>
        <View style={[Appstyles.commonStyles.flex1]}>
            {
                list.length == 0 ? null :

                    <FlatList
                        data={list}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={item => renderList(item)}
                        extraData={list}
                    />
            }
        </View>
        </SafeAreaProvider>
    )
}

export default DashBoard;