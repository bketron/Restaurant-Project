import React from 'react'

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
		margin: 'auto'
	},
	button: {
		backgroundColor: 'red',
		color: 'white',
		fontWeight: 'bold',
		border: 'none',
		outline: 'none',
		height: '35px',
		marginTop: '40px'
	}
}

export default React.createClass({
	render() {
		return (
			<div id="cateringContainer" style={styles.container}>
				<p style={styles.question}>Interested in our catering options?</p>
				<h1 style={styles.sorry}>Sorry!</h1>
				<p style={styles.para}>We do not offer catering at this time, if you are interested in joining our mailing list please click the button below to sign up.</p>
				<div style={styles.input}>
					<button style={styles.button} type="button">Sign Up</button>
					<input type="email" placeholder="E-Mail address"></input>
				</div>
			</div>
		)
	}
})