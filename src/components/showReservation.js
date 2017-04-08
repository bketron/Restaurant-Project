import React from 'react'
import store from './store'
import {getUsers} from '../api/reservation'
import Reservation from './reservation'

export default React.createClass({
	getInitialState(){
		return{
			users: []
		}
	},
	componentWillMount(){
		this.unsubscribe = store.subscribe(()=>{
			const appState = store.getState()

			this.setState({
				users: appState.reservationReducer.users
			})
		})
		getUsers()
	},
	componentWillUnmount(){
		this.unsubscribe()
	},
	render(){
		return(
			<div>
				<ul>
					{this.state.users.map(user=>(
						<li key={'id' + user.id}>Thank you {user.name}, your reservation for {user.date} for {user.guests} people is confirmed {user.notes}</li>
					))}	
				</ul>
				<Reservation />
			</div>
		)
	}
})