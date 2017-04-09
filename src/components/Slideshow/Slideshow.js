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
	photoList: {
		listStyleType: 'none',
		display: 'flex',
		padding: 0,
		margin: 0,
		width: '1425px',
		overflow: 'hidden',
		position: 'relative',
		left: '372px'
	},
	image: {
		maxHeight: '450px'
	},
	leftButton: {
		position: 'relative',
		top: '-454px',
		background: 'none',
		outline: 'none',
		border: 'none',
		height: '450px',
		width: '80px',
		backgroundColor: 'rgba(255,255,255,0.4)',
		padding: '0 20px'
	},
	rightButton: {
		position: 'relative',
		top: '-454px',
		left: '800px',
		background: 'none',
		outline: 'none',
		border: 'none',
		height: '450px',
		width: '80px',
		backgroundColor: 'rgba(255,255,255,0.4)',
		padding: '0 20px',
		zIndex: '2'

	},
	icon: {
		fontSize: '40px',
		color: 'white'
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

				<button style={styles.leftButton}type="button"><i style={styles.icon} className="fa fa-chevron-circle-left" aria-hidden="true"></i>
</button>
				<button style={styles.rightButton}type="button"><i style={styles.icon} className="fa fa-chevron-circle-right" aria-hidden="true"></i>
</button>
			</div>
		)
	}
})