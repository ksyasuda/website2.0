/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Helmet from "react-helmet"
import favicon from "../images/favicon.ico"
import Header from "./header/header"
import "./layout.css"

const Layout = ({ children, height, id, backgroundImg }) => {
	const data = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`)
	const onClickHandler = event => {
		// console.log("click")
	}
	let style = {
		backgroundImage: backgroundImg,
		height: "100vh",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "0 94px",
		backgroundSize: "101% 120%",
	}
	if (typeof window !== "undefined" && window.screen.height < 1000) {
		style = {
			...style,
			height: "130vh",
		}
	}
	if (height !== undefined) {
		style = {
			...style,
			height: height,
		}
	}

	if (backgroundImg !== "") {
		style = {
			...style,
			backgroundColor: "rgb(211, 211, 211)",
		}
	}
	console.log("style", style)
	return (
		<>
			<Helmet>
				<link rel='icon' href={favicon} />
			</Helmet>
			<div style={style} id={id}>
				<Header
					clicked={onClickHandler}
					siteTitle={data.site.siteMetadata.title}
				/>
				<div
					style={{
						margin: `0 auto`,
						maxWidth: 1420,
						padding: `1.45rem 1.0875rem 1.45rem`,
					}}
				>
					<main>
						{/* <NavBar /> */}
						{children}
					</main>
					<footer style={{ marginTop: "25%" }}>
						© Kyle Yasuda {new Date().getFullYear()}, Built with
						{` `}
						<a
							style={{ textDecoration: "none" }}
							href='https://www.gatsbyjs.org'
						>
							Gatsby
						</a>
					</footer>
				</div>
			</div>
		</>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
