import React from "react"
import classes from "./Loc.module.css"

const loc = props => {
	// loc.innerHTML = `<p><strong>Latitude:</strong> <span id="lat" className={classes.Lat}>${item.lat}</span> <strong>|</strong> <strong>Longitude:</Strong> <span className={classes.Lng} id="lon">${item.lng}</span>`;
	return (
		<p className={classes.Container}>
			<span className={classes.LatitudeCont}>
				<strong>Latitude:</strong>{" "}
				<span id='lat' className={classes.Lat}>
					{props.lat}
				</span>
			</span>{" "}
			<span className={classes.Divider}>
				<strong>|</strong>
			</span>{" "}
			<span className={classes.LongitudeCont}>
				<strong>Longitude:</strong>{" "}
				<span className={classes.Lng} id='lon'>
					{props.lng}
				</span>
			</span>
		</p>
	)
}

export default loc
