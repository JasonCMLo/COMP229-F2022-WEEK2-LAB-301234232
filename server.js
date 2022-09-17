const connect = require("connect");

const server = connect();

const homeRoute = (req, res, next) => {
  res.setHeader("Content-type", "text/plain");
  res.end("Hello from NodeJS Application");
};

const htmlRoute = (req, res, next) => {
  res.setHeader("Content-type", "text/html");
  res.end("<h1>Hello from NodeJS Application as html</h1>");
};

const jsonRoute = (req, res, next) => {
  res.setHeader("Content-type", "application/json");
  res.end(JSON.stringify({ "message": "Hello from NodeJS Application as json" }));
};

server.use("/html", htmlRoute);
server.use("/json", jsonRoute);
server.use("/", homeRoute);

server.listen(3000);

console.log("Server running on port 3000");
