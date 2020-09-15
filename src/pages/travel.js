import React, { Component } from "react"
import SEO from "../components/seo"
import MyMap from "../components/MyMap/MyMap"
import Layout from "../components/layout"
import classes from "./travel.module.css"

class Travel extends Component {
	render() {
		return (
			<div className={classes.Background}>
				<Layout height={"200vh"} backgroundImg={true}>
					{/* <Layout height='190vh'> */}
					<SEO
						title='Travel'
						description='A travel app created with React.js and Node.js using Express and Nedb for the backend'
					/>
					<MyMap />
				</Layout>
			</div>
		)
	}
}

export default Travel
