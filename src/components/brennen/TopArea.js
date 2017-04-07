import React from 'react'
import TopBar from './TopBar/TopBar'

var styles = {
	topBar: {
		width: '900px',
		borderBottom: '1px solid grey'
	},
	title: {
		fontSize: '70px',
		fontFamily: 'Tangerine, cursive',
		fontStyle: 'italic',
		margin: 0,

	},
	mainImage: {
		width: '900px',
		height: '250px',
		backgroundColor: 'black',
		marginTop: 20
	},
	infoBoxes: {
		width: '900px',
		display: 'flex',
		justifyContent: 'space-between',
		marginTop: '20px'
	},
	infoBox: {
		width: '280px',
		height: '220px',
		backgroundColor: 'grey',
		padding: '0 20px'
	},
	infoHeader: {
		width: '100%',
		borderBottom: '1px solid black',
		marginBottom: '5px'
	},
	headline: {
		display: 'flex',
		justifyContent: 'space-between'
	},
	headlineTitle: {
		fontWeight: 'bold',
		fontSize: '12px',
		margin: '0px',
		marginTop: '5px',
		fontStyle: 'italic'
	},
	headlineDate: {
		fontWeight: 'bold',
		fontSize: '12px',
		margin: '0px',
		marginTop: '5px',
		fontStyle: 'italic'
	},
	infoCaption: {
		fontSize: '12px',
		lineHeight: '20px'
	},
	specialPic: {
		width: '100%',
		height: '90px',
		backgroundColor: 'black',
		marginTop: '10px'
	},
	specialName: {
		marginBottom: '0',
		marginTop: '10px'
	},
	specialPrice: {
		marginBottom: '0',
		marginTop: '10px'
	},
	specialInfo: {
		display: 'flex',
		justifyContent: 'space-between',
		fontSize: '14px',
		fontWeight: 'bold'
	},
	specialDescription:{
		marginTop: '5px',
		height: '40px',
		overflow: 'hidden'
	},
	description: {
		textOverflow: 'clip',
		marginTop: '0px',
		fontSize: '12px'
	},
	infoAddress: {
		fontSize: '13px',
		textAlign: 'center'
	},
	infoList: {
		listStyleType: 'none',
		display: 'flex',
		padding: 0,
		justifyContent: 'center'
	},
	addressInfo: {
		fontSize: '11px',
		lineHeight: '15px',
		margin: '5px 4px'
	},
	dotSeperators: {
		fontSize: '4px',
		lineHeight: '15px'
	}
}
export default React.createClass({
	render() {
		return (
			<div>
				<TopBar />
			
				<div id="mainImage" style={styles.mainImage}></div>

				<div style={styles.infoBoxes}>
					<div className="infoBox" style={styles.infoBox}>
						<p style={styles.infoHeader}>Latest News</p>

						<div style={styles.headline}>
							<p style={styles.headlineTitle}>We've made a website!</p>
							<p style={styles.headlineDate}>April 6</p>
						</div>

						<p style={styles.infoCaption}>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et veniam quis enim? Expedita consectetur excepturi, saepe voluptatibus? Quaerat provident at mollitia autem quia. Maxime modi cum labore culpa delectus, aspernatur.
						</p>
					</div>

					<div className="infoBox" style={styles.infoBox}>
						<p style={styles.infoHeader}>Today's Special</p>

						<div style={styles.specialPic}></div>

						<div style={styles.specialInfo}>
							<p style={styles.specialName}>Name of Special</p>
							<p style={styles.specialPrice}>25</p>
						</div>

						<div style={styles.specialDescription}>
							<p style={styles.description}>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus praesentium doloremque officia vero expedita explicabo quos magni perferendis, at nobis repellendus unde dolor illum neque autem! Rem, cupiditate vel cum.
							</p>
						</div>
					</div>

					<div className="infoBox" style={styles.infoBox}>
						<p style={styles.infoHeader}>Our Location</p>

						<div style={styles.specialPic}></div>

						<p style={styles.infoAddress}>1112 S Casino Center Blvd, Las Vegas, NV 89104</p>	

						<ul style={styles.infoList}>
							<li>
								<p style={styles.addressInfo}>702-560-6797</p>
							</li>
							<li>
								<i style={styles.dotSeperators} className="fa fa-circle" aria-hidden="true"></i>
							</li>
							<li>
								<p style={styles.addressInfo}>Map</p>
							</li>
							<li>
								<i style={styles.dotSeperators} className="fa fa-circle" aria-hidden="true"></i>
							</li>
							<li>
								<p style={styles.addressInfo}>Directions</p>
							</li>
						</ul>					
					</div>
				</div>
			</div>
		)
	}
})