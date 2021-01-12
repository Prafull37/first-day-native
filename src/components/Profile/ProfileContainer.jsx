import React,{useContext,useMemo,useCallback} from "react";
import {View} from 'react-native';
import {ProfileContext} from "../PageConstant";
import Error from "./Error"
import Profiles from "./Profiles"
const ProfileContainer=()=>{
    const {response}=useContext(ProfileContext);
    if(response.profiles.length===0&&response.error!==""){
        return <Error/>
    }
    else{
        return <Profiles profiles={response.profiles}/>
    }
}

export default ProfileContainer;