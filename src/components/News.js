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
		fontSize: '55px',
		textAlign: 'center',
		fontFamily: 'Great Vibes',
		marginBottom: '30px',
		marginTop: '20px'
	},
	infoSection: {
		display: 'flex'
	},
	picBox: {
		width: '350px',
		height: '350px',
		borderRadius: '50%',
		border: '10px solid #f0f0f0',
		boxShadow: 'inset 0 0 50px 10px rgba(0,0,0,0.3)'
	},
	text: {
		width: '600px',
		color: 'white',
		marginLeft: '130px',
		fontSize: '18px',
		marginTop: '20px',
		textAlign: 'center'
	},
	dropShadow: {
		height: '350px',
		width: '350px',
		borderRadius: '50%',
		marginLeft: '150px',
		boxShadow: '0 0 60px rgba(0,0,0,0.2)',
		position: 'relative',
		top: '-70px'
	},
	icon: {
		fontSize: '12px',
		color: '#02423f',
		fontWeight: 'lighter'
	},
	readmore: {
		marginLeft: '390px',
		textAlign: 'center',
		color: '#02423f',
		backgroundColor: 'white',
		textDecoration: 'none',
		fontSize: '12px',
		fontWeight: 'lighter',
		padding: '7px 15px',
		fontFamily: 'system-ui'
	}
}

export default React.createClass({
	render(){
		return (
			<div>
				<a name='news'></a>
				<div id="newsContainer" style={styles.container}>
					<p style={styles.heading}>Latest News!</p>

					<div style={styles.infoSection}>
						<div style={styles.dropShadow}>
							<div id="grandOpeningPic" style={styles.picBox}></div>
						</div>

						<div>
							<div id="newsTextBox">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem deleniti eos ad corporis, ullam sint minus! Natus ipsa, praesentium minus voluptates incidunt adipisci quaerat cupiditate expedita ex nesciunt ratione architecto!
								Dolorem esse, eius neque adipisci nesciunt quo reprehenderit nihil facere cumque maiores libero dolor, numquam, itaque iusto quibusdam? Vel, suscipit reprehenderit alias perspiciatis molestiae dignissimos assumenda qui officia non nam!
								Expedita repellat esse ea, soluta culpa voluptatum vero voluptates architecto facilis nam inventore molestiae itaque, et dignissimos laborum autem rerum saepe! Quasi fugit dolore, inventore unde at dolorem iure consequuntur.
								Voluptatum possimus nam impedit autem ipsa architecto commodi quibusdam corrupti sapiente provident maiores, cum velit veniam quae dolorum nihil sed nisi odio aut numquam. Ratione, dolore sint. Nesciunt, pariatur, laudantium.
								Debitis tempore aut sint dolorum tenetur necessitatibus perferendis et ipsum, accusamus voluptate fugiat quos suscipit placeat veniam soluta harum sed odit ipsam, officiis saepe. Quos praesentium minima excepturi rem nisi.
							</div>	

							<a style={styles.readmore} href="">Read More <i className="fa fa-angle-right" aria-hidden="true"></i>
	</a>
						</div>
					</div>
				</div>
			</div>
		)
	}
	
})