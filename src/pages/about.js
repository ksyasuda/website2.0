import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import classes from "./blog.module.css"
import Neofetch from "../components/neofetch"
import JapanPic from "../components/JapanPic/JapanPic"

export default function about() {
	return (
		<Layout height={"150vh"}>
			<SEO
				title='About-Me'
				description='A page dedicated to all things about me including my personal life, my computer science background, my personal setup in terms of desktop setup, laptop setup, linux setup, etc'
			/>
			<div style={{ overflowX: "hidden" }}>
				<h1
					style={{
						position: "relative",
						left: "6px",
					}}
				>
					About Me
				</h1>
				<JapanPic />
				<div className={classes.AboutContainer}>
					<p className={classes.AboutParagraph}>I'm Kyle Yasuda,</p>
					<p className={classes.AboutParagraph}>
						A Senior Computer Science major at the University of
						Michigan - Ann Arbor.
					</p>
					<p className={classes.AboutParagraph}>
						I was born and raised in a relatively small town in
						Southern California called La Cañada. It was during my
						sophomore year at La Cañada High School when I took my
						first formal programming course, Honors C++. Since then,
						I've taken at least one, typically two, computer science
						courses per semester. That includes my Junior and Senior
						years of High School, in which I took AP Java and Honors
						Python respectively.
					</p>
					<p className={classes.AboutParagraph}>
						For my first three years at Michigan, I programmed
						almost exclusively in C/C++ and as a result, I am most
						comfortable with C++. I say almost exclusively becuase I
						took a course in my Junior year that covered many
						different topics in computer science including Bash
						scripting and Python.
					</p>
					<p className={classes.AboutParagraph}></p>
				</div>
				{/* <Neofetch style={{ width: "60%", left: "20%" }} /> */}
			</div>
		</Layout>
	)
}
