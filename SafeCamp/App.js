/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Image,
  ImageBackground
} from 'react-native';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
export const BACKGROUND = require('./background.png'); 

const App: () => React$Node = () => {

  // Variables
  const weather = 'Sunny';
  const temp = 75;
  const day = 'Sunday';
  const uv_index = 6.3;
  const air_quality = 85;

  return (
    <>
      {/* <StatusBar barStyle="dark-content" /> */}
      {/* <SafeAreaView> */}
        {/* <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step One</Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.js</Text> to change this
                screen and then come back to see your edits.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView> */}
      {/* </SafeAreaView> */}
      <View style={styles.body}>
        <ImageBackground source={BACKGROUND} style={styles.backgroundImage}>
          <Text style={styles.day}>{day}</Text>
          <Text style={styles.temperature}>{temp.toString()}</Text>
          <Text style={styles.weather}>{weather}</Text>

          <View style={styles.right}>
            <Text style={styles.uv}>UV Index:</Text>
            <Text style={styles.uvIndex}>{uv_index.toString()}</Text>
            <Text style={styles.uv}>Air Quality:</Text>
            <Text style={styles.uvIndex}>{air_quality.toString()}</Text>
          </View>          

          <View style={styles.mainConatinerStyle}>
            <Button color="#339966" title="Scan for Poison Ivy"></Button>
            </View>  
          <View style={styles.snakesButton}>
            <Button color="#339966" title="Scan Snakes"></Button>
          </View>
                  

        </ImageBackground>
      </View> 
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  mainConatinerStyle: {
    flexDirection: 'column',
    flex: 1,
    paddingTop: 140,
    paddingLeft: '25%',
    paddingRight: '25%'
  },
snakesButton: {
  paddingLeft: '25%',
  paddingRight: '25%',
  paddingBottom: 20
},
  poisonIvy: {
    position: 'absolute',
    bottom:0,
  },
  right: {
    alignSelf: 'flex-end',
    marginTop: -165,
  },
  uvIndex: {
    fontFamily: 'Century Gothic 400',
    fontSize: 35,
    color: Colors.white,
    paddingLeft: 40
  },
  uv: {
    fontFamily: 'Century Gothic 400',
    fontSize: 25,
    color: Colors.white,
    paddingRight: 30
  },
  day: {
    color: Colors.white,
    fontSize: 25, 
    paddingTop: 220,
    fontFamily: 'Century Gothic 400',
    paddingLeft: 50,
  },
  weather: {
    color: Colors.white,
    fontFamily: 'Century Gothic 400',
    fontSize: 25,
    paddingLeft: 55,
  },
  temperature: {
    color: Colors.white,
    fontSize: 110,
    // textAlign: 'center', // <-- the magic
    fontFamily: 'Century Gothic 400',
    paddingLeft: 35,
    marginTop: -20,
    marginBottom: -20,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover', // or 'stretch'
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
