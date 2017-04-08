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