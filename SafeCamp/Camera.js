import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
// import { RNCamera } from 'react-native-camera';
// import RNFetchBlob from 'rn-fetch-blob';

export default class Camera extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center'}}>
          <Text style={{fontSize: 14}}>SNAP</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});
