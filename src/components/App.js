import React from 'react';
import InfoSection from './infoSection'
import Reservation from './reservation'


export default React.createClass({
  render() {
    return (
      <div>
      	<div className='socialMediaIcons'>
      		<span className="zocial-opentable"></span>
      		<i className="fa fa-facebook-square" aria-hidden="true"></i>
      		<i className="fa fa-twitter-square" aria-hidden="true"></i>
      		<i className="fa fa-instagram" aria-hidden="true"></i>
      	</div>
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