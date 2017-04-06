import {combineReducers, createStore} from 'redux'
import reservationReducer from './reducers/reservation'

const rootReducer = combineReducers({
	reservationReducer
})

const store = createStore(rootReducer)

export default store