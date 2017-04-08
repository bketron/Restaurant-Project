import React from 'react'

export default React.createClass({
	getInitialState() {
		return {
			slideIndex: 1
		}
	},
	plusDivs() {
  		this.showDivs(this.state.slideIndex += 1);
	},
	minusDivs() {
  		this.showDivs(this.state.slideIndex += -1);
	},
	showDivs(n) {
  		var i;
  		var x = document.getElementsByClassName("mySlides");
  
  		if (n > x.length) {this.state.slideIndex = 1}    
  		if (n < 1) {
  			this.setState({
  				slideIndex: x.length
  			})
  		}
  
  		for (i = 0; i < x.length; i++) {
     		x[i].style.display = "none";  
  		}
  
  		x[this.state.slideIndex-1].style.display = "block";  
	},
	render() {
		return (
			<div>
				{this.showDivs(1)}
				<div>
  					<img className="mySlides" src={require('../assets/food-images/Grilled-Ostrich-Fillet.jpeg')} />
  					<img className="mySlides" src={require('../assets/food-images/porkchop.jpg')} />
  					<img className="mySlides" src={require('../assets/food-images/Ribeye.jpg')} />
  					<img className="mySlides" src={require('../assets/food-images/scallops.jpg')} />

  					<button id="galleryLeft" onClick={this.minusDivs}>LEFT</button>
  					<button id="galleryRight" onClick={this.plusDivs}>RIGHT</button>
				</div>
			</div>
		)
	}
})