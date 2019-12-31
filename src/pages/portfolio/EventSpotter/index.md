---
title: "EventSpotter"
date: "8/2019"
github: "https://github.com/brianqian/eventspotter-react"
deployment: "http://eventspotter.herokuapp.com"
stack: "placeholder"
splashImg: "./eventspotter.png"
---

Eventspotter is a platform that syncs with a user's Spotify account to find their top artists and generate a calendar using the SeatGeek API. Evenspotter is a server-side rendered app using the NextJS framework. The app is separated into two repositories for the frontend and a backend API. Currently the project uses JWTs in cookies to authenticate the user across logins. This project also features custom middleware, error handling, and a modified data structure to cache users. The majority of the application uses functional components and React Hooks.