import React from "react"
import { Link } from "gatsby"
import classes from "./navbar.module.css"
import Button from "@material-ui/core/Button"
import HomeIcon from "@material-ui/icons/Home"
import CreateIcon from "@material-ui/icons/Create"
import AccountCircleIcon from "@material-ui/icons/AccountCircle"
import FlightIcon from "@material-ui/icons/Flight"

const navbar = ({ data, clicked }) => {
	//   let stuff = [classes.Link, classes.ListItem]

	let style = {
		textDecoration: "none",
		color: "rgba(192, 97, 19, 0.945)",
		fontWeight: "bold",
		textAlign: "center",
		fontSize: "x-large",
		postition: "relative",
	}

	return (
		<div className={classes.Div}>
			<ul className={classes.List}>
				<li className={classes.ListItem}>
					<Link onClick={clicked} className={classes.Link} to='/'>
						<Button
							startIcon={
								<HomeIcon style={{ color: "dodgerblue" }} />
							}
							className={classes.Button}
							style={style}
						>
							HOME
						</Button>
					</Link>
				</li>
				<li className={classes.Divider}>|</li>
				<li className={classes.ListItem}>
					<Link
						onClick={clicked}
						className={classes.Link}
						to='/about/'
					>
						<Button
							startIcon={
								<AccountCircleIcon
									style={{ color: "dodgerblue" }}
								/>
							}
							className={classes.Button}
							color='secondary'
							style={style}
						>
							ABOUT
						</Button>
					</Link>
				</li>
				<li className={classes.Divider}>|</li>
				<li className={classes.ListItem}>
					<Link
						onClick={clicked}
						className={classes.Link}
						to='/blog/'
					>
						<Button
							startIcon={
								<CreateIcon style={{ color: "dodgerblue" }} />
							}
							className={classes.Button}
							color='secondary'
							style={style}
						>
							BLOG
						</Button>
					</Link>
				</li>
				<li className={classes.Divider}>|</li>
				<li className={classes.ListItem}>
					<Link
						onClick={clicked}
						className={classes.Link}
						// to="https://sudacode-travelapp.herokuapp.com"
						to='/travel/'
					>
						<Button
							startIcon={
								<FlightIcon style={{ color: "dodgerblue" }} />
							}
							className={classes.Button}
							color='secondary'
							style={style}
						>
							TRAVEL
						</Button>
					</Link>
				</li>
			</ul>
		</div>
	)
}

export default navbar
