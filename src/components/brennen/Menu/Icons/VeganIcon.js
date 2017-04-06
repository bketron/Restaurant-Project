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
		textDecoration: 'none'
	}
} 

export default React.createClass({
	getDefaultProps() {
		vegan: ''
	},
	render() {
		if(this.props.vegan === 1){
			return (
				<div>
					<a href="#" style={styles.link}><p style={styles.icon}>V</p></a>
				</div>
			)
		} else {
			return (
				<p></p>
			)
		}
	}
})