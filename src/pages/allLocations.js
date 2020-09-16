import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import AllLocations from "../components/AllLocations/AllLocations"
import classes from "./travel.module.css"

const allLocations = () => {
	return (
		<div className={classes.Background}>
			<Layout height={"360vh"} backgroundImg={true}>
				<SEO
					title='All Locations'
					description='All the locations that I have logged in the travel app'
				/>
				<AllLocations />
			</Layout>
		</div>
	)
}

export default allLocations
