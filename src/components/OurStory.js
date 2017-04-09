import React from 'react'

var styles = {
	container: {
		height: '450px',
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
	textBox: {
		fontSize: '17px',
		color: 'white',
		textAlign: 'center',
		fontFamily: 'Helvetica Neue',
		lineHeight: '30px'
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
			<div>
				<a name="ourStory"></a>
				<div id="ourStoryContainer" style={styles.container}>

					<p style={styles.title}>Our Story</p>

					<div style={styles.textBox} id="ourStoryText">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo quis ipsam sed! Laboriosam explicabo veniam, labore deserunt illum officia ad, accusamus ut obcaecati, blanditiis enim autem veritatis minima provident nobis!
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint odio maiores quidem, ullam, inventore quas cumque ab natus ratione id, eveniet dolorem! Ab reiciendis libero officiis, consequatur itaque doloribus magnam.
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, reprehenderit, qui! Est vero dolorum veniam voluptatem voluptas totam inventore, cumque. Repellat eaque consectetur, repudiandae omnis quae eveniet natus animi nihil.	
					</div>

					<div style={styles.linkCon} id="readMoreLink">
						<a style={styles.link} href="">Read More <i style={styles.icon} className="fa fa-chevron-right" aria-hidden="true"></i>

	</a>
					</div>
				</div>
			</div>
		)
	}
})