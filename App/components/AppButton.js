import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Appstyles from '../utils/Appstyles';
export const AppButton = props => {
  return (
    <TouchableOpacity
      style={[
        Appstyles.commonStyles.centerStyles,
        Appstyles.commonStyles.appButton,
      ]}
      onPress={() => props.onPress()}>
      <Text style={{color: '#fff', fontSize: 18}}>{props.title}</Text>
    </TouchableOpacity>
  );
};
