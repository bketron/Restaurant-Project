import React from 'react'
import menu from './menuitems.json'
import Icons from './itemIcons'

var styles = {
	container: {
		backgroundColor: '#f2f2f2',
		width: '100%',
		position: 'relative',
		top: '0px',
		padding: '75px 300px',
		boxShadow: 'inset 0px 0px 80px rgba(0,0,0,0.05)'
	},
	header: {
		textAlign: 'center',
		fontFamily: 'Raleway, sans-serif',
		fontWeight: '800',
		fontSize: '18px',
		textTransform: 'uppercase',
		backgroundColor: '#59E4DF',
		color: '#366361',
		color: 'white',
		height: '50px',
		lineHeight: '50px',
		padding: '0 20px',
		margin: '0 auto',
		width: '180px',
		marginBottom: '40px',
	},
	lists: {
		borderTop: '2px solid rgba(125,125,125,0.1)',
		padding: 0,
		marginBottom: '100px'
	},
	listItem: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		borderBottom: '2px solid rgba(125,125,125,0.1)'
	},
	itemContainer: {
		display: 'flex',
		padding: '20px 10px'
	},
	sideItemContainer: {
		display: 'flex',
		justifyContent: 'center',
		padding: '20px 10px'
	},
	itemHeader: {
		display: 'flex',
		fontFamily: 'Raleway, sans-serif',
		fontWeight: '800',
		fontSize: '15px',
		color: '#366361',
		justifyContent: 'center',
		margin: 'auto'
	},
	itemName: {
		fontFamily: 'Raleway, sans-serif',
		fontWeight: '800',
		fontSize: '16px',
		textTransform: 'uppercase',
		color: '#366361',
		margin: '0',
		height: '30px'
	},
	itemPrice: {
		margin: 0,
		fontSize: '15px',
		position: 'relative',
		top: '-2px'
	},
	imageCon: {
		width: '150px',
		height: '150px',
		borderRadius: '50%',
		marginRight: '50px'
	},
	description: {
		width: '600px',

	},
	iconSection: {
		alignItems: 'flex-end'
	},
	infoContainer: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		height: '120px',
		marginBottom: '10px'
	}
}

export default React.createClass({
	render() {
		return (
			<div style={styles.container}>

				<div id="appetizers">
					<p id="appetizersHeader" style={styles.header}>Appetizers</p>

					<ul style={styles.lists}>
						{menu.appetizers.map(item=> (
							<li key={'id' + item.id} style={styles.listItem}>
								<div style={styles.itemContainer}>
									<div style={styles.imageCon} id={"menuImage" + item.id}></div>

									<div>
										<div style={styles.itemHeader}>
											<p style={styles.itemName} className="menuItemName">{item.item}</p>
											<p style={styles.itemPrice}>{item.price}</p>
										</div>

											<div style={styles.itemInformation}>
												<p style={styles.description}>{item.description}</p>
											</div>

											<Icons item={item}/>
									</div>
								</div>
							</li>
							))}
					</ul>

				</div>

				<div id="entrees">
					<p style={styles.header}>Entrees</p>

					<ul style={styles.lists}>
						{menu.entrees.map(item=> (
							<li key={'id' + item.id} style={styles.listItem}>
								<div style={styles.itemContainer}>
									<div style={styles.imageCon} id={"menuImage" + item.id}></div>

									<div>
										<div style={styles.itemHeader}>
											<p style={styles.itemName} className="menuItemName">{item.item}</p>
											<p style={styles.itemPrice}>{item.price}</p>
										</div>

										<div style={styles.infoContainer}>
											<div style={styles.itemInformation}>
												<p style={styles.description}>{item.description}</p>
											</div>

											<Icons item={item}/>
										</div>
									</div>
								</div>
							</li>
							))}
					</ul>
				</div>

				<div id="sides">
					<p style={styles.header}>Sides</p>

					<ul style={styles.lists}>
						{menu.sides.map(item=> (
							<li key={'id' + item.id} style={styles.listItem}>
								<div style={styles.sideItemContainer}>

									<div>
										<div style={styles.itemHeader}>
											<p style={styles.itemName} className="menuItemName">{item.item}</p>
											<p style={styles.itemPrice}>{item.price}</p>
										</div>
									</div>
								</div>
							</li>
							))}
					</ul>

				</div>
			</div>
		)
	}
})