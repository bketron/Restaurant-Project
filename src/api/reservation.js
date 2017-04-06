import axios from 'axios'
import store from '../components/store'

export function addReservation(name, guests, date) {
	axios.post('http://localost:3001/reservation', {
		name, guests, date
	}).then(data=>{
		store.dispatch({
			type: 'ADD_RESERVATION',
		})
	})
}