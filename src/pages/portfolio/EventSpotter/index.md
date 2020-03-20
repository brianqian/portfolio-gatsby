---
id: 4
title: 'EventSpotter'
date: '8/2019'
github: 'https://github.com/brianqian/eventspotter-react'
deployment: 'https://eventspotter.herokuapp.com'
stack:
  [
    'HTML',
    'CSS',
    'Typescript',
    'React',
    'NextJS',
    'styled-components',
    'Node',
    'Express',
    'AWS',
    'MySQL',
  ]
splashImg: './eventspotter.png'
---

EventSpotter is a platform that syncs with a user's Spotify account to find their top artists and generate an event calendar using the SeatGeek API. Users have access to their Spotify Library with access to advanced metrics like acousticness, instrumentalness, and more. Users can choose a metric to generate an event calendar that has ticket prices from SeatGeek.
<br><br/>
Evenspotter is a server-side rendered app using the NextJS framework. The app is separated into two repositories for the frontend and a backend API. The majority of the application uses the latest in React practices including functional components and hooks.
<br><br/>
On the backend project uses JWTs in cookies to authenticate the user across sessions. This project also features custom middleware, error handling, and a modified data structure (LRU cache) to cache users. Since Spotify's API is rate limited, each user's library is saved to a MySQL database hosted on AWS. When users navigate the site their libraries are either retrieved from the cache or the database.
