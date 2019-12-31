# Portfolio in Gatsby

- Each portfolio project has an index.md file
- Gatsby-node finds these index files and programatically generates static HTML for each page
- Within each project page GraphQL queries fetch portfolio images at build time and build individually routed portfolio pages.
- Each of these template pages have their own path and are independent of the Portfolio page.

This means that images must be fetched both for the portfolio _page_ and portfolio _template_
