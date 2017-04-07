import React from 'react'

var styles = {
	container: {
		float: 'right',
		marginLeft: '40px'
	},
	header: {
		marginTop: '0',
		fontStyle: 'italic',
		fontSize: '20px',
		marginBottom: '0px'
	},
	list: {
		listStyleType: 'none',
		padding: '0'
	},
	imageBox: {
		width: '240px',
		height: '250px',
		backgroundColor: 'grey',
		marginBottom: '35px'
	}
}

export default React.createClass({
	render() {
		return (
			<div style={styles.container}>
				<p style={styles.header}>Food Photos...</p>

				<ul style={styles.list}>
					<li style={styles.imageBox}>
						
					</li>
					<li style={styles.imageBox}>
						
					</li>
					<li style={styles.imageBox}>
						
					</li>
					<li style={styles.imageBox}>
						
					</li>
					<li style={styles.imageBox}>
						
					</li>
				</ul>
			</div>
		)
	}
})