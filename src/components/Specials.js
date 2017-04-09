import React from 'react'
import Specials from './specials.json'
import Menu from './brennen/Menu/menuitems.json'

var todaySpecial = Menu.entrees.filter(function(value){
	return value.id === Specials.menu_item_id
})[0]

console.log(todaySpecial)
export default React.createClass({
	render(){
		return(
			<div>
				<h3>Today's Special</h3>
				<img src={require(todaySpecial.image)} alt="special" />
				<div>{todaySpecial.item}...........{todaySpecial.price}</div>
				<div>{todaySpecial.description}</div>
			</div>
		)
	}
})
