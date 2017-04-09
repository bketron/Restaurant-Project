import React from 'react'
import ShowPhoto from './ShowPhoto'

var photos = require('./slideData.js')

var styles = {
	container: {
		width: '1425px',
		height: '650px',
		backgroundColor: 'black',
		overflow: 'hidden',
		position: 'relative',
		top: '-8px'
	},
	title: {
		position: 'relative',
		top: '-800px',
		color: '#66fff9',
		fontSize: '55px',
		fontFamily: 'Great Vibes',
		textAlign: 'center'
	},
	photoList: {
		listStyleType: 'none',
		display: 'flex',
		padding: 0,
		margin: 0,
		width: '1425px',
		overflow: 'hidden',
	},
	image: {
		maxHeight: '450px'
	},
	leftButton: {
		display: 'none',
		position: 'relative',
		top: '-454px',
		background: 'none',
		outline: 'none',
		border: 'none',
		height: '450px',
		width: '100px',
		backgroundColor: 'rgba(255,255,255,0.2)',
		padding: '0 20px'
	},
	rightButton: {
		display: 'none',
		position: 'relative',
		top: '-454px',
		left: '1225px',
		background: 'none',
		outline: 'none',
		border: 'none',
		height: '450px',
		width: '100px',
		backgroundColor: 'rgba(255,255,255,0.2)',
		padding: '0 20px',
		zIndex: '2'

	},
	icon: {
		fontSize: '30px',
		color: 'white'
	},
	shadow: {
		width: '1425px',
		height: '450px',
		backgroundColor: 'rgba(0,0,0,0.8)',
		position: 'relative',
		top: '-454px'
	}
}

export default React.createClass({
	getInitialState() {
		return {
			slideIndex: 0,
		}
	},
	render() {
		return (
			<div style={styles.container}>

				<ShowPhoto index={this.state.slideIndex} photos={photos}/>
			</div>
		)
	}
})