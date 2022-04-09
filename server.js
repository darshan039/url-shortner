import {
  clearShortUrls,
  getShortUrls,
  postShortUrls,
} from "./services/shortUrl.js";

import express from "express";

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

app.get("/", async (req, res) => {
  const shortUrls = await getShortUrls();
  res.render("index", { shortUrls });
});

app.post("/shortUrls", async (req, res) => {
  await postShortUrls(req.body.fullUrl);
  res.redirect("/");
});

app.get("/:shortUrl", async ({ params: { shortUrl: reqShortUrl } }, res) => {
  const shortUrls = await getShortUrls();
  const shortUrl = shortUrls.filter((url) => url.shortUrl === reqShortUrl)[0];
  if (!shortUrl) return res.sendStatus(404);

  res.redirect(shortUrl.longUrl);
});

app.post("/clearShortUrls", async (req, res) => {
  await clearShortUrls();
  res.status(200);
});

app.listen(process.env.PORT || 5000);
