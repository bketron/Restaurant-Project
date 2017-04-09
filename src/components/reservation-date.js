import React from 'react'

var styles = {
	container: {
		margin: '2px',
		display: 'flex',
		justifyContent: 'center'
	},
	month: {
		outline: 'none',
		margin: '3px',
		height: '30px',
		width: '150px',
		backgroundColor: 'white'
	},
	day: {
		outline: 'none',
		margin: '3px',
		height: '30px',
		width: '50px',
		backgroundColor: 'white',
	},
	hour: {
		outline: 'none',
		margin: '3px',
		height: '30px',
		width: '80px',
		backgroundColor: 'white',
	},
	min: {
		outline: 'none',
		margin: '3px',
		height: '30px',
		width: '50px',
		backgroundColor: 'white',
	},
}

export default React.createClass({
	render() {
		return (
			<div style={styles.container}>

				<select name="month" style={styles.month}>
					<option value="" selected>Month</option>
					<option value="january">January</option>
					<option value="february">February</option>
					<option value="march">March</option>
					<option value="april">April</option>
					<option value="may">May</option>
					<option value="june">June</option>
					<option value="july">July</option>
					<option value="august">August</option>
					<option value="september">September</option>
					<option value="october">October</option>
					<option value="november">November</option>
					<option value="december">December</option>
				</select>

				<select name="day" style={styles.day}>
					<option value="" disabled selected>Day</option>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
					<option value="6">6</option>
					<option value="7">7</option>
					<option value="8">8</option>
					<option value="9">9</option>
					<option value="10">10</option>
					<option value="11">11</option>
					<option value="12">12</option>
					<option value="13">13</option>
					<option value="14">14</option>
					<option value="15">15</option>
					<option value="16">16</option>
					<option value="17">17</option>
					<option value="18">18</option>
					<option value="19">19</option>
					<option value="20">20</option>
					<option value="21">21</option>
					<option value="22">22</option>
					<option value="23">23</option>
					<option value="24">24</option>
					<option value="25">25</option>
					<option value="26">26</option>
					<option value="27">27</option>
					<option value="28">28</option>
					<option value="29">29</option>
					<option value="30">30</option>
					<option value="31">31</option>
				</select>

				<select name="hour" style={styles.hour}>
					<option value="" disabled selected>Hour</option>
					<option value="11am">11 am</option>
					<option value="12pm">12 pm</option>
					<option value="1pm">1 pm</option>
					<option value="2pm">2 pm</option>
					<option value="3pm">3 pm</option>
					<option value="4pm">4 pm</option>
					<option value="5pm">5 pm</option>
					<option value="6pm">6 pm</option>
					<option value="7pm">7 pm</option>
					<option value="8pm">8 pm</option>
					<option value="9pm">9 pm</option>
				</select>

				<select name="min" style={styles.min}>
					<option value="" disabled selected>Min.</option>
					<option value="00">0</option>
					<option value="15">15</option>
					<option value="30">30</option>
					<option value="45">45</option>
				</select>

			</div>
		)
	}
})