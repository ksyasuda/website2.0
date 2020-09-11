import React, { Component } from "react"
import SEO from "../components/seo"
import MyMap from "../components/MyMap/MyMap"
import Layout from "../components/layout"

class Travel extends Component {
	render() {
		return (
			<Layout height={"180vh"}>
				{/* <Layout height='190vh'> */}
				<SEO
					title='Travel'
					description='A travel app created with React.js and Node.js using Express and Nedb for the backend'
				/>
				<MyMap />
			</Layout>
		)
	}
}

export default Travel
