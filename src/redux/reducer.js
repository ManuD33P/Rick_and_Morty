import { ADD_FAVORITE,DEL_FAVORITE,ADD_LOGIN,ADD_ULTIMATE_ROUTE, FILTER_GENDER, FILTER_ID } from "./action-types"

export const initialState = {
 myFavorite: [],
 ultimateRoute: null,
 login: false,
 filterID: [],
 filterGender:[]
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
        case FILTER_GENDER:
            let filterGender = state.myFavorite.filter((element)=> element === payload)
            return {
                ...state, filterGender:[...filterGender]
            }

            case FILTER_ID:
                let filterID = [...state.myFavorite]
                if(payload === 'ascendente'){
                    filterID.sort((a,b)=> a.id-b.id )
                } else if(payload==='decendente'){
                 filterID.sort((a,b)=> b.id-a.id )
                }
                
                return {
                    ...state, filterID:[...filterID]
                }

        default: return { ...state }
     }

}

export default reducer