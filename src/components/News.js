import React from 'react'

var styles = {
	container: {
		backgroundColor: 'red',
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
		width: '400px',
		height: '300px',
		backgroundColor: 'white',
		marginLeft: '150px'
	},
	text: {
		width: '700px',
		color: 'white',
		marginLeft: '60px',
		fontSize: '17px',
		marginTop: '0'
	}
}

export default React.createClass({
	render(){
		return (
			<div style={styles.container}>
				<p style={styles.heading}>Latest News!</p>

				<div style={styles.infoSection}>
					<div style={styles.picBox}>

					</div>

					<p style={styles.text}>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi placeat inventore repudiandae ipsa sunt ab accusantium, ex nihil, odio quisquam at. Recusandae perspiciatis aliquid atque veritatis sapiente illo, autem vitae!
					</p>
				</div>
			</div>
		)
	}
	
})