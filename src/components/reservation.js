import React from 'react'
import {addUser} from '../api/reservation'
import Date from './reservation-date'

var styles = {
	input: {
		height: '30px',
		margin: '5px',
		padding: '0 10px',
		outline: 'none'
	},
	form: {
		display: 'flex',
		flexDirection: 'column',
		padding: '0 150px',
	},
	button: {
		height: '30px',
		backgroundColor: 'red',
		border: 'none',
		outline: 'none',
		margin: '5px',
		color: 'white',
		fontWeight: 'bold',
		fontSize: '13px',
		width: '150px',
		textAlign: 'center',
		margin: 'auto'
	},
	botLine: {
		display: 'flex',
		justifyContent: 'space-between'
	}
}

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
			<form style={styles.form} onSubmit={this.handleSubmit}>
				<input style={styles.input} onChange={this.update} type='text' name='name' placeholder='Name' value={this.state.name} />
				<input style={styles.input} onChange={this.update} type='text' name='guests' placeholder='Number of People (max 12)' value={this.state.guests} />
				<input style={styles.input} onChange={this.update} type='text' name='notes' placeholder='Special Requests' value={this.state.notes} />

				<div style={styles.botLine}>
					<Date />
					<button type='submit' style={styles.button} >Confirm Reservation</button>
				</div>
			</form>
		)
	}
})

