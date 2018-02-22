import { combineReducers } from 'redux'
import { update } from './actionsCreators'

var cryptoListReducer = function (state = [], action) {
  console.log('cryptoList was called with state', state, 'and action', action)

  switch (action.type) {
    case 'UPDATE':
      return [
        {
          ...state,
          cryptoList: action.cryptoList,
        }
      ]
    default:
      return state
  }
}

//var reducers = combineReducers({ cryptoList: cryptoListReducer })
var reducers = cryptoListReducer;
export default reducers;
