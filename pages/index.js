import Head from "next/head";
import "isomorphic-unfetch";
import { Button, Container, Header, Grid, Divider, Icon, Label } from "semantic-ui-react";

const Home = ({ currentVideo, videoUrl, nextVideo }) => (
	<div>
		<Head>
			<script type="text/javascript" src="youtube.js"></script>
			<title>Youtube Randomizer</title>
		</Head>

		<Container fluid>
			<Divider hidden />
			<Header as="h1" content="Youtube Randomizer" textAlign="center" dividing />
			<Grid>
				<Grid.Column width={3} />
				<Grid.Column width={10}>
					<iframe
						className="m-1 text-center"
						id="player"
						type="text/html"
						textAlign="center"
						width="100%"
						height="400"
						src={videoUrl}
						frameBorder="0"
						autoPlay="1"
						allowFullScreen
					/>
				</Grid.Column>
			</Grid>
			<Divider hidden />
			<center>
				<Button as="div" labelPosition="right">
					<Button color="red">
						<Icon name="heart" />
						Like
					</Button>
					<Label as="a" basic color="red" pointing="left">
						2,048
					</Label>
				</Button>
				<a href="/" class="ui primary button">
					Next
				</a>
			</center>
		</Container>
		<style jsx>{`
			h1: {
				margintop: "6em";
				marginbottom: "8em";
			}
			,
			iframe: {
				margintop: "6em";
				// padding-top: 56.25%;
			},
			
		`}</style>
	</div>
);

Home.getInitialProps = async (ctx) => {
	let res = await fetch("http://yt.bitstreak.me/api");
	const json = await res.json();

	let videoId = json[0].videoId;
	if (res)
		return {
			currentVideo: json[0],
			videoUrl: "http://www.youtube.com/embed/" + videoId,
			nextVideo: json[1],
		};
};

export default Home;
