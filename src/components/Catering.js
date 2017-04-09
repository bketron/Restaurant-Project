import React from 'react'
import {addEmail} from '../api/reservation'

var styles={
	container: {
		height: '400px',
		width: '100%',
		boxShadow: '0 0 50px rgba(125,125,125,0.1)',
		padding: '70px 300px',
		position: 'relative',
		top: '-9px'
	},
	question: {
		textAlign: 'center'
	},
	sorry: {
		textAlign: 'center'
	},
	para: {
		textAlign: 'center',
		padding: '0 100px'
	},
	input: {
		display: 'flex',
		flexDirection: 'column',
		width: '170px',
		margin: 'auto',
		marginTop: '35px'
	},
	button: {
		backgroundColor: '#59E4DF',
		color: '#366361',
		fontWeight: 'normal',
		fontFamily: 'Helvetica Neue',
		border: 'none',
		outline: 'none',
		height: '35px',
		fontSize: '13px'
	},
	textbox: {
		height: '35px',
		outline: 'none',
		padding: '0 10px',
		fontSize: '13px'
	}
}

export default React.createClass({
	getInitialState(){
		return {
			email: ''
		}
	},
	update(e) {
		this.setState({
			email: e.target.value
		})
	},
	handleSubmit(e) {
		addEmail(this.state.email)
		this.setState({
			email:''
		})
	},
	render() {
		return (
			<div id="cateringContainer" style={styles.container}>
				<p style={styles.question}>Interested in our catering options?</p>
				<h1 style={styles.sorry}>Sorry!</h1>
				<p style={styles.para}>We do not offer catering at this time, if you are interested in joining our mailing list please click the button below to sign up.</p>
				<div style={styles.input}>
					<input style={styles.textbox} onChange={this.update} name='email' type="email" placeholder="Your Email" value={this.state.email}></input>					
					<button style={styles.button} type="button">Sign Up</button>
				</div>
			</div>
		)
	}
})