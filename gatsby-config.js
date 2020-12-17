const path = require("path")

module.exports = {
	siteMetadata: {
		title: `Sudacode`,
		description: `A personal blog/portfolio to show off my peronal projects as well as blog about topics in technology and computer science as a whole that I find interesting.  All while trying to help others learn more about the topics at the same time.`,
		author: `@Kyle Yasuda - Sudacode`,
		lang: "en-US",
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/suda-circle.png`, // This path is relative to the root of the site.
			},
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "src",
				path: `${__dirname}/src/`,
			},
		},
		{
			resolve: "gatsby-transformer-remark",
		},
		{
			resolve: "gatsby-plugin-web-font-loader",
			options: {
				google: {
					families: ["Open Sans", "Roboto"],
					//   urls: ["./public/static/fonts/fonts.css"],
				},
			},
		},
		{
			resolve: "gatsby-plugin-react-leaflet",
			options: {
				linkStyles: true, // (default: true) Enable/disable loading stylesheets via CDN
			},
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	],
}
