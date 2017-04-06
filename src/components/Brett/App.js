import React from 'react';
import InfoSection from './infoSection'
import Reservation from './reservation'


export default React.createClass({
  render() {
    return (
      <div>
      	<div>
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