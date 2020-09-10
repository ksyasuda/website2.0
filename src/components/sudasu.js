import React from "react"
//import cmdlineGif from "../images/sudasu-fixed2.gif"
import classes from "./sudasu.module.css"

const Sudasu = props => {
	return (
		<div className={classes.Div}>
			{/* <img alt='suda su' src={cmdlineGif} /> */}
			{props.children}
		</div>
	)
}

export default Sudasu
