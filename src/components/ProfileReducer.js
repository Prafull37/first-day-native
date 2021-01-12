export const LOAD_PROFILES="LOAD_PROFILES";
export const THROW_ERROR="THROW_ERROR";

export const loadProfiles=(profiles)=>{
    return {
        type:LOAD_PROFILES,
        payload:profiles
    }
}

export const storeError=(error)=>{
    return {
        type:THROW_ERROR,
        error:error
    }
}

export const profileInitialState={profiles:[],error:""}

export const ProfileReducer=(state,action)=>{
    switch(action.type){
        case LOAD_PROFILES:
            return {
                ...state,
                profiles:action.payload,
                error:""
            }
        
        case THROW_ERROR:
            return {
                ...state,
                error:action.error,
                profile:""
            }
    }
}