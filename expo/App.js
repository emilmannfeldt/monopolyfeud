import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Actionarea from './components/Actionarea';
import Gameboard from './components/Gameboard';
import { Col, Row, Grid } from "react-native-easy-grid";

//components:
//app
//board > square 
//actionarea > playerinfoarea > gameactiondialog > generalmessage > chat > gamelog
export default class App extends React.Component {

  getText() {
    return "testt";
  }

  render() {
    return (
      <View style={styles.container}>
        <Grid>
          <Row size={75}>
            <Gameboard />
          </Row>
          <Row size={25}>
            <Actionarea />
          </Row>
        </Grid>
        {this.getText}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
