import React,{useMemo,useEffect,useReducer} from "react";
import {Text,ScrollView,Button,StyleSheet} from "react-native";
import axios from "axios";
import {APP_ID,ProfileContext} from "./PageConstant"
import {ProfileReducer,loadProfiles,storeError,profileInitialState} from "./ProfileReducer";
import ProfileContainer from "./Profile/ProfileContainer";

const styles=StyleSheet.create({
    container:{
        fontSize:16,
        color:"white",
        backgroundColor:"#ef0078",
        padding:8,
       margin:8
    }
})

const ProfileSummary=()=>{
   const [response,dispatch]=useReducer(ProfileReducer,profileInitialState)
    useEffect(()=>{
        axios.get("https://dummyapi.io/data/api/user?limit=15",{headers:{
            'app-id':APP_ID
        }})
        .then((data)=>{
           dispatch(loadProfiles(data.data.data))
        })
        .catch((error)=>{
            dispatch(storeError(error))
        })
    },[])
    return (
        <ScrollView>
            <Text style={styles.container}>Welcome to the native gallery! <Text style={{fontSize:24,fontWeight:"bold",color:"#FFDE03"}}>:)</Text></Text>
            <ProfileContext.Provider value={{response,dispatch}} >
                <ProfileContainer/>
            </ProfileContext.Provider>
        </ScrollView>
    )
}

export default ProfileSummary