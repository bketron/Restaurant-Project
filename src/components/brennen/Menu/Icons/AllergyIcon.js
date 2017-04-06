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
	},
	link: {
		height: '15px'
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
					<a style={styles.link} href="#"><i style={styles.icon} className="fa fa-exclamation" aria-hidden="true"></i></a>
				</div>
			)
		} else {
			return (
				<p></p>
			)
		}
	}
})