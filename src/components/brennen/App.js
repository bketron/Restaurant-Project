import React from 'react';
import TopArea from './TopArea'
import Menu from './Menu/menu'
import FoodImages from './FoodImages'
import TabSection from './TabSection'

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
		      	</div>
		    </div>
    )
  }
})