/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class TesteRouter extends Component {
  render() {
    return (
      <>
        <View>
          <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
            <Text>open Drawer</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  }
}

export default TesteRouter;
