import React from 'react'
import { BrowserRouter , Route , Link } from 'react-router-dom'
import Menu from './Menu/menu'
import OurStory from './OurStory'

var styles = {
	container: {
		width: '620px'
	},
	linkBar: { 
		height: 40,
		backgroundColor: 'blue',
		borderBottom: '1px solid black'
	}
}

export default React.createClass({
	render() {
		return (
			<BrowserRouter>
				<div style={styles.container}>
					<div id="linkBar" style={styles.linkBar}>
						<Link to="/ourstory">Our Story</Link>
						<Link to="/menu">Menu</Link>
						<Link to="/reservations">Reservations</Link>
					</div>

					<Route path="/menu" component={Menu} />
					<Route path="/ourstory" component={OurStory} />
					<Route path="/reservations" component={ReservationForm}
				</div>
			</BrowserRouter>
		)
	}
})