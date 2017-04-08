import React from 'react'
import {addUser} from '../api/reservation'

var styles = {
	container: {
		height: '500px',
		width: '100%',
		backgroundColor: '#F0F0F0',
		padding: '70px 300px',
		position: 'relative',
		top: '-9px'
	},
	question: {
		textAlign: 'center',
		margin: 0
	},
	title: {
		textAlign: 'center'
	},
	button: {
		height: '40px',
		padding: '0 15px',
		backgroundColor: 'red',
		color: 'white',
		fontSize: '16px',
		fontWeight: 'bold',
		border: 'none',
		outline: 'none',
		margin: 'auto'
	},
	form: {
		display: 'flex',
		flexDirection: 'column',
		width: '350px',
		backgroundColor: 'white',
		justifyContent: 'center',
		margin: 'auto'
	},
	submit: {
		backgroundColor: 'red',
		color: 'white',
		fontWeight: 'bold',
		fontSize: '14px',
		height: '30px',
		border: 'none',
		outline: 'none'
	},
	formCon: {
		display: 'flex',
		justifyContent: 'center',
		flexDirection: 'column'
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
		e.preventDefault()
		addUser(this.state.name, this.state.guests, this.state.date, this.state.notes)
		this.setState({
			name: '',
			guests: '',
			date: '',
			notes: ''
		})
	},
	render() {
		return (
			<div style={styles.container}>

				<p style={styles.question}>Like what you see?</p>
				<h1 style={styles.title}>Make a Reservation!</h1>

				<div style={styles.formCon}>
					<button style={styles.button}type="button">Reserve a Table</button>

					<form style={styles.form} onSubmit={this.handleSubmit}>
						<input style={styles.name} className="formInput" onChange={this.update} type='text' name='name' placeholder='Name' value={this.state.name} />
						<input style={styles.numGuests} className="formInput" onChange={this.update} type='text' name='guests' placeholder='Number of People' value={this.state.guests} />
						<input style={styles.date} className="formInput" onChange={this.update} type='text' name='date' placeholder='Date' value={this.state.date} />
						<input style={styles.requests} className="formInput" onChange={this.update} type='text' name='notes' placeholder='Special Requests' value={this.state.notes} />
						<button style={styles.submit} type='submit'>Submit Reservation!</button>
					</form>
				</div>
			</div>
		)	
	}
})