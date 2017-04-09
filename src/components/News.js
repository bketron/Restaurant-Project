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
		fontSize: '50px',
		textAlign: 'center',
		fontFamily: 'Great Vibes',
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
		width: '600px',
		color: 'white',
		marginLeft: '130px',
		fontSize: '17px',
		marginTop: '20px',
	},
	dropShadow: {
		height: '300px',
		width: '300px',
		borderRadius: '50%',
		marginLeft: '150px',
		boxShadow: '0 0 60px rgba(0,0,0,0.2)',
	},
	icon: {
		fontSize: '12px',
		color: '#02423f',
		fontWeight: 'lighter'
	},
	readmore: {
		marginLeft: '350px',
		textAlign: 'center',
		color: '#02423f',
		backgroundColor: 'white',
		textDecoration: 'none',
		fontSize: '12px',
		fontWeight: 'lighter',
		padding: '5px 7px',
		fontFamily: 'system-ui'
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

					<div>
						<p style={styles.text}>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi placeat inventore repudiandae ipsa sunt ab accusantium, ex nihil, odio quisquam at. Recusandae perspiciatis aliquid atque veritatis sapiente illo, autem vitae!
						</p>

						<a style={styles.readmore} href="">Read More <i className="fa fa-angle-right" aria-hidden="true"></i>
</a>
					</div>
				</div>
			</div>
		)
	}
	
})