import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class BoardSquare extends React.Component {

  render() {
    let square = this.props.gameState.squares[this.props.index];
    let playersVisiting = [];
    for (let i = 0; i < this.props.gameState.players.length; i++) {
      if (this.props.gameState.players[i].position === this.props.index) {
        playersVisiting.push(this.props.gameState.players[i].piece)
      }
    }

    if (square.isProperty && square.owner) {
      return (
        <Text>
          {square.text}
          {square.owner}
          {square.level}
          {playersVisiting}
        </Text>

      );
    } else {
      return (
        <Text>
          {square.text}
          {playersVisiting}
        </Text>

      );
    }

  }
}

const styles = StyleSheet.create({
  menubar: {
    borderBottomColor: 'black',
    borderWidth: 1
  },
});

