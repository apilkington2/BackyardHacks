import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, Button, ImageBackground} from 'react-native';
// import { RNCamera } from 'react-native-camera';
// import RNFetchBlob from 'rn-fetch-blob';
export const BACKGROUND = require('./background.png'); 
import ImagePicker from 'react-native-image-picker';
import {Colors} from 'react-native/Libraries/NewAppScreen';
export default class Camera extends Component {
  state = {
    photo: null,
  }

  handleChoosePhoto = () => {
    const options = {
      noData: true,
    }
    ImagePicker.launchImageLibrary(options, response => {
      if (response.uri) {
        this.setState({ photo: response })
      }
    })
  }

  render() {
    const { photo } = this.state
    return (
      // <View style={styles.container}>
      //   <ImageBackground source={BACKGROUND} style={styles.backgroundImage}>
        
      //   </ImageBackground>
      // </View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {photo && (
        <Image
          source={{ uri: photo.uri }}
          style={{ width: 300, height: 300, marginBottom: 10 }}
        />
      )}
      <Button color="#339966" title="Choose Photo" onPress={this.handleChoosePhoto} />
      <View style={styles.button}>
      <Button color="#339966" title="Submit"  onPress={() =>
        this.props.navigation.navigate('Safe Camp')
      } />
      </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
  },
  button: {
    marginTop: 10,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover', // or 'stretch'
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
