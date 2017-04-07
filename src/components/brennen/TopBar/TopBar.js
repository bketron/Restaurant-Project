import React from 'react'
import SocialLinks from './SocialLinks'

var styles = {
	topBar: {
		width: '900px',
		borderBottom: '1px solid grey',
		display: 'flex',
		justifyContent: 'space-between'
	},
	title: {
		fontSize: '70px',
		fontFamily: 'Tangerine, cursive',
		fontStyle: 'italic',
		margin: 0,

	}

}

export default React.createClass({
	render() {
		return (
			<div style={styles.topBar}>
				<p style={styles.title}>Restaurant</p>

				<SocialLinks />
			</div>
		)
	}
})