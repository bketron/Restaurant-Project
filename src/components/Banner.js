import React from 'react'

var styles = {
	container: {
		height: '100px',
		width: '100%',
		position: 'fixed',
		backgroundColor: '#f2f2f2',
		display: 'flex',
		justifyContent: 'center',
		borderBottom: '1px solid rgba(125,125,125,0.2)',
		zIndex: '2',
		paddingTop: '10px',
		boxShadow: '0 0 20px rgba(0,0,0,0.1)' 
	},
	list1: {
		listStyleType: 'none',
		display: 'flex',
		padding: '0',
		margin: '0 10px 0 0',
		height: 80,
		lineHeight: '100px',
		position: 'relative',
		top: '-7px'
	},
	list2: {
		listStyleType: 'none',
		display: 'flex',
		padding: '0',
		margin: '0 0 0 40px',
		height: 80,
		lineHeight: '100px',
		position: 'relative',
		top: '-7px'
	},
	link: {
		color: 'black',
		margin: 0,
		textDecoration: 'none',
		margin: '0 10px',
		textTransform: 'uppercase',
		fontSize: '13px',
		fontWeight: 'bold',
		padding: '5px 0'
	},
	title: {
		color: 'black',
		fontSize: '50px',
		fontFamily: 'Great Vibes',
		lineHeight: '100px',
		margin: '0 30px',
		position: 'relative',
		top: '-6px'
	},
	titleBox: {
		height: '80px',
		border: '2px solid black'
	},
	titleCap: {
		backgroundColor: '#f2f2f2',
		color: 'black',
		position: 'relative',
		left: '137px',
		top: '-6px',
		height: '25px',
		margin: '0',
		padding: '0 5px',
		fontSize: '13px',
		textTransform: 'uppercase',
		fontWeight: 'bold'
	}
}

export default React.createClass({
	render() {
		return (
			<div style={styles.container}>
				<ul style={styles.list1}>
					<li className="bannerLink">
						<a style={styles.link} href="#">Our Story</a>
					</li>
					<li className="bannerLink">
						<a style={styles.link} href="#">Menu</a>
					</li>
					<li className="bannerLink">
						<a style={styles.link} href="#">Catering</a>
					</li>
				</ul>

					<p style={styles.titleCap}>Our</p>
				<div style={styles.titleBox}>
					<p style={styles.title}>Restaurant</p>
				</div>

				<ul style={styles.list2}>
					<li className="bannerLink">
						<a style={styles.link} href="#">News</a>
					</li>
					<li className="bannerLink">
						<a style={styles.link} href="#">Reservations</a>
					</li>
					<li className="bannerLink">
						<a style={styles.link} href="#">Directions</a>
					</li>
				</ul>

			</div>
		)
	}
})