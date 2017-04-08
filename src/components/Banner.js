import React from 'react'

var styles = {
	container: {
		height: '75px',
		width: '100%',
		position: 'fixed',
		backgroundColor: '#efefef',
		display: 'flex',
		justifyContent: 'center',
		borderBottom: '1px solid black',
		zIndex: '2'
	},
	list: {
		listStyleType: 'none',
		display: 'flex',
		padding: '0',
		margin: 0,
		height: 75,
		lineHeight: '75px'
	},
	link: {
		color: 'red',
		margin: 0,
		textDecoration: 'none',
		margin: '0 10px'
	},
	title: {
		color: 'red',
		fontSize: '30px',
		lineHeight: '75px',
		margin: '0 25px',
		height: 75
	}
}

export default React.createClass({
	render() {
		return (
			<div style={styles.container}>
				<ul style={styles.list}>
					<li>
						<a style={styles.link} href="#">Our Story</a>
					</li>
					<li>
						<a style={styles.link} href="#">Menu</a>
					</li>
					<li>
						<a style={styles.link} href="#">Catering</a>
					</li>
				</ul>

				<p style={styles.title}>Restaurant</p>

				<ul style={styles.list}>
					<li>
						<a style={styles.link} href="#">News</a>
					</li>
					<li>
						<a style={styles.link} href="#">Reservations</a>
					</li>
					<li>
						<a style={styles.link} href="#">Directions</a>
					</li>
				</ul>

			</div>
		)
	}
})