import React from "react";
import {View,Image,StyleSheet} from "react-native";

const styles=StyleSheet.create({
    container:{
        marginBottom:2,
    },
    image:{
        width:120,
        height:120
    }

})

const ImageContainer =(props)=>{
    return (
        <View style={styles.container}>
            <Image  style={styles.image} source={props.source}/>
        </View>
    )
}

export default ImageContainer;
