import React from "react"
import classes from "./Dates.module.css"

const dates = props => {
	// date.innerHTML = `<p><strong>${newStr}</strong></p>`
	return (
		<p className={classes.Dates}>
			<span className={classes.Span}>
				<strong>{props.day}</strong> at <strong>{props.time}</strong>
			</span>
		</p>
	)
}

export default dates
