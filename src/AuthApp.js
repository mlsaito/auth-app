import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';

class AuthApp extends Component {
  componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyDUNJzNRfZNIQQrru5_Q9gvy05g77ZCCzU',
    authDomain: 'authapp-dbb99.firebaseapp.com',
    databaseURL: 'https://authapp-dbb99.firebaseio.com',
    storageBucket: 'authapp-dbb99.appspot.com',
    messagingSenderId: '386128514478'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
      </View>
    );
  }
}

export default AuthApp;
