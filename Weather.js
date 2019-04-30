import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import PropTypes from "prop-types";

const weatherCases = {
    Rain: {
        colors:["#00C6FB", "#005BEA"],
        title: "Raining like a MF",
        subtitle: "For more info look outside",
        icon: "ios-rainy" 
    },
    Clear: {
        colors:["#00C6FB", "#005BEA"],
        title: "Sunny as fuck",
        subtitle: "Go get your ass burnt",
        icon: "ios-sunny" 
    },
    Thunderstorm: {
        colors:["#00C6FB", "#005BEA"],
        title: "Thunderstorm in the house",
        subtitle: "Actually, outside of the house",
        icon: "ios-thunderstorm" 
    },
    Clouds: {
        colors:["#00C6FB", "#005BEA"],
        title: "Cloudes",
        subtitle: "I know, fucking boring",
        icon: "ios-cloudy" 
    },
    Snow: {
        colors:["#00C6FB", "#005BEA"],
        title: "Cold as balls",
        subtitle: "Do you want to build a snowman? Fuck no.",
        icon: "ios-snow" 
    },
    Mist: {
        colors:["#00C6FB", "#005BEA"],
        title: "Drizzle",
        subtitle: "Is like rain, but",
        icon: "ios-cloudy" 
    }
}

function Weather({weatherName, temp}){
    console.log(weatherName);
    return(
        <LinearGradient 
            colors={weatherCases[weatherName].colors} 
            style={styles.container}
        >
            <View style={styles.upper}>
                <Ionicons color="white" size={144} name={weatherCases[weatherName].icon}/>
                <Text style={styles.temp}>{temp}도</Text>
            </View>
                <View style={styles.loewer}>
                    <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
                    <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
                </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired
}
export default Weather;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    upper:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent"
    },
    temp:{
        fontSize: 24,
        backgroundColor: "transparent",
        color: "white",
        marginTop: 10
    },
    loewer:{
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "flex-end",
        paddingLeft: 25
    },
    title:{
        fontSize: 38,
        backgroundColor: "transparent",
        color: "white",
        marginBottom: 10,
        fontWeight: "300"
    },
    subtitle:{
        fontSize: 24,
        backgroundColor: "transparent",
        color: "white",
        marginBottom: 24
    }
})