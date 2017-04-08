import React from 'react'

var styles = {
	container: {
		width: '1425px',
		position: 'relative',
		top: '-4px',
		height: '510px',
		paddingTop: '35px',
	},
	heading: {
		margin: 0,
		color: 'white',
		fontWeight: 'bold',
		fontSize: '40px',
		textAlign: 'center',
		marginBottom: '30px'
	},
	infoSection: {
		display: 'flex'
	},
	picBox: {
		width: '300px',
		height: '300px',
		borderRadius: '50%',
		border: '10px solid #f0f0f0',
		boxShadow: 'inset 0 0 50px 10px rgba(0,0,0,0.3)'
	},
	text: {
		width: '700px',
		color: 'white',
		marginLeft: '60px',
		fontSize: '17px',
		marginTop: '0'
	},
	dropShadow: {
		height: '300px',
		width: '300px',
		borderRadius: '50%',
		marginLeft: '150px',
		boxShadow: '0 0 60px rgba(0,0,0,0.2)'
	}
}

export default React.createClass({
	render(){
		return (
			<div id="newsContainer" style={styles.container}>
				<p style={styles.heading}>Latest News!</p>

				<div style={styles.infoSection}>
					<div style={styles.dropShadow}>
						<div id="grandOpeningPic" style={styles.picBox}></div>
					</div>

					<p style={styles.text}>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi placeat inventore repudiandae ipsa sunt ab accusantium, ex nihil, odio quisquam at. Recusandae perspiciatis aliquid atque veritatis sapiente illo, autem vitae!
					</p>
				</div>
			</div>
		)
	}
	
})