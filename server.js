require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const HttpStatusCode = require("./common/httpStatusCodes");
const operationalApiController = require("./controllers/operationalApiController");
const tvSearchController = require("./controllers/tvSearchController");
const tvShowsController = require("./controllers/tvShowsController");
const userAuthController = require("./controllers/userAuthController");
const PORT = process.env.PORT || 80;

mongoose
  .connect(process.env.CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true });

console.log(`Connecting with ${process.env.PORT}`);

app
  .use(cors())
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .get("/search/shows/:query", tvSearchController.searchTvShows)
  .get("/shows/:userId", tvShowsController.getUserShows)
  .put("/shows/:userId", tvShowsController.updateUserShows)
  .post("/login", userAuthController.loginUser)
  .post("/logout", userAuthController.logoutUser)
  .post("/updates", operationalApiController.getShowUpdates)
  .use("*", (req, res) => res.status(HttpStatusCode.CLIENT_ERROR_NOT_FOUND).send("Resource not found!"))
  .use((error, req, res, next) => res.status(HttpStatusCode.SERVER_ERROR).send(`The server encountered a problem....bleep bloop ... ${error.message}`))
  .listen(PORT, () => console.log(`listening on ${PORT}`));
