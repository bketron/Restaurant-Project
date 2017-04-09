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
		color: 'white',
		fontSize: '60px',
		textAlign: 'center',
		margin: 0,
		fontFamily: 'Great Vibes'
	},
	text: {
		display: 'block',
		marginTop: '20px',
		height: '200px',
		overflow: 'hidden',
		textOverflow: 'clip',
		fontSize: '17px',
		textAlign: 'center',
		fontFamily: 'Helvetica Neue',
		lineHeight: '30px',
		borderBottom: '1px solid black',
		color: 'white',
		textShadow: '1px 1px rgba(0,0,0,0.4)'
	},
	link: {
		textDecoration: 'none',
		height: '35px',
		fontSize: '17px',
		color: 'white',
		textAlign: 'center'
	},
	linkCon: {
		height: '30px',
		width: '120px',
		margin: 'auto'
	},
	icon: {
		fontSize: '14px',
		color: '#59E4DF'
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

				<div style={styles.linkCon} id="readMoreLink">
					<a style={styles.link} href="">Read More <i style={styles.icon} className="fa fa-chevron-right" aria-hidden="true"></i>

</a>
				</div>
			</div>
		)
	}
})