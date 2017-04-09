import React from 'react'
import PhotoArray from './PhotoArray'

var photos = require('./slideData.js')

var styles = {
	container: {
		width: '1425px',
		height: '350px',
		backgroundColor: 'black',
		overflow: 'hidden',
		position: 'relative',
		top: '-8px',
		paddingTop: '30px'
	},
	title: {
		color: '#66fff9',
		fontSize: '60px',
		fontFamily: 'Great Vibes',
		textAlign: 'center',
		margin: '60px 0 30px 0'
	},
	button: {
		display: 'flex',
		justifyContent: 'center',
		backgroundColor: '#66fff9',
		color: '#366361',
		border: 'none',
		outline: 'none',
		height: '36px',
		fontSize: '13px',
		lineHeight: '36px',
		fontFamily: 'Helvetica Neue',
		margin: 'auto',
		textAlign: 'center',
		padding: '0 12px',
		width: '130px',
		textDecoration: 'none',
		position: 'relative'
	},
}

export default React.createClass({
	getInitialState() {
		return {
			slideIndex: 0,
		}
	},
	render() {
		return (
			<div className="imageGallery" style={styles.container}>
				<div className="gallery">

					<div className="galleryData">
						<div className="titleBox">
							<p>Gallery</p>
						</div>

						<PhotoArray />
					</div>
				</div>
			</div>
		)
	}
})