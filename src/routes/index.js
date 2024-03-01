const newsRouter = require("./news");
const siteRouter = require("./site");
const loveRouter = require("./love");
const loginRouter = require("./login");
const registerRouter = require("./register");
const secretRouter = require("./secret");

function route(app) {
  app.use("/secret", secretRouter);
  app.use("/register", registerRouter);
  app.use("/login", loginRouter);
  app.use("/news", newsRouter);
  app.use("/love", loveRouter);
  app.use("/", siteRouter);
}

module.exports = route;
