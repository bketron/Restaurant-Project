import React from 'react'
import {addUser} from '../api/reservation'
import Form from './reservation'

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
		textAlign: 'center',
		fontFamily: 'Great Vibes',
		fontWeight: 'normal',
		fontSize: '50px',
		marginTop: '15px'
	},
	button: {
		height: '40px',
		padding: '0 15px',
		backgroundColor: '#59E4DF',
		color: 'black',
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
	},
	arrowCon:{

	},
	monthArrow: {
		position: 'relative',
		left: '290px',
		top: '-27px'
	},
	dayArrow: {
		position: 'relative',
		left: '337px',
		top: '-27px'
	},
	hourArrow: {
		position: 'relative',
		left: '410px',
		top: '-27px'
	},
	minArrow: {
		position: 'relative',
		left: '457px',
		top: '-27px'
	}
}

export default React.createClass({
	getInitialState(){
		return {
			name: '',
			guests: '',
			month: '',
			day: '',
			hour: '',
			min: '',
			notes: ''
		}
	},
	update(e) {
		this.setState({[e.target.name]: e.target.value})
	},
	handleSubmit(e) {
		e.preventDefault()
		addUser(this.state.name, this.state.guests, this.state.month, this.state.day, this.state.hour, this.state.min, this.state.notes)
		this.setState({
			name: '',
			guests: '',
			month: '',
			day: '',
			hour: '',
			min: '',
			notes: ''
		})
	},
	render() {
		return (
			<div style={styles.container}>

				<p style={styles.question}>Like what you see?</p>
				<h1 style={styles.title}>Make a Reservation!</h1>
				
				<Form />

			</div>
		)	
	}
})