import React from 'react'

var styles = {
	icon: {
		width: '20px',
		height: '20px',
		backgroundColor: 'black',
		color: 'white',
		textAlign: 'center',
		lineHeight: '20px',
		fontSize: '12px',
		margin: '0 3px',
		borderRadius: '3px'
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
					<a href="#"><i style={styles.icon} className="fa fa-fire" aria-hidden="true"></i></a>
				</div>
			)
		} else {
			return (
				<p></p>
			)
		}
	}
})