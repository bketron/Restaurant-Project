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
		spicy: ''
	},
	render() {
		if(this.props.spicy === 1){
			return (
				<div>
					<div className="spicyIcon">
						<i style={styles.icon} className="fa fa-fire" aria-hidden="true"></i>
					</div>
				
					
					<div className='spicyInfo'>
						This item is spicy, please handle with care and drink lots of water.
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