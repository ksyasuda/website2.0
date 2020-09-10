import React from "react"
import classes from "./SideNav.module.css"
import { Link } from "gatsby"
import Button from "@material-ui/core/Button"
import HomeIcon from "@material-ui/icons/Home"
import CreateIcon from "@material-ui/icons/Create"
import AccountCircleIcon from "@material-ui/icons/AccountCircle"
import FlightIcon from "@material-ui/icons/Flight"

const sideNav = props => {
	return props.show ? (
		<div>
			<Link to='/' className={classes.Sudacode}>
				Sudacode
			</Link>
			<div
				className={classes.Div}
				style={{ position: "relative", left: "-6.5%" }}
			>
				<ul className={classes.List}>
					<li className={classes.Title}>Navigation Menu</li>
					<li className={classes.Divider}>────────</li>
					<li className={classes.ListItem}>
						<Link className={classes.Link} to='/'>
							<Button
								startIcon={
									<HomeIcon style={{ color: "dodgerblue" }} />
								}
								className={classes.Button}
								style={{
									position: "relative",
									left: "-8px",
									color: "rgba(192, 97, 19, 0.945)",
									fontWeight: "bold",
									fontSize: "x-large",
								}}
							>
								HOME
							</Button>
						</Link>
					</li>
					<li className={classes.Divider}>────────</li>
					<li className={classes.ListItem}>
						<Link className={classes.Link} to='/about/'>
							<Button
								startIcon={
									<AccountCircleIcon
										style={{ color: "dodgerblue" }}
									/>
								}
								className={classes.Button}
								style={{
									position: "relative",
									left: "-3px",
									color: "rgba(192, 97, 19, 0.945)",
									fontWeight: "bold",
									fontSize: "x-large",
								}}
							>
								ABOUT
							</Button>
						</Link>
					</li>
					<li className={classes.Divider}>────────</li>
					<li className={classes.ListItem}>
						<Link className={classes.Link} to='/blog/'>
							<Button
								startIcon={
									<CreateIcon
										style={{ color: "dodgerblue" }}
									/>
								}
								className={classes.Button}
								style={{
									position: "relative",
									left: "-11px",
									color: "rgba(192, 97, 19, 0.945)",
									fontWeight: "bold",
									fontSize: "x-large",
								}}
							>
								BLOG
							</Button>
						</Link>
					</li>
					<li className={classes.Divider}>────────</li>
					<li className={classes.ListItem}>
						<Link
							className={classes.Link}
							// to="https://sudacode-travelapp.herokuapp.com"
							to='/travel/'
						>
							<Button
								startIcon={
									<FlightIcon
										style={{ color: "dodgerblue" }}
									/>
								}
								className={classes.Button}
								style={{
									position: "relative",
									left: "4px",
									color: "rgba(192, 97, 19, 0.945)",
									fontWeight: "bold",
									fontSize: "x-large",
								}}
							>
								TRAVEL
							</Button>
						</Link>
					</li>
					<li className={classes.Divider}>────────</li>
				</ul>
			</div>
		</div>
	) : null
}

export default sideNav
