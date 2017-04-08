import React from 'react'

var styles = {
	container: {
		height: '125px',
		backgroundColor: 'red',
		color: 'white',
		position: 'relative',
		top: '-9px',
		padding: '15px 0'
	},
	main: {
		borderTop: '1px solid rgba(0,0,0,0.6)'
	},
	iconList: {
		listStyleType: 'none',
		display: 'flex',
		justifyContent: 'center',
		padding: 0
	},
	facebook: {
		fontSize: '15px',
		color: 'white',
		position: 'relative',
		top: '4px',
		left: '7px'
	},
	twitter: {
		fontSize: '15px',
		color: 'white',
		position: 'relative',
		top: '4px',
		left: '5px'
	},
	instagram: {
		height: '12px',
		width: '12px',
		position: 'relative',
		top: '4px',
		left: '6px'
	},
	openTable: {
		height: '15px',
		width: '15px',
		position: 'relative',
		top: '5px',
		left: '5px'
	},
	icons: {
		height: '25px',
		width: '25px',
		backgroundColor: 'grey',
		borderRadius: '50%',
		margin: '5px'
	},
	connect: {
		margin: '10px 0 0 0',
		fontSize: '20px',
		textAlign: 'center'
	}
}

export default React.createClass({
	render() {
		return (
			<div style={styles.container}>

				<div style={styles.main}>
					<p style={styles.connect}>Check us out!</p>

					<ul style={styles.iconList}>
						<li style={styles.icons}>
							<i style={styles.facebook} className="fa fa-facebook" aria-hidden="true"></i>
						</li>

						<li style={styles.icons}>
							<i style={styles.twitter} className="fa fa-twitter" aria-hidden="true"></i>
						</li>

						<li style={styles.icons}>
							<img style={styles.instagram} id="instagramIcon" src={require('../assets/icon-images/instagram.png')} alt="#"/>
						</li>

						<li style={styles.icons}>
							<img  style={styles.openTable} id="openTableIcon" src={require('../assets/icon-images/opentable.png')} alt="#"/>
						</li>
						
					</ul>
				</div>

			</div>
		)
	}
})