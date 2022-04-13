

import { videogameReducer} from "../reducer/index";

import { createStore, applyMiddleware } from "redux"
import {composeWithDevTools} from "redux-devtools-extension"
import thunk from "redux-thunk"


let middleWares=[thunk]

let store=createStore(videogameReducer, composeWithDevTools(applyMiddleware(...middleWares)))

export {store}




/* import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from "redux-thunk";

import rootReducer from "../reducer";

export const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk)));
 */