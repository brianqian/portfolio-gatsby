---
title: "Old Portfolio"
date: "4/2019"
github: "http://www.github.com"
deployment: "https://brianqian.com"
stack: ["HTML", "styled-components", "Javascript", "React"]
splashImg: "./oldportfolio.png"
---

This project is one of the only projects I have that features only a front-end. This taught me many specific front-end priorities like image optimization, parallax effects, and CSS animations. Images were manually edited to have different sizes and dimensions and would be served depending on the user's viewport by using the srcset tag.

The scroll effect on the navigation bar is done manually by mathematically calculating the user's scroll position. While building this project I discovered the Intersection Observer API which is used for animating the individual portfolio projects.

Each of the projects is stored in an object and the site automatically generates component pieces to fill the portfolio.

This current project in Gatsby takes an opinionated approach to achieve the same effect. Instead of using an object, projects have their own folder that stores their images and markdown files. During the build process, specific pages are turned into navigational endpoints. Image files are processed through Sharp and accessible through Gatsby Image. When the page is built, Gatsby uses GraphQL to retrieve data and turn them into optimized images and static HTML sans GraphQL queries in order to provide a better user experience.
