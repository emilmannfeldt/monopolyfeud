import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//components:
//app
//board > square 
//actionarea > playerinfoarea > gameactiondialog > generalmessage > chat > gamelog

//css grid funkar inte med react native....?? behöver jag ha det så komplicerat? 
//använd https://github.com/GeekyAnts/react-native-easy-grid 11 kolumner x 11 rader. 
//rad 1 och 11 har 11 divar
//rad 2-10 har döljt kolumn 2-10? eller slår ihop dem så det bara är 3 divar? 
//jag skippar att använda middle board. jag använder det utrymmet bara till dialoger.
//
export default class actionarea extends React.Component {
  render() {
    return (
        <div >
        actionarea
      </div>
    );
  }
}
