import Head from "next/head";
import Layout from "../components/Layout";

const Home = () => (
	<div>
		<Head>
			<script type="text/javascript" src="youtube.js"></script>
		</Head>
		<div className="p-4 shadow rounded bg-white text-center">
			<h1 className="text-purple-1000 leading-normal">Next.js</h1>
			<p className="text-gray-500">with Tailwind CSS</p>
			<div id="player"></div>
		</div>
	</div>
);

export default Home;
