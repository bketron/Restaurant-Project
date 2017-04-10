import React from 'react'
import News from './news.json'

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
	},
	infoSection: {
		display: 'flex'
	},
	picBox: {
		width: '350px',
		height: '350px',
		borderRadius: '50%',
		border: '10px solid #f0f0f0',
		boxShadow: 'inset 0 0 50px 10px rgba(0,0,0,0.3)',
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
		top: '-40px'
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
	},
	newsHeading: {
		display: 'flex',
		width: '357px',
		marginLeft: '185px',
		color: 'white',
		display: 'flex',
		borderBottom: '3px solid white',
		paddingBottom: '4px'
	},
	title: {
		margin: 0,
		color: '#366361',
		fontFamily: 'Raleway, sans-serif',
		fontWeight: '800',
		textTransform: 'uppercase',
		fontSize: '19px'

	},
	date: {
		margin: 0,
		textTransform: 'uppercase',
		fontSize: '12px',
		position: 'relative',
		top: '7px',
		marginLeft: '3px'
	},
	article: {
		margin: 0
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
							<div>
							<div style={styles.newsHeading}>

								<p style={styles.title}>{News.title}</p>
								<p style={styles.date}>- {News.date_published}</p>
							
							</div>
								<p id="newsTextBox">{News.post}</p>
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