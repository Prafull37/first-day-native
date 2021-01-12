import React from "react";
import {Text,View,StyleSheet} from "react-native";

const styles = StyleSheet.create({
    head:{
      padding:15,
      backgroundColor:"#02eebb",
     marginBottom:8
    },
    headerText:{
      alignSelf:'center',
      fontFamily:"Roboto",
      fontSize:25,
    }
  
});

const Header=()=>{
    return (
    <View style={styles.head}>
        <Text style={styles.headerText}>Native</Text>
    </View>
    )
}

export default Header;