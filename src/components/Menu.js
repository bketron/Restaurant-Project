import React from 'react'
import Menu from './brennen/Menu/menu'

var styles = {
	container: {
		position: 'relative',
		top: '-8px',
		backgroundColor: '#f2f2f2'
	},
	headCon: {
		borderBottom: '2px solid rgba(0,0,0,0.05)',
	},
	header: {
		fontSize: '40px',
		color: 'black',
		textAlign: 'center',
		height: '120px',
		position: 'relative',
		top: '4px',
		lineHeight: '120px',
		margin: '0',
		}
}

export default React.createClass({
	render() {
		return (
			<div style={styles.container}>
				<div style={styles.headCon}>
					<p style={styles.header}>Menu</p>
				</div>

				<Menu />
			</div>
		)
	}
})