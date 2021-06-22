/* eslint-disable react-native/no-inline-styles */

//HoC with Keyboard dismiss and loading functionality for every page
//https://www.smashingmagazine.com/2020/06/higher-order-components-react/
import React from 'react';
import {
  View,
  ActivityIndicator,
  Text,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import store from '../store';
import {connect} from 'react-redux';
const withLoader = ReduxScreen => {
  class withHoc extends React.Component {
    render() {
      let loader = this.props.loader;
      console.log('loader is ', loader);
      // if (loader.loading) {
      //   console.log('value is ', loader.loading);
      //   return (
      //     <View
      //       style={[
      //         StyleSheet.absoluteFill,
      //         {
      //           backgroundColor: 'rgba(0, 0, 0, 0.4)',
      //           justifyContent: 'center',
      //         },
      //       ]}>
      //       <ActivityIndicator size="large" />
      //       <Text style={{alignSelf: 'center'}}>We will be back shortly</Text>
      //     </View>
      //   );
      // } else {
      //   console.log('value is else ', loader.loading);
      //   return (
      //     <View style={{flex: 1}}>
      //       <ReduxScreen {...this.props} />
      //     </View>
      //   );
      // }
      // if (loader.loading === true) {
      //   return (
      //     <View
      //       style={[
      //         StyleSheet.absoluteFill,
      //         {
      //           backgroundColor: 'rgba(0, 0, 0, 0.4)',
      //           justifyContent: 'center',
      //         },
      //       ]}>
      //       <ActivityIndicator size="large" />
      //       <Text style={{alignSelf: 'center'}}>We will be back shortly</Text>
      //     </View>
      //   );
      // } else {
      return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={{flex: 1}}>
            <ReduxScreen {...this.props} />

            {loader.loading ? (
              <View
                style={[
                  StyleSheet.absoluteFill,
                  {
                    backgroundColor: 'rgba(0, 0, 0, 0.4)',
                    justifyContent: 'center',
                  },
                ]}>
                <ActivityIndicator size="large" />
              </View>
            ) : null}
          </View>
        </TouchableWithoutFeedback>
      );
      // }
    }
  }

  const mapStateToProps = state => {
    return state;
  };

  return connect(
    mapStateToProps,
    null,
  )(withHoc);
};

export default withLoader;
