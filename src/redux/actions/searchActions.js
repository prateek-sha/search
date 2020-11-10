import * as actions from './actionTypes'

  export const  search = (sentence) => {
  return {type: actions.search, payload: sentence}
  }

export const saveresult = (result) => {
  return {type: actions.saveresult, payload: result}
}

  export const savesearch = (sentence) => {
    return {type: actions.savesearch, payload: sentence}
  }
  

