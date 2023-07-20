import { ADD_FAVORITE,DEL_FAVORITE,ADD_LOGIN,ADD_ULTIMATE_ROUTE } from "./action-types"

export const initialState = {
 myFavorite: [],
 ultimateRoute: null,
 login: false
}

const reducer = (state=initialState,{type,payload}) => {
     switch(type){
        case ADD_FAVORITE:
            return {
                ...state, myFavorite: [...state.myFavorite,payload]
            }
        case DEL_FAVORITE:
            return {
                ...state, myFavorite: state.myFavorite.filter(element=> element.id !== payload)
            }
        case ADD_LOGIN:
            return {
                ...state, login : payload
            }
        case ADD_ULTIMATE_ROUTE:
            return {
                ...state, ultimateRoute:payload
            }
        default: return { ...state }
     }

}

export default reducer