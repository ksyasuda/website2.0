import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Neofetch from "../components/neofetch"

export default function about() {
	return (
		<Layout height={"150vh"}>
			<SEO
				title='About-Me'
				description='A page dedicated to all things about me including my personal life, my computer science background, my personal setup in terms of desktop setup, laptop setup, linux setup, etc'
			/>
			<div>
				<h1>About Me</h1>
				<Neofetch style={{ width: "60%", left: "20%" }} />
			</div>
		</Layout>
	)
}
