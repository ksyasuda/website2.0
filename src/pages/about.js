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
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Beatae esse officiis autem commodi sint pariatur libero
					sequi natus suscipit quibusdam quidem quasi est, molestiae
					repellendus odit at alias. Est, debitis. Lorem ipsum dolor
					sit amet consectetur adipisicing elit. In quisquam
					architecto a nemo harum corrupti minus, laudantium rerum
					eveniet ipsum aliquid! Magnam saepe libero earum in minus
					ducimus voluptatum quae.
				</p>
				<Neofetch style={{ width: "60%", left: "20%" }} />
			</div>
		</Layout>
	)
}
