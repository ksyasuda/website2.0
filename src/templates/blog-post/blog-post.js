import React from "react"
import Layout from "../../components/layout"
import { graphql, Link } from "gatsby"
import classes from "./blog-post.module.css"
import SEO from "../../components/seo"
import Fab from "@material-ui/core/Fab"
import NavigationIcon from "@material-ui/icons/Navigation"

const blogPost = ({ data }) => {
	const post = data.markdownRemark
	let height = post.frontmatter.default_height
	// if (
	// 	typeof window !== "undefined" &&
	// 	window.screen.height < 1080 &&
	// 	window.screen.height > 600
	// ) {
	// 	height = post.frontmatter.laptop_height
	// }

	// if (typeof window !== "undefined" && window.screen.width < 600) {
	// 	height = post.frontmatter.phone_height
	// }
	return (
		<Layout height={height} isBlog={true} id='top-of-page'>
			<SEO
				title={post.frontmatter.title}
				description={post.frontmatter.description}
				lang='en=US'
			/>
			<div className={classes.blog_container}>
				<div id='top-of-page' className={classes.container}>
					<Link className={classes.link} to='/blog'>
						<span
							style={{
								fontSize: "50px",
								position: "relative",
								top: "20px",
								left: "-15px",
							}}
							role='img'
							aria-label='back'
						>
							🔙
						</span>{" "}
						{/* to Blog */}
					</Link>
				</div>
				<h1 className={classes.title}>{post.frontmatter.title}</h1>
				<div
					className={classes.blogPost}
					dangerouslySetInnerHTML={{ __html: post.html }}
				/>
			</div>
		</Layout>
	)
}

export const query = graphql`
	query($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			html
			frontmatter {
				title
				default_height
				laptop_height
				phone_height
				subject
			}
		}
	}
`

export default blogPost
