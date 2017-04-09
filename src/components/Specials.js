import React from 'react'
import Specials from './specials.json'
import Menu from './brennen/Menu/menuitems.json'

var styles = {
	container: {
		height: '400px'
	},
	title: {
		fontFamily:'Great Vibes',
		fontSize: '50px',
		textAlign: 'center'
	},
	body: {
		fontFamily: 'serif',
		fontWeight: 'lighter',
		fontStyle: 'italic',
		fontSize: '18px',
		textAlign: 'center'
	},
	img:{
		height:'215px'
	},
	name: {
		fontFamily: 'Italliano, cursive',
		fontSize: '25px',
		textAlign: 'center'
	}

}

var todaySpecial = Menu.entrees.filter(function(value){
	return value.id === Specials.menu_item_id
})[0]

var imageRequirer = require.context('../assets/food-images/', true, /^\.\/.*\.(jpg|jpeg|png|gif)$/gmi)


var specialPic = todaySpecial.image

console.log(todaySpecial)

export default React.createClass({
	imageFormatter(specialPic) {  
    return <img src={require('../assets/food-images/' + specialPic)} />;
	},

	render(){
		return(
			<div id="specialsContainer" style={styles.container}>
				<p style={styles.title}>Today's Special</p>
				<div style={styles.img}>{this.imageFormatter(specialPic)}</div>
				<div style={styles.name}>{todaySpecial.item}........{todaySpecial.price}</div>
				<div style={styles.body}>{todaySpecial.description}</div>
			</div>
		)
	}
})
