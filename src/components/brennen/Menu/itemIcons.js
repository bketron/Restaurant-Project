import React from 'react'
import AllergyIcon from './Icons/AllergyIcon'
import FavoriteIcon from './Icons/FavoriteIcon'
import SpicyIcon from './Icons/SpicyIcon'
import VeganIcon from './Icons/VeganIcon'

var styles = {
	menuIcons: {
		display: 'flex',
		flexWrap: 'no-wrap'
	}
} 

export default React.createClass({
	getDefaultProps(){
		item: {}
	},
	whichIcons() {
		var itemInfo = [
			this.props.item.allergies,
			this.props.item.favorite,
			this.props.item.spicy,
			this.props.item.vegan
		]

		var whichOnes = itemInfo.filter(item=>{
			if(item === 1){
				return true
			}
			})[0]

		return whichOnes
	},
	render() {
		return (
			<div style={styles.menuIcons}>
				
				<AllergyIcon allergies={this.props.item.allergies} />
				<FavoriteIcon favorite={this.props.item.favorite} />
				<SpicyIcon spicy={this.props.item.spicy} />
				<VeganIcon vegan={this.props.item.vegan} />
			</div>
		)
	}
})