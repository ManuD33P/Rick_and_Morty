import {
  ADD_FAVORITE,
  DEL_FAVORITE,
  ADD_LOGIN,
  ADD_ULTIMATE_ROUTE,
  FILTER_CHARACTERS,
  GET_FAVORITE
} from "./action-types";

export const initialState = {
  myFavorite: [],
  ultimateRoute: null,
  login: false,
  filterCharacters: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FAVORITE:
      return {
        ...state,
        myFavorite: [...state.myFavorite, payload],
      };
    case DEL_FAVORITE:
      return {
        ...state,
        myFavorite: state.myFavorite.filter(
          (element) => element.id !== payload
        ),
      };
    case GET_FAVORITE:
      return {
        ...state, myFavorite : payload
      }
    case ADD_LOGIN:
      return {
        ...state,
        login: payload,
      };
    case ADD_ULTIMATE_ROUTE:
      return {
        ...state,
        ultimateRoute: payload,
      };
      
    case FILTER_CHARACTERS:
      let characters;
      if (payload === "A" || payload === "D") {
        if (state.filterCharacters.length) {
          characters = [...state.filterCharacters];
        } else {
          characters = [...state.myFavorite];
        }

        characters.sort((a, b) => {
          if (payload === "A") return a.id - b.id;
          else return b.id - a.id;
        });
      } else {
        characters = [...state.myFavorite].filter(
          (character) => character.gender === payload
        );
      }
      return {
        ...state,
        filterCharacters: [...characters],
      };

    default:
      return { ...state };
  }
};

export default reducer;
