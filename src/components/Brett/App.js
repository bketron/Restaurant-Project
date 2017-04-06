import React from 'react';
import InfoSection from './infoSection'
import Reservation from './reservation'

var styles= {
	ring: {
        height: '15px',
        width: '15px',
        borderRadius: '50%',
        border: '6px solid black'
    }
  }

export default React.createClass({
  render() {
    return (
      <div>
      	<div>
      		<img src='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSNOMca1saenvD9LVXFoGz0AuGassyvjG1K9SOlPDsbOia4IIXx' alt='#'/>
      	</div>
      	<div>
      		<InfoSection />
      		<Reservation />

      	</div>
      	<footer>&copy; 2017 restaurant name</footer>
      </div>
    )
  }
})