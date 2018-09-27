import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Client } from 'boardgame.io/react-native';

import Monopoly from './game';
import Board from './board';

const App = Client({
  game: Monopoly,
  board: Board,
});

const Singleplayer = () => (
  <View style={styles.container}>
    <App gameID="single" />
  </View>
);

export default Singleplayer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 300,
    height: 90,
    marginBottom: 24,
  },
});