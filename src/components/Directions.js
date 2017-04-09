import React from 'react'
import { Link } from 'react-router-dom' 

var styles = {
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
		margin:0,
		color: 'white'
	},
	phoneNum: {
		textAlign: 'center',
		margin:0,
		color: 'white'
	},
	link: {
		textDecoration: 'none'
	},
	info: {
		position: 'relative',
		top: '-65px'
	},
	info2: {
		display: 'flex',
		justifyContent: 'center'
	},
	icon: {
		color: 'white',
		fontSize: '6px',
		margin: '0 10px',
		lineHeight: '18px'
	}
}

export default React.createClass({
	render() {
		return (
			<div id="directionsMain">
				<div id="directionsParentContainer">
					<div id="directionsContainer" style={styles.container}>
						<div style={styles.info}>
							<p style={styles.question}>Need help getting here?</p>
							<h1 style={styles.header}>Restaurant Location</h1>

							<div style={styles.info2}>
								<p style={styles.address}>1112 S Casino Center Blvd, Las Vegas, NV 89104</p>
								<i style={styles.icon} className="fa fa-circle" aria-hidden="true"></i>
								<p style={styles.phoneNum}>(702) 560-6797</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
})