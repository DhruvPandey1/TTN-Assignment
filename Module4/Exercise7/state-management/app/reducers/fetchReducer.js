import { FETCH_INITIATE,FETCH_SUCCESS,FETCH_FAILURE } from "../actions/fetchAction";


const initialState={
    quotes:[],
    loading:false,
    error:null
}
const fetchReducer=(state=initialState,action)=>{
    switch(action.type){
        case FETCH_INITIATE:
            return{
                ...state,
                loading:true,
                error:null
            }
        
        case FETCH_SUCCESS:
            return{
                ...state,
                quotes:action.payload,
                loading:false,
                error:null
            }

        case FETCH_FAILURE:
            return{
                ...state,
                quotes:[],
                loading:false,
                error:action.payload
            }

        default:
            return state
    }
}

export default fetchReducer;