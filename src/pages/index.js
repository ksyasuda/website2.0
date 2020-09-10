import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Russell from "../components/russell"
import Charlie from "../components/charlie"
import classes from "./blog.module.css"
class IndexPage extends Component {
	state = {
		charlie: false,
	}

	onCharlieHandler = () => {
		this.setState({ charlie: !this.state.charlie })
	}

	render() {
		return (
			<Layout>
				<SEO title='Home' />
				<h1 style={{ color: "rebeccapurple" }}>
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
			</Layout>
		)
	}
}

export default IndexPage
