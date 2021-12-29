// const PORT = 4200;
// const axios = require("axios");
// const cheerio = require("cheerio");
// const express = require("express");
// const app = express();
// const cors = require("cors");
// app.use(cors());

// const url = "https://www.eventbrite.com/d/mo--st-louis/all-article/";

// app.get("/", function (req, res) {
//   res.json("This is my webscraper");
// });

// app.get("/results", (req, res) => {
//   axios(url)
//     .then((response) => {
//       const html = response.data;
//       const $ = cheerio.load(html);
//       const article = [];

//       $(".eds-event-card-content__title", html).each(function () {
//         //<-- cannot be a function expression
//         const title = $(this).text();
//         // const img = $(this).find("a").attr("href");
//         // const desc =  $(this).find("div").attr(".card-text--truncated__onetext");
//         const url = $(this).find("a").attr("href");
//         article.push({
//           title,
//         //   img,
//         //   desc,
//           url

//         });

//       });
//       res.json(article);
//     })
//     .catch((err) => console.log(err));
// });

// app.listen(PORT, () => console.log(`server running on PORT ${PORT}`));

//

const PORT = 4200;
const axios = require("axios");
const cheerio = require("cheerio");
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const url = "https://explorestlouis.com/events/";

app.get("/", function (req, res) {
  res.json("This is my webscraper");
});

app.get("/results", (req, res) => {
  axios(url)
    .then((response) => {
      const html = response.data;
      const $ = cheerio.load(html);
      const articles = [];

      $(".tribe-events-list-event-title", html).each(function () {
        //<-- cannot be a function expression
        const title = $(this).text();
        const link = $(this).find("a").attr("href");
        articles.push({
          title,
          link,
        });
      });
      res.json(articles);
    })
    .catch((err) => console.log(err));
});

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`));

// const PORT = 4200
// const axios = require('axios')
// const cheerio = require('cheerio')
// const express = require('express')
// const app = express()
// const cors = require('cors')
// app.use(cors())

// const url = 'https://www.theguardian.com/us'

// app.get('/', function (req, res) {
//     res.json('This is my webscraper')
// })

// app.get('/results', (req, res) => {
//     axios(url)
//         .then(response => {
//             const html = response.data
//             const $ = cheerio.load(html)
//             const articles = []

//             $('.fc-item__title', html).each(function () { //<-- cannot be a function expression
//                 const title = $(this).text()
//                 const url = $(this).find('a').attr('href')
//                 articles.push({
//                     title,
//                     url
//                 })
//             })
//             res.json(articles)
//         }).catch(err => console.log(err))

// })

// app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))
