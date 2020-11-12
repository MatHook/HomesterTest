import { ActionType } from "typesafe-actions";
import * as actions from "./actions";

export interface IBestJokes {
  jokes: string[];
}

export enum Constants {
  ADD_JOKE = "ADD_JOKE",
}

export type JokeActions = ActionType<typeof actions>
