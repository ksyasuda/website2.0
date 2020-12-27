import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { Component } from "react"
import NavBar from "../navbar/navbar"
import SideDrawer from "../SideDrawer/SideDrawer"
import classes from "./header.module.css"
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle"

// const Header = ({ siteTitle }) => {
class Header extends Component {
	state = {
		show: false,
		loading: false,
	}

	onToggleMenuHandler = event => {
		// console.log(event, "toggling menu")
		this.setState({ show: !this.state.show })
		this.props.clicked()
	}

	render() {
		const { siteTitle } = this.props
		return (
			<header
				style={{ backgroundColor: "rebeccapurple", height: "95.834px" }}
			>
				<div
					style={{
						display: "flex",
						background: `rebeccapurple`,
						marginBottom: `-5px`,
						padding: "21.5px",
					}}
				>
					<div
						style={{
							float: "left",
						}}
					>
						<h1 className={classes.SiteTitle}>
							<Link
								to='/'
								style={{
									color: `dodgerblue`,
									textDecoration: `none`,
									width: "100%",
								}}
							>
								{siteTitle}
							</Link>
						</h1>
					</div>
					<div
						style={{
							float: "left",
							position: "relative",
							top: "12px",
						}}
					>
						<NavBar clicked={this.onLoadingHandler} />
						<SideDrawer
							show={this.state.show}
							clicked={this.onToggleMenuHandler}
						/>
					</div>
					<div
						style={{
							position: "relative",
						}}
					>
						<DrawerToggle clicked={this.onToggleMenuHandler} />
					</div>
				</div>
			</header>
		)
	}
}

Header.propTypes = {
	siteTitle: PropTypes.string,
}

Header.defaultProps = {
	siteTitle: ``,
}

export default Header
