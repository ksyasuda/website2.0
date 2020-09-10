import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Russell = () => {
	const data = useStaticQuery(graphql`
		query {
			russellImage: file(relativePath: { eq: "russell-dea.JPG" }) {
				childImageSharp {
					fluid(maxWidth: 300) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`)
	//   console.log(data)

	return (
		<Img
			alt='Literally Russell Dea'
			fluid={data.russellImage.childImageSharp.fluid}
		/>
	)
}

export default Russell
