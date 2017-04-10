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
					<a href="#"><i style={styles.icon} className="fa fa-star" aria-hidden="true"></i></a>
				</div>
			)
		} else {
			return (
				<div style={styles.empty}></div>
			)
		}
	}
})