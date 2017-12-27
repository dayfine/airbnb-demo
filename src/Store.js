import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'

// function close (state, action) {
//   if (typeof state === 'undefined') {
//     return initialState
//   }

//   return state
// }

const rootReducer = combineReducers({

})

const initialState = {
  showDisclaimer: true
}

let middlewares = [
  thunkMiddleware
]

const enhancers = compose(
    applyMiddleware(...middlewares)
  )

export default createStore(rootReducer, initialState, enhancers)
