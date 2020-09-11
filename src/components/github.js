import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Github = ({ style, className }) => {
	const data = useStaticQuery(graphql`
		query {
			profile: file(relativePath: { eq: "githubprof.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 900) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`)
	return (
		<Img
			style={style}
			className={className}
			alt='github profile'
			fluid={data.profile.childImageSharp.fluid}
		/>
	)
}

export default Github
