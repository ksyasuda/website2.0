import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Russell from "../components/russell"
import Charlie from "../components/charlie"
import classes from "./blog.module.css"
import { graphql, Link } from "gatsby"
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
					<Link
						key={node.id}
						to={node.fields.slug}
						style={{
							backgroundColor: "dodgerblue",
						}}
						className={classes.link}
					>
						<div
							key={node.id}
							style={{ backgroundColor: "dodgerblue" }}
							className={classes.postContainer}
						>
							<h3
								className={classes.Title}
								style={{ marginBottom: "2px" }}
							>
								{node.frontmatter.title}
								{<br />}
								<span
									style={{
										color: "black",
										fontSize: "small",
										textDecoration: "none",
									}}
								>
									- {node.frontmatter.date} |{" "}
									<span className={classes.Subject}>
										{node.frontmatter.subject}
									</span>{" "}
								</span>
								<hr className={classes.Line} />
							</h3>
							<p className={classes.Body}>{node.excerpt}</p>
						</div>
					</Link>
				)
			} else return
		})
		this.setState({ posts: posts })
	}

	render() {
		return (
			<div className={classes.HomeContainer}>
				<Layout>
					<SEO title='Home' />
					<div className={classes.ContentContainer}>
						<h1
							style={{
								color: "rebeccapurple",
							}}
						>
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
								{this.state.charlie
									? "NOT Charlie"
									: "Charlie?"}
							</button>
							{this.state.charlie ? <Charlie /> : <Russell />}
						</div>
						{this.state.posts.length > 0 ? this.state.posts : null}
					</div>
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
