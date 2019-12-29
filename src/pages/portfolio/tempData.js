const PortfolioData = [
  {
    title: "EventSpotter",
    stack: [
      "HTML/CSS (styled-components), React, NextJS, Node/Express, SQL, Jest",
      "Enzyme",
    ],
    description:
      "Eventspotter is a platform that syncs with a user's Spotify account to find their top artists and generate a calendar using the SeatGeek API. Evenspotter is a server-side rendered app using the NextJS framework. The app is separated into two repositories for the frontend and a backend API. Currently the project uses JWTs in cookies to authenticate the user across logins. This project also features custom middleware, error handling, and a modified data structure to cache users. The majority of the application uses functional components and React Hooks",
    img1: "./img/screenshots/eventspotter-full.png",
    gitURL: "https://github.com/brianqian/eventspotter-react",
    deployURL: "http://eventspotter.herokuapp.com",
  },
  {
    title: "Websocket.io",
    stack: [
      "HTML",
      "CSS/Sass",
      "Javascript",
      "Typescript",
      "Node/Express",
      "Webpack",
      "Babel",
    ],
    description:
      "Websocket.io is a real-time chat application using the Websocket API. It started as a simple project to just learn Websocket technology but I decided to use this project to learn Typescript, Webpack, and Babel. Since this was intended to be small all DOM manipulation is in vanilla Javascript with plans to further refactor into React.",
    img1: "./img/screenshots/websocketio-full.png",
    gitURL: "https://github.com/brianqian/websocket.io",
    deployURL: "http://bq-chat.herokuapp.com",
  },
  {
    title: "nSuns Calculator",
    stack: [
      "HTML",
      "CSS",
      "Javascript",
      "React",
      "Redux",
      "Node/Express",
      "SQL",
      "Jest",
      "Enzyme",
    ],
    description:
      "This is a React/Redux calculator app for the nSuns workout program. Features include interchangeable training and rep maxs, rest timer, workout tracker, and a customizable accessory tracker. The app uses JWT (JSON Web Tokens) to persist user authorization and bcrypt for password hashing",
    img1: "./img/screenshots/nsuns-full.png",
    gitURL: "https://github.com/brianqian/nsuns-react",
    deployURL: "http://nsuns-app.herokuapp.com",
  },
  {
    title: "Google Books API",
    stack: ["HTML", "CSS", "Javascript", "React", "Node", "Jest", "Enzyme"],
    description:
      "An application that uses the Google Books API for a primary search and cross references searches with Wikipedia's API and Amazon's search. This project is built in React with a Node backend with tests written in Jest/Enzyme",
    img1: "./img/screenshots/books-full.png ",
    gitURL: "https://github.com/brianqian/8thlight-react",
    deployURL: "http://bq-8thlight-react.herokuapp.com",
  },
  {
    title: "SnackTime",
    stack: [
      "HTML",
      "CSS",
      "Javascript",
      "React",
      "Node/Express",
      "SQL",
      "Material-UI",
    ],
    description:
      "Responsible for: building our reused custom components and handling user authentication on the front end. Snacktime is a solution for busy parents and daycares by creating an easy way to share and log information. Uses session storage to persist user login. Test login: admin@example.org / password",
    img1: "./img/screenshots/snacktime-full.png",
    gitURL: "https://github.com/brianqian/SnackTime",
    deployURL: "http://timetosnack.herokuapp.com",
  },
  {
    title: "DevLab",
    stack: ["HTML", "CSS", "Javascript", "jQuery", "Node/Express", "SQL"],
    description:
      "Responsible for: strategy and front end structure, API calls, database models. DevLab is a collaborative resource dedicated to help people learn web development. Resources are pooled into a library where individual users can save content to their own library. Each time content is saved, it's ranked to provide easy access to the most popular resources. Test login: admin@example.org / password",
    img1: "./img/screenshots/devlab-full.png",
    gitURL: "https://github.com/sajeelmalik/Dev-Lab",
    deployURL: "http://devlab.herokuapp.com/",
  },
];

export default PortfolioData;
