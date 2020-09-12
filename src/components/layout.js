/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import Helmet from "react-helmet"
import favicon from "../images/favicon.ico"
import Header from "./header/header"
import Breadcrumbs from "@material-ui/core/Breadcrumbs"
import Button from "@material-ui/core/Button"
import GitHubIcon from "@material-ui/icons/GitHub"
import classes from "../pages/blog.module.css"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import FacebookIcon from "@material-ui/icons/Facebook"
import RedditIcon from "@material-ui/icons/Reddit"
import CreateIcon from "@material-ui/icons/Create"
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
	let style
	if (backgroundImg !== "") {
		style = {
			backgroundImage: backgroundImg,
			height: "140vh",
			backgroundRepeat: "no-repeat",
			backgroundPosition: "0 97px",
			backgroundSize: "101% 120%",
		}
	}
	//* for laptop but probably not phone
	if (typeof window !== "undefined" && window.screen.height < 1000) {
		style = {
			...style,
			height: "130vh",
			backgroundImage: backgroundImg,
			backgroundPosition: "0 90px",
		}
	}

	if (typeof window !== "undefined" && window.screen.width < 800) {
		style = {
			...style,
			backgroundImage: "",
		}
	}

	//! if a height for the layout is specified then apply the new height to style
	if (height !== undefined) {
		style = {
			...style,
			height: height,
		}
	}

	//! if there is not a background image set then set the background color to the default
	if (backgroundImg !== "") {
		style = {
			...style,
			backgroundColor: "rgb(211, 211, 211)",
			// backgroundColor: "rgb(49, 53, 61)",
			// height: "200vh",
		}
	}
	// console.log("style", style)
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
					<footer
						style={{
							marginTop: "10px",
							position: "relative",
							right: "10px",
							textAlign: "left",
							color: "#908774",
						}}
					>
						© Kyle Yasuda {new Date().getFullYear()}, Built with
						{` `}
						<a
							style={{ textDecoration: "none" }}
							href='https://www.gatsbyjs.org'
						>
							Gatsby
						</a>
						<Breadcrumbs
							className={classes.Breadcrumbs}
							aria-label='breadcrumb'
						>
							<a
								className={classes.Links}
								href='https://github.com/ksyasuda'
								target='_blank'
								rel='noreferrer'
							>
								<Button
									startIcon={<GitHubIcon />}
									color='secondary'
									variant='text'
								>
									Github
								</Button>
							</a>
							<a
								className={classes.Links}
								href='https://linkedin.com/in/kyle-yasuda-7a81b415b'
								target='_blank'
								rel='noreferrer'
							>
								<Button
									color='secondary'
									variant='text'
									startIcon={<LinkedInIcon />}
								>
									LinkedIn
								</Button>
							</a>
							<a
								className={classes.Links}
								href='https://www.reddit.com/user/sudacode'
								target='_blank'
								rel='noreferrer'
							>
								<Button
									color='secondary'
									variant='text'
									startIcon={<RedditIcon />}
								>
									Reddit
								</Button>
							</a>
							<a
								className={classes.Links}
								href='https://www.facebook.com/Kyle.Yasuda.2/'
								target='_blank'
								rel='noreferrer'
							>
								<Button
									color='secondary'
									variant='text'
									startIcon={<FacebookIcon />}
								>
									Facebook
								</Button>
							</a>
							<Link className={classes.Links} to='/blog/'>
								<Button
									color='secondary'
									variant='text'
									startIcon={<CreateIcon />}
								>
									Blog
								</Button>
							</Link>
						</Breadcrumbs>
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
