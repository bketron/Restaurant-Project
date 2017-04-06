import React from 'react'
import Story from './ourStory'
import {BrowserRouter, Route} from 'react-router-dom'

export default React.createClass({
  render() {
  	return(
	    <BrowserRouter>
	    	<div>
	      	<Route path='/' component={Story} />
	      </div>
	    </BrowserRouter>
	  )
  }
})