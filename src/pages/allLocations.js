import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import AllLocations from "../components/AllLocations/AllLocations"

const allLocations = () => {
	return (
		<Layout height={"230vh"}>
			<SEO
				title='All Locations'
				description='All the locations that I have logged in the travel app'
			/>
			<AllLocations />
		</Layout>
	)
}

export default allLocations
