import { TextInput, View } from 'react-native';
import React from 'react'

export const InputField = (props) => {
    return (
        <View style={{ width: '80%', height: 60, paddingHorizontal: 10, borderRadius: 10,borderWidth:1 ,marginVertical:'2%' ,justifyContent: 'center',borderColor:'#fff' }}>
            <TextInput
                style={{ fontSize: 16, color: '#fff' }}
                placeholderTextColor='#fff'
                {...props}
            />
        </View>
    )
}