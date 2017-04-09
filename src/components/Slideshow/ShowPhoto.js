import React from 'react'

var photos = require('./slideData.js')
var imageRequirer = require.context('../../assets/food-images/', true, /^\.\/.*\.(jpg|jpeg|png|gif)$/gmi)

var styles = {
	container: {
		color: 'white'
	}
}

export default React.createClass({
	getInitialState(){
		return {
			slideIndex: this.props.index,
			photo: this.props.photos[this.props.index],
			photoLink: this.props.photos[this.props.index].path
		}
	},
	imageFormatter(cell) {  
    	return <img src={require('../../assets/food-images/' + cell)} />;
	},
	render() {
		var imgPath = String(this.props.photos[this.props.index].path)

		return (
			<div style={styles.container}>
				{this.imageFormatter(this.state.photoLink)}
			</div>
		)
	}
})