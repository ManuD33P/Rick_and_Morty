// herramientas
import { createStore,applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk'

// funcion reducer
import reducer from "./reducer"


//store
const store = createStore(reducer,composeWithDevTools(applyMiddleware(thunk)));


export default store