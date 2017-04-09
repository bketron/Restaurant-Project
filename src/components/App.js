import React from 'react';
import ShowReservation from './showReservation'
import Banner from './Banner'
import Hours from './Hours'
import News from './News'
import OurStory from './OurStory'
import Menu from './Menu'
import Slideshow from './Slideshow/Slideshow'
import Directions from './Directions'
import Reservations from './Reservations'
import Catering from './Catering'
import Footer from './Footer'
import Specials from './Specials'


var styles = {
	main: {
		width: '100%',
		margin: 'auto',
		backgroundColor: '#e6e6e6'
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
					<Banner />
					<Hours />
					<News />
					<OurStory />
					<Specials />
					<Menu />
					<Slideshow />
					<Directions />
					<Reservations />
					<Catering />
					<Footer />
					

		    </div>
    )
  }
})