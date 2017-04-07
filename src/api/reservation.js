import axios from 'axios'
import store from '../components/store'

export function getUsers() {
	axios.get('http://localhost:3001/users').then(res=>{
		store.dispatch({
			type: 'GET_USERS',
			users: res.data
		})
	})
}

export function addUser(name, guests, date, notes){
	axios.post('http://localhost:3001/users', {
		name, guests, date, notes
	}).then(res=>{
		getUsers()
	})
}