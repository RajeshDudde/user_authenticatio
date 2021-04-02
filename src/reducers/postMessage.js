import {ACTION_TYPES} from "../actions/postMessage.js"
const initialstate={
    list:[]

}
export const postMessage=(state=initialstate,action)=>{
    switch(action.type)
    {
        case ACTION_TYPES.FETCH_All:
            return{
                ...state,
                list:[...action.payload]
            }
            default:
                 return  state;
    }
}