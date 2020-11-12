import { combineReducers, createStore } from "redux";
import { jokesReducer } from "./demo/reducer";
import { IBestJokes } from './demo/types'

export interface IRootState {
  demo: IBestJokes
}

const store = createStore<IRootState, any, any, any>(
  combineReducers({
    demo: jokesReducer
  })
)

export default store