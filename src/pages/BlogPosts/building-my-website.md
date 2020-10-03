---
title: "Building This Website"
date: "9/20/20 12:15 AM"
subject: "Showcase"
default_height: "1480vh"
laptop_height: "2250vh"
phone_height: "2900vh"
---

## Introduction

This past summer I decided to take a break from C/C++, the languages that I had been using almost exclusively for the past three years at the University of Michigan, and get into web development. C/C++ are great languages, but it can be hard to share and show off projects to others who do not know how to use a Makefile, for instance. Projects built on the web are much more accessible and the results are, I would argue, more tangible to the average user. That is why I decided to get into web development, and specifically React.js.

<br />

---

<br />

## Sections

1. [Learning HTML, CSS, JavaScript, and Node.js](#basics)
2. [Building a Travel App with a Node.js Backend](#vanilla-travelapp)
3. [Learning React](#learn-react)
4. [Porting the app to React](#react)
5. [Attempting to Build my Website](#first-attempts)
6. [Gatsby Website 1.0](#first-website)
7. [Integrating my React Travel App Into my Website](#website2.0)

<br />

---

<br />

## Learning HTML, CSS, JavaScript, and Node.js <a name="basics"></a>

The first step to building a website was to learn the basics of HTML, css, and JavaScript

To start, I completed the HTML, CSS, and JavaScript [online w3schools web tutorials](https://www.w3schools.com/ "w3schools homepage")

I feel that the best way to learn and remember the conepts that I learned about in the web tutorials was to create small projects that implemented the concepts that I learned about.

The first web applications I wrote were done by following online tutorials for creating simple games such as tetris and snake in vanilla HTML, css, and JavaScript

These projects were good becuase they were structured, functional programs that helped me to understand how everything works together in web applications

<br />

### **Building the Vanilla Sudacode Travel App:** <a name="vanilla-travelapp"></a>

After I felt competent in the basics, I decided to create my first real project, a Travel Log Application

I wanted to build an application that could find and log my current location, for use while traveling, as well as have the ability to search for locations and log so I could add travel locations retroactively.

#### **Front End**

For the front end, I used [Leaflet.js](https://leafletjs.com/ "Leaflet homepage"), an open-source JavaScript library for interactive maps with [OpenStreetMap](https://www.openstreetmap.org/#map=4/38.01/-95.84 "Openstreetmap homepage") providing the tile layers.

The applications has two pages: the home page is for either searching for a location or getting the current location and then logging the location if desired.

![First Page](https://imgur.com/ZFdkSL6.png)

<p style="text-align: center; font-size: smaller; margin-bottom: 30px;">Content minimized to fully fit screen</p>

The second page is the All Locations page that dumps the content of the database in list format on the page, as well as creates markers and marks each location on a Leaflet map.

![Second Page](https://imgur.com/ot9GEtP.png)

<p style="text-align: center; font-size: smaller; margin-bottom: 30px;">Content minimized to fully fit screen (Markers not implemented at time of screenshot)</p>

#### **Back End**

In order to search for locations as well as keep a log of the locations, I decided to create a small [Express](https://expressjs.com/ "Express homepage")/[Node.js](https://nodejs.org/en/ "nodejs homepage") backend API and database ([nedb](https://github.com/louischatriot/nedb "nedb github page")) with endpoints for dealing with geoencoding and logging results

I used the JavaScript [navigator](https://developer.mozilla.org/en-US/docs/Web/API/Navigator) object to get the user's current location. This way, I was able to get the users latitude and longitude and create a marker at that location on the map.

That works great for finding the current location as the built-in navigator object can return the current latitude and longitude of the user. However, to support searching for a location by name, I needed to find a way to get geocoding, or the process of turning input text into a latitude/longitude location, working.

I decided to go with [Google's Geocoding API](https://developers.google.com/maps/documentation/geocoding/start?utm_source=google&utm_medium=cpc&utm_campaign=FY18-Q2-global-demandgen-paidsearchonnetworkhouseads-cs-maps_contactsal_saf&utm_content=text-ad-none-none-DEV_c-CRE_433476780433-ADGP_Hybrid+%7C+AW+SEM+%7C+SKWS+~+Geocoding-KWID_43700039136946645-aud-599437144768:kwd-341556977164-userloc_9031107&utm_term=KW_%2Bgeocoding-ST_%2Bgeocoding&gclid=Cj0KCQjwg8n5BRCdARIsALxKb95EJJpJd2RudnZGhyumiMkgBo2gNqy56cd36h9L5OBQ5Q0KrqBe_nEaAsP7EALw_wcB "Google Geocodin API Documentation"), which was as easy as signing up, receiving an API key, and making a GET request to the endpoint.

In my backend, I implement two different methods of geocoding. First is the traditional method of turning an input text into the corresponding latitude/longitude location. The method way was reverse-geocoding: taking a comma-separated latitude/longitude pair and finding the name of the geographic location represented by the coordinates.

![Geocode Enpoints](https://imgur.com/J3IQyYf.png)

Finally, I used express to serve the static files found in the `/public/` directory as well as listen for and incoming requests from the client

![Requires and Express](https://imgur.com/5LJd8k2.png)

<br />

---

<br />

## Learning React <a name="learn-react"></a>

While I enjoyed creating a project in vanilla HTML/CSS/JavaScript, I was definetly able to see some of the drawbacks as well as some of the benefits of frameworks such as React.

One of the major benefits of frameworks like React, Angular, or Vue is their component based structures, which allow for code reuse, something that is very difficult and sometimes impossible with vanilla HTML/CSS/JavaScript.

The appeal of being able to create components once and potentially using them on all future projects; or alternatively, find a component or React UI framework like [Material-UI](https://material-ui.com/ "Material-UI Homepage") that provide basically plug-and-play components to use in React applications.

Like with HTML/CSS/JavaScript, I started out with the [online w3schools web tutorials](https://www.w3schools.com/ "w3schools homepage") for React to learn the basics. After that I transitioned into reading the [official React documentation](https://reactjs.org/docs/getting-started.html "React docs"), which has many great explanations and examples.

After reading through the React documentation, I went straight into creating small React applications raning from a personal finances app to test blog. Once I had created enough smaller project and was satisfied, I was ready to move on to porting my Travel App to React

<br />

---

<br />

## Porting my Travel App to React <a name="react"></a>

The first issue I came across when trying to port my app over to React, was getting Leaflet to work with React.

The issue I had was that I needed to find out a way to include the Leaflet CSS file in my project so that the Leaflet map's tiles display correctly. The problem is that no actual HTML is written in a React application and it is all generated by webpack instead. As a result, there is nowhere to me to include the necessary link tag as seen below

```html
<link
	rel="stylesheet"
	href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
	integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
	crossorigin=""
/>
```

I could have added the link to the `index.html` generated by webpack after running `yarn build`, however, the link would be overwritten each time I build the website and I would have to manualy include the tag in that case

After about 10 minutes trying to find a workaround, I was quickly able to see one of the benefits of React. After searching "leaflet react" on Google, the first link led me to [React Leaflet](https://react-leaflet.js.org/ "React Leaflet Homepage"), which is a workaround created by [Paul Le Cam](htts://github.com/PaulLeCam "Paul Le Cam's GitHub") and is curretnly in V2, which worked perfectly in my React app.

While none of my functions involving Leaflet work natively with React Leaflet, the documentation for React Leaflet is pretty good and transitioning my existing code to use React Leaflet components was relatively painless, with the exception of getting marker groups to work

The server was able to remain relatively unchanged. The only thing I had to change was the path to pass to express.static(). Before, my HTML files were in the public directory, but now all static files will be in the build directory of the client after `yarn build` has been run

![server changes](https://imgur.com/38cm11z.png)

<p style="text-align: center; font-size: smaller; margin-bottom: 30px;">Path changed from './public' to './travel-app-client/build'</p>

<br />

#### **Troubles Deploying**

The most difficult part of this, for me at least, was deploying the project. It was very difficult finding a way to host both my Node.js backend along with the client on the same website.

I first tried using Firebase and integrating their Cloud Functions, but found it not to be exactly what I was looking, along with the fact that it would not necessarily be free to host my website on Firebase.

That's when I found [Heroku](https://www.heroku.com/home "Heroku Homepage"), which supports Node.js natively. To get Heroku to serve the static files in the `/public/` folder of my client, I had to rearrange my folder structure first.

The root folder for the project contained my server, `serer.js` and its own `package.json`/`yarn.lock`. The React Travel App is then a child of the root directory as seen below

![Folder Structure](https://imgur.com/PpuBz27.png)

<br />

Then I added a `heroku-postbuild` script to the server's `package.json` file to go into the client folder and run `yarn install && yarn build`

![server package.json](https://imgur.com/MXphqHQ.png)

Since this is a postbuild script, it will run after the Node server has been built and deployed. The script will install all necessary dependancies and generate the optimized production build to be served from Express

<br />

---

<br />

## Attempting to Build my Website <a name="first-attempts"></a>

During this time, I was also planning out my website and experimenting with different options for building the website

I experimented with:

-   Vanilla HTML/CSS/JavaScript
-   [Bootstrap](https://getbootstrap.com/ "Bootstrap Homepage")
-   [React Bootstrap](https://react-bootstrap.github.io/ "React Bootstrap Homepage")
-   [Create React App](https://reactjs.org/docs/create-a-new-react-app.html "Create React App Docs")
-   [Next.js](https://nextjs.org/ "Next.js Homepage")
-   [Gatsby.js](https://www.gatsbyjs.com/ "Gatsby Homepage")

Once I made the decision to learn React, I very quikcly abandoned my work in Bootstrap. Although Boostrap is, "The most popular HTML, CSS, and JS library in the world", I still felt limited somewhat in what I could do, and felt that I was using older technology

Because I had a little experience with Bootstrap, however, the next choice was to try out React Bootstrap. However after testing it out for a couple of days, I felt that I would be writing too much code with React Bootstrap and not end up really learning anything about React

Therefore, after a short stint messing around and ultimately deciding against Next.js, I ended up starting a new project from scratch with create-react-app

I had created the home page, about page, navbar, side-navigation, and backdrop for the website, and had just started building the blog page when I learned about Gatsby.js

<br />

---

<br />

## Gatsby Website 1.0 <a name="first-website"></a>

Gatsby is a React-based, Graphql powered static site generator. It uses a variety of plugins and a special folder structure like that of Next.js. Gatsby has a `components` folder and a `pages` folder wich each file in the `pages` folder automatically getting its own page accessible through the url or using the Gatsby Link component for same-site routing.

The simplified page creation, as well as Graphql integration makes building a website/blog much easier. Graphql makes it easy to access files and information and Gatsby allows me to generate blog posts and their corresponding pages at build time. Therefor all I have to do to create a new blog post is create a new markdown file in the `pages` directory as seen below

![tree pages](https://imgur.com/X0Y3xzE.png)

<br />

The real magic happens in the `gatsby-node.js` file provided by Gatsby.

Using the [Gatsby-source-filesystem plugin](https://www.gatsbyjs.com/plugins/gatsby-source-filesystem/ "Gatsby-source-filesystem Docs") for "sourcing data into your Gatsby application from your local filesystem", I create a node, with a slug, for each blog post in my filesystem

![gatsby-node-pt1](https://imgur.com/buuwiGT.png)

<br />

Then for each node found in the Graphql query, I create a page, using the slug generated in the previous step, and a template for blog posts

![gatsby-node-pt2](https://imgur.com/UOF1a4u.png)

<br />

Here is what the `templates/blog-post.js` looks like:

![template-1](https://imgur.com/fhXb2Ju.png)
![template-2](https://imgur.com/xCkQBLI.png)
![template-3](https://imgur.com/x4srYNi.png)

At this point, I had my website/blog in one project and the React Travel App in
another project. The next step was to consolidate both projects into one and
create a travel page on my website.

<br />

---

<br />

## Integrating my React Travel App into my Website <a name="website2.0"></a>

I decided to change the website here from version 1 to version 2 becuase it was at this
point where I discovered Material-ui, which I found much easier to use and to
use sparingly when compared to components from React Bootstrap. Once I found
Material-ui, I decided to modify my website to utilize Material-ui components
and icons as well integrate the travel app

Becuase the React Travel App is written in React and utilizes two class-based containers
for the two pages of the application, I came to the decision to make a
copy of the two containers on my website filesystem and create two separate pages
that return the components themselves as seen in the image below. Of course I
would also have to copy over any other components that are used in the
containers as well

![travel-page](https://i.imgur.com/nyVvoY8.png)

<p style="text-align: center; font-size: 14px;">I integrated the Map container straight into my travel page</p>

The only problem I encountered was that React Leaflet does not work natively in
Gatsby.js. Luckily, the [gatsby-plugin-react-leaflet exists](https://www.gatsbyjs.com/plugins/gatsby-plugin-react-leaflet/ "Gatsby Plugin React Leaflet Documentation"). After installing it with `yarn`
and adding the following lines to the `gatsby-config.js`, React Leaflet began working as
intended and the integration into my website was complete

```JavaScript
{
	resolve: 'gatsby-plugin-react-leaflet',
	options: {
    	linkStyles: true // (default: true) Enable/disable loading stylesheets via CDN
    }
}
```

<br />

---
