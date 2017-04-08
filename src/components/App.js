import React from 'react';
import Banner from './brennen/Banner'
import News from './News'
import OurStory from './OurStory'
import Menu from './Menu'
import Directions from './Directions'
import Reservations from './Reservations'
import Catering from './Catering'
import Footer from './Footer'

var styles = {
	main: {
		width: '100%',
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
					<Banner />
					<img style={styles.mainPic} src={require('../assets/design-images/top-image.jpg')} />

					<News />
					<OurStory />
					<Menu />
					<Directions />
					<Reservations />
					<Catering />
					<Footer />

		    </div>
    )
  }
})