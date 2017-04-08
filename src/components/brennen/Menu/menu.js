import React from 'react'
import menu from './menuitems.json'
import ItemIcons from './itemIcons'

var styles = {
	container: {
		backgroundColor: '#f2f2f2',
		width: '100%',
		position: 'relative',
		top: '0px',
		padding: '75px 300px',
		boxShadow: 'inset 0px 0px 80px rgba(0,0,0,0.05)'
	},
	lists: {
		listStyleType: 'none',
		padding: '0 20px 0 30px'
	},
	header: {
		fontSize: '28px',
		fontWeight: 'normal',
		fontStyle: 'italic',
		textAlign: 'center',
		fontFamily: 'serif',
		borderBottom: '1px solid black',
		padding: '0 20px 10px 20px',
		marginTop: '0'
	},
	name: {
		fontFamily: 'Italliano, cursive',
		fontSize: '20px',
		height: '30px',
		margin: '10px 0 5px',
		textOverflow: 'ellipsis',
		textAlign: 'center'
	},
	sideName: {
		fontFamily: 'serif',
		margin: 0,
		fontSize: '12px',
		fontStyle: 'italic',
	},
	sidePrice: {
		fontSize: '12px',
		margin: 0,
		fontStyle: 'italic'
	},
	price: {
		fontFamily: 'serif',
		fontSize: '18px',
		height: '20px',
		lineHeight: '20px',
		margin: 0,
		position: 'relative',
		top: '0px',
		paddingRight: '15px'
	},
	description: {
		fontFamily: 'serif',
		fontWeight: 'lighter',
		fontStyle: 'italic',
		fontSize: '13px',
		padding: '0',
		margin: 0,
		textAlign: 'center',
		display: 'flex',
		justifyContent: 'center'
	},
	sideItems: {
		display: 'flex',
		textAlign: 'center',
		justifyContent: 'center'
	},
	iconSection: {
		width: '100px',
		height: '20px',
		display: 'flex',
		alignItems: 'center',
		paddingLeft: '15px',
		position: 'relative',
		top: '6px'
	},
	icon: {
		width: '20px',
		height: '20px',
		backgroundColor: 'black',
		color: 'white',
		textAlign: 'center',
		lineHeight: '20px',
		fontSize: '12px',
		position: 'relative',
		top: '-1041px',
		left: '548px'
	},
	itemInfo: {
		display: 'flex',
		justifyContent: 'center',
	}
}

export default React.createClass({
	render() {
		return (
			<div style={styles.container}>

				<div id="appetizers">
					<p style={styles.header}>Appetizers</p>

					<ul style={styles.lists}>
						{menu.appetizers.map(item=> (
							<li key={'id' + item.id}>
								<div className="namePrice">
									<p style={styles.name}>{item.item}</p>
									<div id={'item' + item.id} style={styles.itemInfo}>
										<p id={'item' + item.id + 'price'}>{item.price}</p>
										<div id={'item' + item.id + 'icons'}>
											<ItemIcons item={item}/>
										</div>	
									</div>
								</div>

								<div className="itemInfo">
									<p style={styles.description}>{item.description}</p>
								</div>
							</li>
							))}
					</ul>

				</div>

				<div id="entrees">
					<p style={styles.header}>Entrees</p>

					<ul style={styles.lists}>
						{menu.entrees.map(item=> (
							<li key={'id' + item.id}>
								<div className="namePrice">
									<p style={styles.name}>{item.item}</p>
									<div id={'item' + item.id} style={styles.itemInfo}>
										<p id={'item' + item.id + 'price'}>{item.price}</p>
										<div id={'item' + item.id + 'icons'}>
											<ItemIcons item={item}/>
										</div>	
									</div>
								</div>

								<div className="itemInfo">
									<p style={styles.description}>{item.description}</p>
								</div>
							</li>
							))}
					</ul>
				</div>

				<div id="sides">
					<p style={styles.header}>Sides</p>

					<ul style={styles.lists}>
						{menu.sides.map(item=> (
							<li key={'id' + item.id}>
								<div style={styles.sideItems}>
									<p style={styles.sideName}>{item.item}........</p>
									<p style={styles.sidePrice}>{item.price}</p>
								</div>
							</li>
							))}
					</ul>

				</div>
			</div>
		)
	}
})