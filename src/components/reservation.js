import React from 'react';



export default React.createClass({
	getInitialState(){
		return{
			fullName: '',
			numberOfGuests: '',
			date: '',
			specialNotes: ''
		}
	},
	update(e){
		this.setState({[e.target.name]: e.target.value})
	},
	render() {
		return (
	  	<div>
	  		<form onSubmit={this.handleSubmit}>
	  			<input onChange={this.update} type='text' name='fullName' value={this.state.fullName} />
	  			<input onChange={this.update} type='text' name='numberOfGuests' value={this.state.numberOfGuests} />
	  			<input onChange={this.update} type='text' name='date' value={this.state.date} />
	  			<input onChange={this.update} type='text' name='specialNotes' value={this.state.specialNotes} />
	  			<button>Reserve Table</button>
	  		</form>
	    </div>
	  )
	}
})


