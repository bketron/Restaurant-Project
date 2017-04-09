import React from 'react'

var photos = require('./slideData.js')

var imageRequirer = require.context('../../assets/food-images/', true, /^\.\/.*\.(jpg|jpeg|png|gif)$/gmi)

var styles = {
	container: {
		width: '1425px',
		height: '350px',
		overflow: 'hidden',
		position: 'relative',
		top: '-275px',
		paddingTop: '100px'
	},
	list: {
		padding: 0,
		margin: 0,
		display: 'flex',
		listStyleType: 'none',
		alignItems: 'center',
		justifyContent: 'center'
	},
	listItem: {
		margin: '20px'
	},
	imageThumb: {
		width: '275px',
		height: '225px',
		overflow: 'hidden'
	}
}

export default React.createClass({
	imageFormatter(image) {  
       return <img style={styles.imageThumb} src={require('../../assets/food-images/' + image)} />;
    },
	render() {
		return (
			<div className="photos">
				<div className="galleryData" style={styles.container}>
					<ul style={styles.list}>
						{photos.map(photo=> (
							<li style={styles.listItem}>
								{this.imageFormatter(photo.path)}
							</li>
						))}
					</ul>
				</div>
			</div>
		)
	}
})