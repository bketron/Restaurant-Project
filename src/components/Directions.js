import React from 'react'
import { Link } from 'react-router-dom' 

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
		color: 'white',
		fontFamily: 'Helvetica Neue , Helvetica'
	},
	header: {
		margin: 0,
		textAlign: 'center',
		color: 'white',
		fontFamily: 'Great Vibes',
		fontWeight: 'normal',
		fontSize: '50px',
		marginTop: '10px'
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
		color: 'black',
		border: 'none',
		outline: 'none',
		textAlign: 'center',
		width: '125px',
		cursor: 'pointer'
	},
	buttonCon: {
		display: 'flex',
		justifyContent: 'center'
	},
	link: {
		textDecoration: 'none'
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
					<a style={styles.link} href="https://www.google.com/maps/dir/''/the+iron+yard/@36.1583671,-115.222525,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x80c8c39ab244a1cb:0x1ffc3bc887ac02b9!2m2!1d-115.1524849!2d36.1583875">
					<button style={styles.button} type="button">Get Directions!</button>
					</a>
				</div>
			</div>
		)
	}
})