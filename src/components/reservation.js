import React from 'react'
import {addUser} from '../api/reservation'

export default React.createClass({
	getInitialState(){
		return {
			name: '',
			guests: '',
			date: '',
			notes: ''
		}
	},
	update(e) {
		this.setState({[e.target.name]: e.target.value})
	},
	handleSubmit(e) {
		e.preventDefault
		addUser(this.state.name, this.state.guests, this.state.date, this.state.notes)
	},
	render(){
		return(
			<form onSubmit={this.handleSubmit}>
				<input onChange={this.update} type='text' name='name' placeholder='Name' value={this.state.name} />
				<input onChange={this.update} type='text' name='guests' placeholder='Number of People' value={this.state.guests} />
				<input onChange={this.update} type='text' name='date' placeholder='Date' value={this.state.date} />
				<input onChange={this.update} type='text' name='notes' placeholder='Special Requests' value={this.state.notes} />
				<button type='submit'>Reserve Table</button>
			</form>
		)
	}
})

