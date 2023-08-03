import { ADD_FAVORITE,DEL_FAVORITE,ADD_LOGIN,ADD_ULTIMATE_ROUTE,FILTER_CHARACTERS,GET_FAVORITE} from "./action-types";



export const addFavorite= async (character)=>{
    
    return{ 
        type:ADD_FAVORITE,
        payload:character
    }
}

export const delFavorite = (id) => {
    return {
        type: DEL_FAVORITE,
        payload:id
    }
}

export const addLogin = (boolean) => {
    return {
        type: ADD_LOGIN,
        payload:boolean
    }
}

export const addUltimateRoute = (date) => {
    return {
        type: ADD_ULTIMATE_ROUTE,
        payload:date
    }
}

export const filterCharacters = (filter) => {

    return {
        type: FILTER_CHARACTERS,
        payload: filter
    }
}
export const getFavorite = (favorites) => {

    return {
        type:GET_FAVORITE,
        payload:favorites
    }
}