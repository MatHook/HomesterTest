import { Constants, IBestJokes, JokeActions } from "./types";

const initialState: IBestJokes = {
  jokes: [
    "Chuck Norris had to go pee, next thing you now the oceans were made",
  ],
};

export function jokesReducer(
  state: IBestJokes = initialState,
  action: JokeActions
): any {
  switch (action.type) {
    case Constants.ADD_JOKE:
      return {
        jokes: [...state.jokes, action.payload.joke],
      };
    default:
      return state;
  }
}
