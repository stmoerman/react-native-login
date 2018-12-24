/*
Copyright Scope Web LLC
https://www.scopeweb.nyc
Email: info@scopeweb.nyc
*/
import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class Splash extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Hello, this is wizard stuff!</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'black'
    }
})