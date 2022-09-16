import { combineReducers } from "redux";
import { board } from './board';
import { players } from "./players";
import { result } from "./result";

export default combineReducers({
  board,
  players,
  result,
})