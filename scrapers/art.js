const PORT = 4200;
const axios = require("axios");
const cheerio = require("cheerio");
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const url =
  "https://explorestlouis.com/events/?tribe_paged=1&tribe_event_display=list&tribe-bar-date=2021-12-28&tribe-bar-search=art";

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
