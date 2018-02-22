import { createStore, applyMiddleware, combineReducers} from 'redux'
import * as reducers from './reducers'
import promiseMiddleware from './promiseMiddleware'


let cryptoStore = createStore(reducers)


export default function(data) {
  var reducer = combineReducers(reducers)
  var finalCreateStore = applyMiddleware(promiseMiddleware)(createStore)
  var store = finalCreateStore(reducer, data)

  return store
}
