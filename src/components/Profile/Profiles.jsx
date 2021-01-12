import React from "react";
import {View,Text,Button, Alert,StyleSheet} from "react-native";
import ImageContainer from "./ImageContainer";

const styles=StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"space-around",
        flexWrap:"wrap",
        alignContent:"flex-start",
        marginTop:8
    },
    perProfile:{
        borderWidth:1,
        padding:4,
        justifyContent:"space-around",
        alignItems:"center",
        flexGrow:1,
        flexShrink:1,
        flexBasis:230,
        maxWidth:150,
        marginBottom:4
    },
    name:{
        fontFamily: "Raleway",
        fontWeight:"normal",
        fontSize:20,
        maxWidth:120
    },
    button:{
        width:120
    }
})

const Profiles=(props)=>{
    const {profiles}=props;
    return(
        <View style={styles.container}>
            {profiles.map((profile)=>{
                return (
                    <View key={profile.id} style={styles.perProfile}>
                        <ImageContainer source={{uri:profile.picture}}/>
                        <Text style={styles.name} >{profile.firstName}</Text>
                        <View style={styles.button}>
                            <Button onPress={()=>Alert.alert("Not Allowed")} title="Full Profile" color="#3700B3" />
                        </View>
                    </View>
                )
            })}
        </View>
    )
}

export default Profiles;