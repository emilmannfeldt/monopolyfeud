import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';

//components:
//app
//board > square 
//actionarea > playerinfoarea > gameactiondialog > generalmessage > chat > gamelog
export default class Gameboard extends React.Component {
    render() {
        return (
            <Row size={18}>
                <Col size={10}>
                    <Row size={10} style={styles.square}><Text>ruta1</Text></Row>
                    <Row size={5} style={styles.square}><Text>ruta1</Text></Row>
                    <Row size={5} style={styles.square}><Text>ruta1</Text></Row>
                    <Row size={5} style={styles.square}><Text>ruta1</Text></Row>
                    <Row size={5} style={styles.square}><Text>ruta1</Text></Row>
                    <Row size={5} style={styles.square}><Text>ruta1</Text></Row>
                    <Row size={5} style={styles.square}><Text>ruta1</Text></Row>
                    <Row size={5} style={styles.square}><Text>ruta1</Text></Row> 
                    <Row size={5} style={styles.square}><Text>ruta1</Text></Row>
                    <Row size={5} style={styles.square}><Text>ruta1</Text></Row>
                    <Row size={10} style={styles.square}><Text>ruta1</Text></Row>
                </Col>
                <Col size={5}>
                    <Row size={10} style={styles.square} size={1}><Text>ruta1</Text></Row>
                    <Row size={5}><Text></Text></Row>
                    <Row size={10} style={styles.square} size={1}><Text>ruta1</Text></Row>
                </Col>
                <Col size={5}>
                    <Row size={10} style={styles.square} size={1}><Text>ruta1</Text></Row>
                    <Row size={5}><Text></Text></Row>
                    <Row size={10} style={styles.square} size={1}><Text>ruta1</Text></Row>
                </Col>
                <Col size={5}>
                    <Row size={10} style={styles.square} size={1}><Text>ruta1</Text></Row>
                    <Row size={5}><Text></Text></Row>
                    <Row size={10} style={styles.square} size={1}><Text>ruta1</Text></Row>
                </Col>
                <Col size={5}>
                    <Row size={10} style={styles.square} size={1}><Text>ruta1</Text></Row>
                    <Row size={5}><Text></Text></Row>
                    <Row size={10} style={styles.square} size={1}><Text>ruta1</Text></Row>
                </Col>
                <Col size={5}>
                    <Row size={10} style={styles.square} size={1}><Text>ruta1</Text></Row>
                    <Row size={5}><Text></Text></Row>
                    <Row size={10} style={styles.square} size={1}><Text>ruta1</Text></Row>
                </Col>
                <Col size={5}>
                    <Row size={10} style={styles.square} size={1}><Text>ruta1</Text></Row>
                    <Row size={5}><Text></Text></Row>
                    <Row size={10} style={styles.square} size={1}><Text>ruta1</Text></Row>
                </Col>
                <Col size={5}>
                    <Row size={10} style={styles.square} size={1}><Text>ruta1</Text></Row>
                    <Row size={5}><Text></Text></Row>
                    <Row size={10} style={styles.square} size={1}><Text>ruta1</Text></Row>
                </Col>
                <Col size={5}>
                    <Row size={10} style={styles.square} size={1}><Text>ruta1</Text></Row>
                    <Row size={5}><Text></Text></Row>
                    <Row size={10} style={styles.square} size={1}><Text>ruta1</Text></Row>
                </Col>
                <Col size={5}>
                    <Row size={10} style={styles.square} size={1}><Text>ruta1</Text></Row>
                    <Row size={5}><Text></Text></Row>
                    <Row size={10} style={styles.square} size={1}><Text>ruta1</Text></Row>
                </Col>
                <Col size={10}>
                    <Row size={10} style={styles.square}><Text>ruta1</Text></Row>
                    <Row size={5} style={styles.square}><Text>ruta1</Text></Row>
                    <Row size={5} style={styles.square}><Text>ruta1</Text></Row>
                    <Row size={5} style={styles.square}><Text>ruta1</Text></Row>
                    <Row size={5} style={styles.square}><Text>ruta1</Text></Row>
                    <Row size={5} style={styles.square}><Text>ruta1</Text></Row>
                    <Row size={5} style={styles.square}><Text>ruta1</Text></Row>
                    <Row size={5} style={styles.square}><Text>ruta1</Text></Row>
                    <Row size={5} style={styles.square}><Text>ruta1</Text></Row>
                    <Row size={5} style={styles.square}><Text>ruta1</Text></Row>
                    <Row size={10} style={styles.square}><Text>ruta1</Text></Row>
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
});