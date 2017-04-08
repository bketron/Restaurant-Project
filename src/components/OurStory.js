import React from 'react'

var styles = {
	container: {
		height: '450px',
		width: '100%',
		position: 'relative',
		top: '-4px',
		padding: '50px 300px',
		paddingTop: '60px'
	},
	picTitle: {
		width: '1425px',
		height: '400px',
	},
	title: {
		color: 'red',
		fontSize: '50px',
		fontWeight: 'bold',
		textAlign: 'center',
		margin: 0
	},
	text: {
		marginTop: '80px',
		fontSize: '18px',
		textAlign: 'center',
		lineHeight: '30px',
		borderBottom: '1px solid black',
		color: 'white',
		textShadow: '1px 1px rgba(0,0,0,0.4)'
	}
}

export default React.createClass({
	render() {
		return (
			<div id="ourStoryContainer" style={styles.container}>
				<p style={styles.title}>Our Story</p>

				<p style={styles.text}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo quis ipsam sed! Laboriosam explicabo veniam, labore deserunt illum officia ad, accusamus ut obcaecati, blanditiis enim autem veritatis minima provident nobis!
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint odio maiores quidem, ullam, inventore quas cumque ab natus ratione id, eveniet dolorem! Ab reiciendis libero officiis, consequatur itaque doloribus magnam.
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, reprehenderit, qui! Est vero dolorum veniam voluptatem voluptas totam inventore, cumque. Repellat eaque consectetur, repudiandae omnis quae eveniet natus animi nihil.
				</p>
			</div>
		)
	}
})