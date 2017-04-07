import React from 'react';
import TopArea from './brennen/TopArea'
import FoodImages from './brennen/FoodImages'
import TabSection from './brennen/TabSection'
import ShowReservation from './showReservation'

var styles = {
	main: {
		width: '1000px',
		margin: 'auto',
		paddingBottoM: '40px'
	},
	lower: {
		marginTop: '35px',
		width: '900px'
	},
}

export default React.createClass({
  render() {
    return (
		    <div style={styles.main}>
		      	<TopArea />

		      	<div id="lowerSection" style={styles.lower}>
		      		<TabSection />
		      		<FoodImages />
		      		<ShowReservation />
		      	</div>
		    </div>
    )
  }
})