/* eslint-disable react-hooks/exhaustive-deps */
import {FlatList, Text, View, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import Appstyles from '../../utils/Appstyles';
import {ApiCallGet} from '../../Services/ApiServices';
import {UsersApi} from '../../config';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import store from '../../store';
import withLoader from '../../hoc/withLoader';
import {useDispatch} from 'react-redux';
import {LOADER_ON, LOADER_OFF} from '../../constants/ReduxContants';
let count = 0;
const DashBoard = ({navigation}) => {
  const [list, setlist] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    let isMounted = true;
    // console.log(store.getState());
    if (isMounted) {
      count += 1;
      getList();
    }
    console.log(count);
    return () => {
      isMounted = false;
    };
  }, []);
  const getList = async () => {
    dispatch({type: LOADER_ON});
    let ApiResponse = await ApiCallGet(UsersApi, '');
    // console.log('Api response', JSON.stringify(ApiResponse));

    setTimeout(() => {
      dispatch({type: LOADER_OFF});
      setlist(ApiResponse);
    }, 5000);
  };
  const renderList = item => {
    return (
      <TouchableOpacity
        style={{marginVertical: 10, paddingHorizontal: 10}}
        onPress={() => navigation.navigate('Login')}>
        <Text>{item.item.name}</Text>
        <Text>{item.item.email}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaProvider style={{flex: 1}}>
      <View style={[Appstyles.commonStyles.flex1]}>
        {list.length == 0 ? null : (
          <FlatList
            data={list}
            keyExtractor={(item, index) => index.toString()}
            renderItem={item => renderList(item)}
            extraData={list}
          />
        )}
      </View>
    </SafeAreaProvider>
  );
};

export default DashBoard;
