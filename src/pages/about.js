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
						years of High School where I took AP Java and Honors
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
					<p className={classes.AboutParagraph}>
						This past summer, as a result of Covid-19, I was unable
						to participate in a summer internship and as a result I
						decided to spend the summer learning web development,
						and specifically React.js. I have always had an interest
						in web development, but lacked the time and motivation
						to commit myself to learning how to build websites. This
						is in part due to the fact that for three years at
						Michigan, the only programs that I wrote were C++
						command line applications. I also knew that C++ is not a
						language that people generally create websites with
						(although you can do it). Because of those two reasons I
						decided to branch out, try something new, and experience
						some new software. The only question was: React,
						Angular, or Vue. After doing some initial research I
						quickly decided not to learn Angular becuase of the need
						to learn typescript as well. I do plan on learning
						typescript eventually for use in React applications,
						however, because I had no prior experience with HTML,
						CSS, or JavaScript, I decided hold off on learning
						typescript until after I learned JavaScript. The reason
						that I went with React over Vue was simply because React
						is larger and has more users than Vue. The advantage of
						this is that there are many third-party libraries,
						components, and tools that are easy to find and
						integrate into your own project. Another advantage of
						having a large user base is that any problem you come
						across is likely to have been seen and solved by someone
						on the internet before.
					</p>
					<p className={classes.AboutParagraph}>
						Once I made the decision to learn React, I followed a
						simple process to incrementally learn something in
						React, like props, hooks, or API calls, then creating a
						small react app using what I had learned. I feel that
						hands on experience building things using the concepts
						and features that a large framework like React has
						really helped me learn more than studying documentation.
						Eventually, I put it all together to create this
						website, which is the culmination of three and a half
						projects I worked on this summer (I will go into more
						detail about why three and a half in a future blog
						post). I used the plethora of free material available
						online that teach you the concepts and provide conrecte
						examples of the concepts in use, as well as reading
						through the official documentation, which is something
						that I still refrence frequently
					</p>
				</div>

				{/* <Neofetch style={{ width: "60%", left: "20%" }} /> */}
			</div>
		</Layout>
	)
}
