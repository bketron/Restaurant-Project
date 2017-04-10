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

export function addUser(name, guests, notes, date){
	axios.post('http://localhost:3001/users', {
		name, guests, notes, date
	}).then(res=>{
		getUsers()
	})
}

export function getEmail() {
	axios.get('http://localhost:3001/email').then(res=>{
		store.dispatch({
			type: 'GET_EMAIL',
			users: res.data
		})
	})
}

export function addEmail(email){
	axios.post('http://localhost:3001/email', {
		email
	}).then(res=>{
		getUsers()
	})
}