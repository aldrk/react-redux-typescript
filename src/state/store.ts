import {applyMiddleware, createStore, combineReducers} from "redux"
import thunk from "redux-thunk"
import {userReducer} from "./reducers/user"

const rootReducer = combineReducers({
  user: userReducer
})

export type State = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunk))