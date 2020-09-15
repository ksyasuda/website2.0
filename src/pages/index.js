import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Russell from "../components/russell"
import Charlie from "../components/charlie"
import classes from "./blog.module.css"
import { graphql, Link } from "gatsby"
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward"
import GitHubIcon from "@material-ui/icons/GitHub"
import Github from "../components/github"
class IndexPage extends Component {
	state = {
		charlie: false,
		posts: [],
	}

	onCharlieHandler = () => {
		this.setState({ charlie: !this.state.charlie })
	}

	componentDidMount = () => {
		const { data } = this.props
		let posts = [...this.state.posts]
		data.allMarkdownRemark.edges.map(node => {
			// console.log(node)
			node = node.node
			if (posts.length < 2) {
				posts.push(
					<div key={node.id} className={classes.HomePost}>
						<Link
							to={node.fields.slug}
							style={{ textDecoration: "none" }}
						>
							<h3
								style={{
									fontSize: "18px",
									textDecoration: "none",
									position: "relative",
									left: "5px",
									textAlign: "left",
									marginTop: "3px",
									color: "#191E27",
								}}
							>
								{node.frontmatter.title}
								<br />
								<span
									style={{
										fontSize: "small",
										textDecoration: "none",
										position: "relative",
										left: "5px",
										top: "8px",
										color: "#1D1A28",
									}}
								>
									- {node.frontmatter.date} |{" "}
									<span className={classes.Subject}>
										{node.frontmatter.subject}
									</span>
								</span>
							</h3>
							<hr style={{ marginTop: "5px" }} />
							<p className={classes.HomeBody}>{node.excerpt}</p>
						</Link>
					</div>
				)
			} else return
		})
		this.setState({ posts: posts })
	}

	temp = () => {
		return (
			<div className={classes.ContentContainer}>
				<h1
					style={{
						color: "rebeccapurple",
					}}
				>
					{/* <img
							src='https://imgur.com/a9ET2dR.gif'
							className={classes.gif}
						/> */}
					Oh Hey, Didn't See You There
				</h1>
				<div
					style={{
						maxWidth: `300px`,
						marginBottom: `1.45rem`,
					}}
				>
					{/* <Image /> */}
					{/* <Russell /> */}
					<button
						className={classes.button}
						onClick={this.onCharlieHandler}
					>
						{this.state.charlie ? "NOT Charlie" : "Charlie?"}
					</button>
					{this.state.charlie ? <Charlie /> : <Russell />}
				</div>
			</div>
		)
	}

	render() {
		let height = "160vh"
		if (typeof window !== "undefined") {
			if (window.screen.width < 700) {
				height = "320vh"
				// console.log("height", height)
			}
		}
		return (
			<div className={classes.BigContainer}>
				<Layout
					height={height}
					phoneHeight={height}
					backgroundImg={"url(https://imgur.com/R2iKpHm.gif)"}
				>
					{/* <div className={classes.HomeContainer}> */}
					<SEO title='Home' />
					<div className={classes.HomeBody}>
						<h1 className={classes.HomeTitle}>
							Welcome to Sudacode
						</h1>
						{/*<p className={classes.HomeSubTitle}>
						A Computer Science portfolio and blog that puts the{" "}
						<strong>code</strong> in pseudocode
					</p>*/}
						<div className={classes.Home1}>
							<div className={classes.Github}>
								<p className={classes.GithubText}>
									<a
										href='https://github.com/ksyasuda'
										target='__blank'
										rel='noreferrer'
										className={classes.GithubText}
									>
										Click here or on the image to visit my
										Github page to see more projects
									</a>
								</p>
								<a
									href='https://github.com/ksyasuda'
									target='__blank'
									rel='noreferrer'
								>
									<Github className={classes.GithubLink} />
								</a>
								{/* <Github /> */}
							</div>
						</div>
						<div className={classes.Home2}>
							<p className={classes.Excerpt}>
								<span className={classes.CheckOutPosts}>
									Check out some of my recent posts below
								</span>
							</p>
							{this.state.posts.length > 0
								? this.state.posts
								: null}
						</div>
					</div>
					{/* </div> */}
				</Layout>
			</div>
		)
	}
}

export const query = graphql`
	query {
		allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
			totalCount
			edges {
				node {
					id
					frontmatter {
						title
						date
						subject
					}
					excerpt
					fields {
						slug
					}
				}
			}
		}
	}
`

export default IndexPage
