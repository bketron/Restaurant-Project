import React from 'react'

var styles = {
	iconList: {
		listStyleType: 'none',
		display: 'flex',
		position: 'relative',
		top: '10px'
	},
	facebook: {
		fontSize: 20,
		backgroundColor: 'grey',
		height: '30px',
		width: '30px',
		borderRadius: '4px',
		textAlign: 'center',
		lineHeight: '30px',
		color: '#3B5998',
		margin: 3

	},
	twitter: {
		height: '30px',
		width: '30px',
		fontSize: 22,
		backgroundColor: 'grey',
		borderRadius: '4px',
		textAlign: 'center',
		lineHeight: '30px',
		color: '#1DA1F2',
		margin: 3
	},
	instagram: {
		height: '30px',
		width: '30px',
		backgroundColor: 'grey',
		borderRadius: '4px',
		paddingLeft: '5px',
		paddingTop: '5px',
		margin: 3
	},
	openTable: {
		height: '30px',
		width: '30px',
		backgroundColor: 'grey',
		borderRadius: '4px',
		padding: '3px 0 0 3px',
		margin: 3
	}
}

export default React.createClass({
	render() {
		return (
			<div>
				<ul style={styles.iconList}>
					<li id="facebook">
						<i style={styles.facebook} className="fa fa-facebook" aria-hidden="true"></i>
					</li>

					<li id="twitter">
						<i style={styles.twitter} className="fa fa-twitter" aria-hidden="true"></i>

					</li>

					<li id="instagram" style={styles.instagram}>
						<img id="instagramIcon" src={require('./assets/iconImages/instagram-512.png')} />
					</li>

					<li id="openTable" style={styles.openTable}>
						<img id="openTableIcon" src="https://components.otstatic.com/components/favicon/1.0.4/favicon/favicon-128.png" />
					</li>
				</ul>
			</div>
		)
	}
})