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
		allergies: ''
	},
	render() {
		if(this.props.allergies === 1){
			return (
				<div>
					<div className="allergyIcon">
						<i style={styles.icon} className="fa fa-exclamation" aria-hidden="true"></i>
					</div>
				
					
					<div className='allergyInfo'>
						This item may contain shellfish or another item that some people may be allergic to. Please ask your waiter or waitress for assistance.
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