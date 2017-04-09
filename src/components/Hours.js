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
		maxWidth: '347px'
	},
	list: {
		display: 'flex',
		justifyContent: 'center',
		padding: 0,
		border: '2px dashed rgba(89, 228, 223, 0.5)',
		width: '400px',
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
	openClose() {
		var verdict = "We're Closed."
		var date = new Date()
		var currentHour = date.getHours()
		var currentMin = date.getMinutes()

		var currentTime = currentHour + ": " + currentMin

		if(currentHour >= 11 && currentHour <= 23){
			verdict = "We're Open!"
		}

		return verdict

	},
	render() {
		return (
			<div style={styles.container} id="bisHoursSection">
				{console.log(this.openClose())}
				<p style={styles.title}>{this.openClose()}</p>
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
				</ul>

			</div>
		)
	}
})