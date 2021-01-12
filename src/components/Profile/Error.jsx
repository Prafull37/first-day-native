import React from "react";
import {View,StyleSheet,Text} from "react-native";
// import  from "../Text";

const Error=(props)=>{
    return (<View style={styles.container}>
        <Text style={styles.label}>Ooopsy! Encountered Error :( </Text>
        <Text style={styles.mainText}> Please visit after some time.We are fighting  with this issue. </Text>
    </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flexGrow:1,
        margin:4,
        padding:8,
        backgroundColor:"rgba(220,220,220,0.4)",
        borderBottomColor:"rgb(189, 29, 29)",
        borderBottomWidth:2
    },

    label:{
        fontSize:12,
        color:"rgb(202, 84, 48)",
        marginBottom:4,
    },
    mainText:{
        color:"rgb(255, 140, 38)"
    }
})

export default Error;