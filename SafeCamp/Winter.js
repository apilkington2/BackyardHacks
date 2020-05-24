/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
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
  Colors,
} from 'react-native/Libraries/NewAppScreen';
export const WINTER = require('./winter.png');
import axios from 'axios';

export default function Winter() {

  
      // Variables
  const [weather, setWeather] = useState('');
  const [temp, setTemp] = useState(0);
  let day = 'Sunday';
  const [uv_index, setUVIndex] = useState(0);
  const air_quality = 85;

  const headers = {
    'Content-Type': 'application/json',
    'cache-control': 'no-cache'
  }
  
  const data = {
    'lat': '40.718020',
    'lon': '-96.684050'
  }
  const d = new Date();
  const weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  day = weekday[d.getDay()];
  let info = 0;
  axios.get('https://api.openweathermap.org/data/2.5/onecall?lat=40.718020&lon=-96.684050&exclude=minutely,daily,hourly,guid%7D%7Dl&appid=1f4f2ef2146f3fb37180e51479079695')
.then((response) => {
  info = response.data;  
  setTemp(Math.floor((info.current.temp - 273.15)*(9/5) + 32));
  setUVIndex(info.current.uvi);
  setWeather(info.current.weather[0].main);
});

  return (
    <>
    <View style={styles.body}>
        <ImageBackground source={WINTER} style={styles.backgroundImage}>
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
            <Button color="#385d8a" title="Scan for Poison Ivy"   onPress={() =>
        this.props.navigation.navigate('Capture!')
      }></Button>
            </View>  
          <View style={styles.snakesButton}>
            <Button color="#385d8a" title="Scan Snakes" onPress={() =>
        this.props.navigation.navigate('Capture!')
      }></Button>
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
    paddingTop: 90,
    paddingLeft: '20%',
    paddingRight: '20%'
  },
snakesButton: {
  paddingLeft: '20%',
  paddingRight: '20%',
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
    fontFamily: 'century',
    fontSize: 35,
    color: Colors.white,
    paddingLeft: 25
  },
  uv: {
    fontFamily: 'century',
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

