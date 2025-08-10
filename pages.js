const ghpages = require("gh-pages");
const pathname = `${__dirname}/build`;
const repoURL = "Muhammad-uzair029.github.io/portfolio";

https: ghpages.publish(
  pathname,
  {
    branch: "main",
    repo: repoURL,
  },
  (err) => {
    if (err) console.log("ERROR: ", err);
    else console.log("PUBLISHED");
  }
);
