import { GET_ITEM, SWITCH_MODE } from "./actioType"



export const getSwitchModeToggle = ()=>{
    return {
        type :SWITCH_MODE 
    }
}
export const getItemObj = (payload)=>{
    return {
        type :GET_ITEM ,
        payload:payload
    }
}