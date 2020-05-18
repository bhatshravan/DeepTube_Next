import Navbar from "./navbar";
import Head from "next/head";
import Link from "next/link";

const Layout = (props) => (
	<div>
		<Head>
			<title>Hello world</title>
		</Head>
		<Navbar />
		<div className="container">{props.children}</div>
	</div>
);

export default Layout;
