import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";

//components:
//app
//board > square 
//actionarea > playerinfoarea > gameactiondialog > generalmessage > chat > gamelog
export default class Gameboard extends React.Component {
    render() {
        return (
            <div>
                <Row>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col size={1}></Col>
                    <Col size={9}></Col>
                    <Col size={1}></Col>
                </Row>
                <Row>
                    <Col size={1}></Col>
                    <Col size={9}></Col>
                    <Col size={1}></Col>
                </Row>                <Row>
                    <Col size={1}></Col>
                    <Col size={9}></Col>
                    <Col size={1}></Col>
                </Row>                <Row>
                    <Col size={1}></Col>
                    <Col size={9}></Col>
                    <Col size={1}></Col>
                </Row>                <Row>
                    <Col size={1}></Col>
                    <Col size={9}></Col>
                    <Col size={1}></Col>
                </Row>                <Row>
                    <Col size={1}></Col>
                    <Col size={9}></Col>
                    <Col size={1}></Col>
                </Row>                <Row>
                    <Col size={1}></Col>
                    <Col size={9}></Col>
                    <Col size={1}></Col>
                </Row>                <Row>
                    <Col size={1}></Col>
                    <Col size={9}></Col>
                    <Col size={1}></Col>
                </Row>                <Row>
                    <Col size={1}></Col>
                    <Col size={9}></Col>
                    <Col size={1}></Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
            </div>
        );
    }
}
