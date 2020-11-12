import { action } from 'typesafe-actions'
import { Constants } from './types'

export function addItemToList(joke: string) {
  return action(Constants.ADD_JOKE, {
    joke
  })
}