import * as actions from '../actions/actionTypes';

const intialState = {
    serachString: "",
    result:[],
    previousResult:[]
}; 

const searchReducer = ( state = intialState, action) => {
    switch(action.type){
        case actions.search:
            return {
                ...state, serachString: action.payload, result: []
            };
        case actions.savesearch:
            return {
                ...state, previousResult: [...state.previousResult, action.payload] , result: []
            }
        case actions.saveresult:
            return {
                ...state, result: [...state.result,  ...action.payload]
            }
        default: return state;
    }
};

export default searchReducer;