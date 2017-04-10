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
	},
	empty: {
		display: 'none'
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
					<div className="veganIcon">
						V
					</div>
				
					
					<div className='veganInfo'>
						This item contains no meat and has been prepared without the use of animal products.
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