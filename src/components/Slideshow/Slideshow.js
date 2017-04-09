import React from 'react'

var styles = {
	container: {
		width: '1425px',
		height: '450px',
		backgroundColor: 'black',
		overflow: 'hidden',
		position: 'relative',
		top: '-8px'
	},
	title: {
		position: 'relative',
		top: '-800px',
		color: '#66fff9',
		fontSize: '55px',
		fontFamily: 'Great Vibes',
		textAlign: 'center'
	},
	photoList: {
		listStyleType: 'none',
		display: 'flex',
		padding: 0,
		margin: 0,
		width: '1425px',
		overflow: 'hidden',
	},
	image: {
		maxHeight: '450px'
	},
	leftButton: {
		display: 'none',
		position: 'relative',
		top: '-454px',
		background: 'none',
		outline: 'none',
		border: 'none',
		height: '450px',
		width: '100px',
		backgroundColor: 'rgba(255,255,255,0.2)',
		padding: '0 20px'
	},
	rightButton: {
		display: 'none',
		position: 'relative',
		top: '-454px',
		left: '1225px',
		background: 'none',
		outline: 'none',
		border: 'none',
		height: '450px',
		width: '100px',
		backgroundColor: 'rgba(255,255,255,0.2)',
		padding: '0 20px',
		zIndex: '2'

	},
	icon: {
		fontSize: '30px',
		color: 'white'
	},
	shadow: {
		width: '1425px',
		height: '450px',
		backgroundColor: 'rgba(0,0,0,0.8)',
		position: 'relative',
		top: '-454px'
	}
}

export default React.createClass({
	render() {
		return (
			<div style={styles.container}>
				<ul style={styles.photoList}>
					<li>
						<img style={styles.image} src={require('../../assets/food-images/Ribeye.jpg')} />
					</li>

					<li>
						<img style={styles.image} src={require('../../assets/food-images/scallops.jpg')} />
					</li>

					<li>
						<img style={styles.image} src={require('../../assets/food-images/porkchop.jpg')} />
					</li>

					<li>
						<img style={styles.image} src={require('../../assets/food-images/Grilled-Ostrich-Fillet.jpeg')} />
					</li>
				</ul>

				<button style={styles.leftButton}type="button"><i style={styles.icon} className="fa fa-chevron-left" aria-hidden="true"></i></button>
				<button style={styles.rightButton}type="button"><i style={styles.icon} className="fa fa-chevron-right" aria-hidden="true"></i></button>

				<div style={styles.shadow}></div>

				<div>
					<p style={styles.title}>Photos</p>
				</div>
			</div>
		)
	}
})