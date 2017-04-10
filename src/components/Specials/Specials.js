import React from 'react'
import Specials from './specials.json'
import Menu from '../brennen/Menu/menuitems.json'

var styles = {
	container: {
		height: '500px'
	},
	title: {
		fontFamily:'Great Vibes',
		fontSize: '50px',
		textAlign: 'center',
		marginBottom: '60px',
		marginTop: '0px',
		backgroundColor: 'white',
		height: '120px',
		position: 'relative',
		top: '-4px',
		lineHeight: '120px'
	},
	body: {
		fontFamily: 'sans-serif',
		fontWeight: 'lighter',
		fontStyle: 'italic',
		fontSize: '16px',
		margin: 0,
		marginTop: '50px',
		marginBottom: '20px',
		marginLeft: '100px',
		textAlign: 'center',
		width: '400px'
	},
	img:{
		height:'250px',
		width: '500px',
		overflow: 'hidden',
		marginLeft: '100px',
		position: 'relative',
		top: '10px',
		boxShadow: '0 0 25px rgba(0,0,0,0.1)'
	},
	name: {
		color: '#366361',
		fontFamily: 'Arial Black',
		textTransform: 'uppercase',
		fontSize: '22px',
		margin: 0,
		textAlign: 'center'
	},
	price: {
		color: '#366361',
		fontWeight: 'bold',
		textAlign: 'center',
		margin: 'auto',
		borderBottom: '3px solid #59E4DF',
		width: '33px'
	},
	info: {
		display: 'flex'
	},
	infoContainer: {
		width: '600px',
		height: '260px',
		margin: '0 0 0 100px',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		paddingBottom: '20px'
	}

}

var todaySpecial = Menu.entrees.filter(function(value){
	return value.id === Specials.menu_item_id
})[0]

var imageRequirer = require.context('../../assets/food-images/special-pics/', true, /^\.\/.*\.(jpg|jpeg|png|gif)$/gmi)


var specialPic = todaySpecial.image

export default React.createClass({
	imageFormatter(specialPic) {  
    return <img src={require('../../assets/food-images/special-pics/' + specialPic)} />;
	},

	render(){
		return(
			<div id="specialsContainer" style={styles.container}>
				<p style={styles.title}>Today's Special</p>

				<div style={styles.info}>
					<div style={styles.img}>{this.imageFormatter(specialPic)}</div>

					<div style={styles.infoContainer}>
						<p style={styles.name}>{todaySpecial.item}</p>
						<p style={styles.body}>{todaySpecial.description}</p>
						<p style={styles.price}>${todaySpecial.price}</p>
					</div>
				</div>
			</div>
		)
	}
})
