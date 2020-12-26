import React from "react"
import SEO from "../components/seo"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import classes from "./blog.module.css"
// import * as colors from "../components/colors"

const blog = ({ data }) => {
	const RED = "#eb4034"
	const ORANGE = "#cc5500"
	const YELLOW = "#FFCB05"
	const GREEN = "#97e396"
	const BLUE = "#1e90ff"
	const PINK = "#f018af"
	const PURPLE = "#de0fd4"
	const LIGHTBLUE = "#55aebb"
	const FLAMEORANGE = "#fc8353"
	const SALMONIGUESS = '#d66169'
	const BRIGHTERGREEN = '#96d651'
	const PURP = '#a357d3'
	const MATHCOLOR = '#cead6f'
	const LIGHTERBLUE = '#579dd7'
	const SUPERGREEN = '#00ff7f'
	const vcolors = [
		RED,
		ORANGE,
		YELLOW,
		GREEN,
		BLUE,
		PINK,
		PURPLE,
		LIGHTBLUE,
		FLAMEORANGE,
		SALMONIGUESS,
		BRIGHTERGREEN,
		PURP,
		MATHCOLOR,
		LIGHTERBLUE,
	]
	
	const getRandomNum = () => {
		return Math.floor(Math.random() * Math.floor(vcolors.length))
	}

	const shuffleArray = (arr) => {
		for(let i = arr.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * i)
			const temp = arr[i]
			arr[i] = arr[j]
			arr[j] = temp
		}
	}
	let lastColor = null
	let numPosts = data.allMarkdownRemark.edges.length
	let height = 50 * numPosts + 5 * numPosts
	height = height + "vh"
	// get random starting point in array
	let count = getRandomNum() 
	// shuffle array of colors
	shuffleArray(vcolors)
	return (
		<Layout height={height}>
			<SEO
				title='Blog'
				description='A blog where I can showcase my personal projects and setup as well as talk about interesting topics in computer science and technology'
			/>
			<>
				<h1 className={classes.BlogPosts}>Blog Posts</h1>
				<h4 className={classes.numPosts}>
					{data.allMarkdownRemark.totalCount} Posts
				</h4>
				<div className={classes.BlogPostsContainer}>
					{data.allMarkdownRemark.edges.map(({ node }) => {
						const color = vcolors[count++ % vcolors.length]
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
												<span
													className={classes.Subject}
												>
													{node.frontmatter.subject}
												</span>{" "}
												|{" "}
											</span>
											<span
												style={{
													fontSize: "small",
													fontWeight: "bold",
												}}
											>
												{node.timeToRead} min{" "}
												<span
													className={classes.ReadStr}
												>
													read
												</span>
											</span>
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
