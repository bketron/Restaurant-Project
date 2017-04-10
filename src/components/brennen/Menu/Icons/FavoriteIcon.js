import React from 'react'

var styles = {
	icon: {
		height: '30px',
		width: '30px',
		margin: '0 4px',
		backgroundColor: '#e6e6e6',
		borderRadius: '50%',
		color: 'rgba(0,0,0,0.2)',
		textAlign: 'center',
		lineHeight: '30px',
		fontWeight: 'bold',
		fontSize: '16px',
		boxShadow: '0 0 10px rgba(0,0,0,0.2)',
	},
	empty: {
		display: 'none'
	}
} 

export default React.createClass({
	getDefaultProps() {
		favorite: ''
	},
	render() {
		if(this.props.favorite === 1){
			return (
				<div>
					<div className="favoriteIcon">
						<i style={styles.icon} className="fa fa-star" aria-hidden="true"></i>
					</div>
				
					
					<div className='favoriteInfo'>
						We have been doing this a long time and this item has become one of our favorites.
					</div>
				</div>
			)
		} else {
			return (
				<div style={styles.empty}></div>
			)
		}
	}
})