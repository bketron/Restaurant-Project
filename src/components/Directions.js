import React from 'react'

var styles = {
	container: {
		height: '400px',
		width: '100%',
		position: 'relative',
		top: '-8px',
		paddingTop: '30px',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center'
	},
	question: {
		textAlign: 'center',
		margin: 0,
		color: 'white'
	},
	header: {
		margin: 0,
		textAlign: 'center',
		color: 'white'
	},
	address: {
		textAlign: 'center',
		margin: '25px 0 0 0',
		color: 'white'
	},
	phoneNum: {
		textAlign: 'center',
		margin: '0 0 25px 0',
		color: 'white'
	},
	button: {
		display: 'flex',
		justifyContent: 'center',
		height: '35px',
		backgroundColor: '#F2F2F2',
		color: 'red',
		border: 'none',
		outline: 'none',
		textAlign: 'center',
		width: '125px'
	},
	buttonCon: {
		display: 'flex',
		justifyContent: 'center'
	}
}

export default React.createClass({
	render() {
		return (
			<div id="directionsContainer" style={styles.container}>
				<p style={styles.question}>Need help getting here?</p>
				<h1 style={styles.header}>Restaurant Location</h1>

				<p style={styles.address}>1112 S Casino Center Blvd, Las Vegas, NV 89104</p>
				<p style={styles.phoneNum}>(702) 560-6797</p>

				<div style={styles.buttonCon}>
					<button style={styles.button} type="button">Get Directions!</button>
				</div>
			</div>
		)
	}
})