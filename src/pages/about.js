import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import Neofetch from "../components/neofetch"
import Breadcrumbs from "@material-ui/core/Breadcrumbs"
import Button from "@material-ui/core/Button"
import GitHubIcon from "@material-ui/icons/GitHub"
import classes from "./blog.module.css"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import FacebookIcon from "@material-ui/icons/Facebook"
import RedditIcon from "@material-ui/icons/Reddit"
import CreateIcon from "@material-ui/icons/Create"

export default function about() {
	return (
		<Layout height={"150vh"}>
			<SEO
				title='About-Me'
				description='A page dedicated to all things about me including my personal life, my computer science background, my personal setup in terms of desktop setup, laptop setup, linux setup, etc'
			/>
			<div>
				<h1>About Me</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Beatae esse officiis autem commodi sint pariatur libero
					sequi natus suscipit quibusdam quidem quasi est, molestiae
					repellendus odit at alias. Est, debitis. Lorem ipsum dolor
					sit amet consectetur adipisicing elit. In quisquam
					architecto a nemo harum corrupti minus, laudantium rerum
					eveniet ipsum aliquid! Magnam saepe libero earum in minus
					ducimus voluptatum quae.
				</p>
				<Neofetch style={{ width: "60%", left: "20%" }} />
			</div>
			<Breadcrumbs
				className={classes.Breadcrumbs}
				aria-label='breadcrumb'
			>
				<a
					className={classes.Links}
					href='https://github.com/ksyasuda'
					target='_blank'
					rel="noreferrer"
				>
					<Button
						startIcon={<GitHubIcon />}
						color='primary'
						variant='text'
					>
						Github
					</Button>
				</a>
				<a
					className={classes.Links}
					href='https://linkedin.com/in/kyle-yasuda-7a81b415b'
					target='_blank'
					rel="noreferrer"
				>
					<Button
						color='primary'
						variant='text'
						startIcon={<LinkedInIcon />}
					>
						LinkedIn
					</Button>
				</a>
				<a
					className={classes.Links}
					href='https://www.reddit.com/user/Freud_Team6'
					target='_blank'
					rel="noreferrer"
				>
					<Button
						color='primary'
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
					rel="noreferrer"
				>
					<Button
						color='primary'
						variant='text'
						startIcon={<FacebookIcon />}
					>
						Facebook
					</Button>
				</a>
				<Link className={classes.Links} to='/blog/'>
					<Button
						color='primary'
						variant='text'
						startIcon={<CreateIcon />}
					>
						Blog
					</Button>
				</Link>
			</Breadcrumbs>
		</Layout>
	)
}
