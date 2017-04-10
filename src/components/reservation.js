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
		backgroundColor: '#59E4DF',
		border: 'none',
		outline: 'none',
		margin: '5px',
		color: '#366361',
		fontWeight: 'normal',
		fontFamily: 'Helvetica Neue',
		fontSize: '13px',
		width: '150px',
		textAlign: 'center',
		margin: 'auto',
		cursor: 'pointer'
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
			notes: '',
			date: ''
		}
	},
	update(e) {
		this.setState({[e.target.name]: e.target.value})
	},
	handleSubmit(e) {
		e.preventDefault()
		addUser(this.state.name, this.state.guests, this.state.notes, this.state.date)
		this.setState({
			name: '',
			guests: '',
			notes: '',
			date: ''
		})
	},
	render(){
		return(
			<div>
				<a name='reservations'></a>
				<form style={styles.form} onSubmit={this.handleSubmit}>
					<input style={styles.input} onChange={this.update} type='text' name='name' placeholder='Name' value={this.state.name} />
					<input style={styles.input} onChange={this.update} type='number' name='guests' placeholder='Number of People (max 12)' value={this.state.guests} />
					<input style={styles.input} onChange={this.update} type='text' name='notes' placeholder='Special Requests' value={this.state.notes} />
					<input style={styles.input} onChange={this.update} type='date' name='date' placeholder='date' value={this.state.date} />
					<div style={styles.botLine}>
						
						<button type='submit' style={styles.button} >Confirm Reservation</button>
					</div>
				</form>
			</div>
		)
	}
})

