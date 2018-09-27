import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import PropTypes from 'prop-types';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Playarea from './components/Playarea';

class Board extends React.Component {
  static propTypes = {
    G: PropTypes.any.isRequired,
    ctx: PropTypes.any.isRequired,
    moves: PropTypes.any.isRequired,
    playerID: PropTypes.string,
    isActive: PropTypes.bool,
    isMultiplayer: PropTypes.bool,
    isConnected: PropTypes.bool,
  };


  move = () => {
    console.log(this.props);
    //let roll = this.props.ctx.random.Die(6, 2);
    let roll = [(Math.floor(Math.random() * 6) + 1), (Math.floor(Math.random() * 6) + 1)];
    //spara rollsen i state här och skicka vidare till n¨gon komponent som visare upp tärningar? behöver inte sparas i något
    //last die throw behöver spars i vissa fel. typ vattenverket, dubbletter. så lägg till det i G
    this.props.moves.walk(roll);

  };
  endTurn = () => {

    this.props.moves.endTurn();
    console.log(this.props);

  };

  render() {
    let boardState= {};
    boardState.players = this.props.G.players;
    boardState.squares = this.props.G.squares;
    
    return (
      <View style={styles.container}>
        <Grid>
          <Col>
            <Playarea gameState={boardState} />
            <Row size={10}>
              <Col>
                <Row size={1} style={styles.menubar}>
                  <Button title='endturn' onPress={this.endTurn} disabled={!this.props.G.hasMoved}>end turn </Button>
                  <Button title='roll' onPress={this.move} disabled={this.props.G.hasMoved}>move</Button>
                </Row>
                <Row size={7} style={styles.playerarea}>
                  <Text>
                    actionarea
                  </Text>
                </Row>
              </Col>
            </Row>
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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cell: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 96,
    height: 96,
    borderWidth: 4,
    borderColor: '#666',
    borderStyle: 'solid',
  },
  value: {
    fontSize: 48,
    fontWeight: '700',
    color: '#373748',
  },
  cell0: {
    borderLeftColor: 'transparent',
    borderTopColor: 'transparent',
  },
  cell1: {
    borderTopColor: 'transparent',
  },
  cell2: {
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
  },
  cell3: {
    borderLeftColor: 'transparent',
  },
  cell5: {
    borderRightColor: 'transparent',
  },
  cell6: {
    borderLeftColor: 'transparent',
    borderBottomColor: 'transparent',
  },
  cell7: {
    borderBottomColor: 'transparent',
  },
  cell8: {
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    borderStyle: 'solid',
  },
  info: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    marginTop: 24,
  },
  infoText: {
    fontSize: 32,
    fontWeight: '700',
    color: '#373748',
  },
});

export default Board;