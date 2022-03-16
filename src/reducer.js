import * as actions from './actionType'
let lastId = 1;

 export const reducer = ( state = [], action) =>{

    if( action.type === actions.BUG_ADDED){

        return [
            ...state,
            {
                id: lastId++,
                description: action.payload.description,
                resolved: false
            }
        ]

    }else if( action.type === actions.BUG_REMOVED){

        return state.filter((elt) => elt.id !== action.payload.id)

    }else if(action.type === actions.BUG_RESOLVED){

        return state.map((elt) => { 
            if(elt.id === action.payload.id){
                return {...elt, resolved : true}
            }
        })
    }else{

        return state;

    }
}