import React from 'react'

var styles = {
	container: {
		height: '125px',
		backgroundColor: '#e6e6e6',
		color: 'white',
		position: 'relative',
		top: '-9px',
		padding: '15px 0'
	},
	main: {
		borderTop: '1px solid rgba(0,0,0,0.1)'
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
		left: '8px'
	},
	twitter: {
		fontSize: '15px',
		color: 'white',
		position: 'relative',
		top: '4px',
		left: '7px'
	},
	instagram: {
		height: '12px',
		width: '12px',
		position: 'relative',
		top: '4px',
		left: '7px'
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
		backgroundColor: 'rgba(125,125,125,0.1)',
		boxShadow: '0 1px 1px 1px rgba(0,0,0,0.2)',
		borderRadius: '50%',
		margin: '5px'
	},
	footerText: {
		color: 'rgba(0,0,0,0.2)',
		textAlign: 'center',
		padding: '0 350px',
		fontSize: '11px',
		marginTop: '25px'
	}
}

export default React.createClass({
	render() {
		return (
			<div style={styles.container}>

				<div style={styles.main}>

					<ul style={styles.iconList}>
						<li style={styles.icons}>
							<a href="#" alt="Our Facebook page">
								<i style={styles.facebook} className="fa fa-facebook" aria-hidden="true"></i>
							</a>
						</li>

						<li style={styles.icons}>
							<a href="#" alt="Our Twitter page">
								<i style={styles.twitter} className="fa fa-twitter" aria-hidden="true"></i>
							</a>
						</li>

						<li style={styles.icons}>
							<a href="#">
								<img style={styles.instagram} id="instagramIcon" src={require('../assets/icon-images/instagram.png')} alt="Our Instagram"/>
							</a>
						</li>

						<li style={styles.icons}>
							<a href="#" alt="Our Open Table page">
								<img  style={styles.openTable} id="openTableIcon" src={require('../assets/icon-images/opentable.png')} alt="Our Open Table page"/>
							</a>
						</li>
						
					</ul>

					<p style={styles.footerText}>
						Restaurant © 2016 | Website by Brett & Brennen @ TheIronYard | All to-go items will reflect a service charge for packaging materials | An 18% gratuity will be added to any party of 8 or more
					</p>
				</div>

			</div>
		)
	}
})