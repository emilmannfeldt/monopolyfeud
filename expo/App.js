import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Actionarea from './components/Actionarea';
import Gameboard from './components/Gameboard';

//components:
//app
//board > square 
//actionarea > menubar> playerinfoarea > gameactiondialog > generalmessage > chat > gamelog
//allt under actionarea är dialogrutor över spelplanen.
export default class App extends React.Component {

  //row75 kanske ska vara en fast höjd? höjden ska vara samma som window.width då? 
  //Gameboard.height = 100 vw; https://www.w3schools.com/cssref/css_units.asp 
  render() {
    return (
      <View style={styles.container}>
        <Grid>
          <Col>
            <Gameboard/>
            <Actionarea/>
          </Col>
        </Grid>
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
