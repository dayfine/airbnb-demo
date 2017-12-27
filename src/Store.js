import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'

// Close
const CLOSE = 'CLOSE'

export const closeDisclaimer = () => ({ type: CLOSE })

function close (state = true, action) {
  switch (action.type) {
    case CLOSE:
      return false

    default:
      return state
  }
}

// Rest of Store
const rootReducer = combineReducers({
  showDisclaimer: close
})

const initialState = {}

let middlewares = [
  thunkMiddleware
]

const enhancers = compose(
    applyMiddleware(...middlewares)
  )

export default createStore(rootReducer, initialState, enhancers)
