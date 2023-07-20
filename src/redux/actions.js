import { ADD_FAVORITE,DEL_FAVORITE,ADD_LOGIN,ADD_ULTIMATE_ROUTE,FILTER_GENDER,FILTER_ID } from "./action-types";



export const addFavorite=(character)=>{
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

export const filterGender = (filter) => {

    return {
        type: FILTER_GENDER,
        payload: filter
    }
}

export const filterId = (order) => {
    return {
        type: FILTER_ID,
        payload:order
    }
}