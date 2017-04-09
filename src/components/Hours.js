import React from 'react'

var styles = {
	container: {
		height: '650px',
		width: '100%',
		paddingTop: '250px'
	},
	title: {
		color: 'white',
		fontFamily: 'Great Vibes',
		fontSize: '70px',
		borderBottom: '4px solid #59E4DF',
		margin: 'auto',
		marginBottom: '30px',
		width: '317px'
	},
	list: {
		display: 'flex',
		justifyContent: 'center',
		padding: 0,
		border: '2px dashed rgba(89, 228, 223, 0.5)',
		width: '470px',
		margin: 'auto',
		height: '60px'
	},
	heading: {
		color: 'white',
		margin: 0,
		fontWeight: 'bold',
		fontSize: '15px',
		marginTop: '10px'
	},
	times: {
		color: 'white',
		margin: 0,
		fontSize: '12px'
	},
	listItem: {
		textAlign: 'center',
		margin: '0 15px'
	}
}

export default React.createClass({
	render() {
		return (
			<div style={styles.container} id="bisHoursSection">

				<p style={styles.title}>We're Open!</p>
				<ul style={styles.list}>
					<li style={styles.listItem}>
						<h1 style={styles.heading}>Lunch</h1>
						<p style={styles.times}>11 am - 2:30 pm</p>
					</li>

					<li style={styles.listItem}>
						<h1 style={styles.heading}>Afternoon</h1>
						<p style={styles.times}>2:30 pm - 5 pm</p>
					</li>

					<li style={styles.listItem}>
						<h1 style={styles.heading}>Dinner</h1>
						<p style={styles.times}>5 pm - 11 pm</p>
					</li>

					<li style={styles.listItem}>
						<h1 style={styles.heading}>Late Night</h1>
						<p style={styles.times}>11 pm - 2 am</p>
					</li>
				</ul>

			</div>
		)
	}
})