import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import BoardSquare from './boardSquare';

//components:
//app
//board > square 
//actionarea > playerinfoarea > gameactiondialog > generalmessage > chat > gamelog
export default class Playarea extends React.Component {

    //effetkivare alternativ kan vara att loppa igenom alla squares i gameState
    //visitingplayers....
    //if(gamestate.player[0].position==i) visitingplayers.push(player[0].piece)
    // <BoardSquare square=squares[i] visitingPlayers={visitingplayers} playerone={gamestate.player[0].position==i} index=i />
    //och sen ritar jag ut dessa index på rätt ställen {BoardSquares[20]}
    render() {

        return (
            <Row size={18}>
                <Col size={10}>
                    <Row size={10} style={styles.square}><BoardSquare gameState={this.props.gameState} index={20} /></Row>
                    <Row size={5} style={styles.square}><BoardSquare gameState={this.props.gameState} index={19} /></Row>
                    <Row size={5} style={styles.square}><BoardSquare gameState={this.props.gameState} index={18} /></Row>
                    <Row size={5} style={styles.square}><BoardSquare gameState={this.props.gameState} index={17} /></Row>
                    <Row size={5} style={styles.square}><BoardSquare gameState={this.props.gameState} index={16} /></Row>
                    <Row size={5} style={styles.square}><BoardSquare gameState={this.props.gameState} index={15} /></Row>
                    <Row size={5} style={styles.square}><BoardSquare gameState={this.props.gameState} index={14} /></Row>
                    <Row size={5} style={styles.square}><BoardSquare gameState={this.props.gameState} index={13} /></Row>
                    <Row size={5} style={styles.square}><BoardSquare gameState={this.props.gameState} index={12} /></Row>
                    <Row size={5} style={styles.square}><BoardSquare gameState={this.props.gameState} index={11} /></Row>
                    <Row size={10} style={styles.square}><BoardSquare gameState={this.props.gameState} index={10} /></Row>
                </Col>
                <Col size={5}>
                    <Row size={10} style={styles.horizontalSquare} size={1}><BoardSquare gameState={this.props.gameState} index={21} /></Row>
                    <Row size={5}><Text></Text></Row>
                    <Row size={10} style={styles.horizontalSquare} size={1}><BoardSquare gameState={this.props.gameState} index={9} /></Row>
                </Col>
                <Col size={5}>
                    <Row size={10} style={styles.horizontalSquare} size={1}><BoardSquare gameState={this.props.gameState} index={22} /></Row>
                    <Row size={5}><Text></Text></Row>
                    <Row size={10} style={styles.horizontalSquare} size={1}><BoardSquare gameState={this.props.gameState} index={8} /></Row>
                </Col>
                <Col size={5}>
                    <Row size={10} style={styles.horizontalSquare} size={1}><BoardSquare gameState={this.props.gameState} index={23} /></Row>
                    <Row size={5}><Text></Text></Row>
                    <Row size={10} style={styles.horizontalSquare} size={1}><BoardSquare gameState={this.props.gameState} index={7} /></Row>
                </Col>
                <Col size={5}>
                    <Row size={10} style={styles.horizontalSquare} size={1}><BoardSquare gameState={this.props.gameState} index={24} /></Row>
                    <Row size={5}><Text></Text></Row>
                    <Row size={10} style={styles.horizontalSquare} size={1}><BoardSquare gameState={this.props.gameState} index={6} /></Row>
                </Col>
                <Col size={5}>
                    <Row size={10} style={styles.horizontalSquare} size={1}><BoardSquare gameState={this.props.gameState} index={25} /></Row>
                    <Row size={5}><Text></Text></Row>
                    <Row size={10} style={styles.horizontalSquare} size={1}><BoardSquare gameState={this.props.gameState} index={5} /></Row>
                </Col>
                <Col size={5}>
                    <Row size={10} style={styles.horizontalSquare} size={1}><BoardSquare gameState={this.props.gameState} index={26} /></Row>
                    <Row size={5}><Text></Text></Row>
                    <Row size={10} style={styles.horizontalSquare} size={1}><BoardSquare gameState={this.props.gameState} index={4} /></Row>
                </Col>
                <Col size={5}>
                    <Row size={10} style={styles.horizontalSquare} size={1}><BoardSquare gameState={this.props.gameState} index={27} /></Row>
                    <Row size={5}><Text></Text></Row>
                    <Row size={10} style={styles.horizontalSquare} size={1}><BoardSquare gameState={this.props.gameState} index={3} /></Row>
                </Col>
                <Col size={5}>
                    <Row size={10} style={styles.horizontalSquare} size={1}><BoardSquare gameState={this.props.gameState} index={28} /></Row>
                    <Row size={5}><Text></Text></Row>
                    <Row size={10} style={styles.horizontalSquare} size={1}><BoardSquare gameState={this.props.gameState} index={2} /></Row>
                </Col>
                <Col size={5}>
                    <Row size={10} style={styles.horizontalSquare} size={1}><BoardSquare gameState={this.props.gameState} index={29} /></Row>
                    <Row size={5}><Text></Text></Row>
                    <Row size={10} style={styles.horizontalSquare} size={1}><BoardSquare gameState={this.props.gameState} index={1} /></Row>
                </Col>
                <Col size={10}>
                    <Row size={10} style={styles.square}><BoardSquare gameState={this.props.gameState} index={30} /></Row>
                    <Row size={5} style={styles.square}><BoardSquare gameState={this.props.gameState} index={31} /></Row>
                    <Row size={5} style={styles.square}><BoardSquare gameState={this.props.gameState} index={32} /></Row>
                    <Row size={5} style={styles.square}><BoardSquare gameState={this.props.gameState} index={33} /></Row>
                    <Row size={5} style={styles.square}><BoardSquare gameState={this.props.gameState} index={34} /></Row>
                    <Row size={5} style={styles.square}><BoardSquare gameState={this.props.gameState} index={35} /></Row>
                    <Row size={5} style={styles.square}><BoardSquare gameState={this.props.gameState} index={36} /></Row>
                    <Row size={5} style={styles.square}><BoardSquare gameState={this.props.gameState} index={37} /></Row>
                    <Row size={5} style={styles.square}><BoardSquare gameState={this.props.gameState} index={38} /></Row>
                    <Row size={5} style={styles.square}><BoardSquare gameState={this.props.gameState} index={39} /></Row>
                    <Row size={10} style={styles.square}><BoardSquare gameState={this.props.gameState} index={0} /></Row>
                    
                </Col>
            </Row >
        );
    }
}

const styles = StyleSheet.create({
    square: {
        borderColor: 'black',
        borderWidth: 1,
        borderStyle: 'solid',
    },
    horizontalSquare: {
        borderColor: 'black',
        borderWidth: 1,
        borderStyle: 'solid',
    },
    horizontalText: {
        transform: [{ rotate: '90deg' }]
    }
});