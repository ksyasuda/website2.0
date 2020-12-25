import React from "react"
import SEO from "../components/seo"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import classes from "./blog.module.css"
// import * as colors from "../components/colors"

const blog = ({ data }) => {
	//   console.log(data)
	const RED = "#eb4034"
	const ORANGE = "#cc5500"
	const YELLOW = "#FFCB05"
	const GREEN = "#97e396"
	const BLUE = "#1e90ff"
	const PINK = "#f018af"
	const PURPLE = "#9609bd"
	const vcolors = [RED, ORANGE, YELLOW, GREEN, BLUE, PINK, PURPLE]
	let lastColor = null
	let numPosts = data.allMarkdownRemark.edges.length
	let height = 50 * numPosts + 5 * numPosts
	height = height + "vh"
	return (
		<Layout height={height}>
			<SEO
				title='Blog'
				description='A blog where I can showcase my personal projects, showcase my setup, and talk about interesting topics in computer science and technology'
			/>
			<>
				<h1 className={classes.BlogPosts}>Blog Posts</h1>
				<h4 className={classes.numPosts}>
					{data.allMarkdownRemark.totalCount} Posts
				</h4>
				<div className={classes.BlogPostsContainer}>
					{data.allMarkdownRemark.edges.map(({ node }) => {
						let random_num = Math.floor(
							Math.random() * Math.floor(vcolors.length)
						)
						let color = vcolors[random_num]
						while (lastColor && lastColor === color) {
							random_num = Math.floor(
								Math.random() * Math.floor(vcolors.length)
							)
							color = vcolors[random_num]
						}
						lastColor = color
						return (
							<div className={classes.PostsCont} key={node.id}>
								<Link
									to={node.fields.slug}
									className={classes.link}
									style={{
										backgroundColor: color,
									}}
								>
									<div
										key={node.id}
										style={{ backgroundColor: color }}
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
												{node.frontmatter.date} |{" "}
												<span className={classes.Subject}>
													{node.frontmatter.subject}
												</span>{" "}|{" "}
											</span>
											<span style={{fontSize: 'small', fontWeight: 'bold'}}>{node.timeToRead} min read</span>
											<hr className={classes.Line} />
										</h3>
										<p className={classes.Body}>
											{node.excerpt}
										</p>
									</div>
								</Link>
							</div>
						)
					})}
				</div>
			</>
		</Layout>
	)
}

export const query = graphql`
	query {
		allMarkdownRemark(sort: { fields: [frontmatter___id], order: DESC }) {
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
					timeToRead
					fields {
						slug
					}
				}
			}
		}
	}
`

export default blog
