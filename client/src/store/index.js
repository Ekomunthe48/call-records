import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import covidReducers from './reducers/covidReducers'

const rootReducer = combineReducers({
    covid19: covidReducers
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store