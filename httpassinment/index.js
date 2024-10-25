const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.method == "GET" && req.url === "/home") {
    res.end("Welcome to home page ...");
  } else if (req.method == "GET" && req.url === "/about") {
    res.end("This is about page...");
  } else if (req.method == "GET" && req.url === "/getproductdata") {
    fs.readFile("./db.json", "utf-8", (err, data) => {
      if (err) {
        console.log("Error reading", err);
      } else {
        // console.log(data.products);
        res.end(data);
      }
    });
  } else if (req.method == "GET" && req.url === "/user") {
    fs.readFile("./db.json", "utf-8", (err, data) => {
      if (err) {
        console.log("Error reading", err);
      } else {
        // console.log(data.products);
        res.end(data);
      }
    });
  }
  console.log(res);
});

server.listen(8080, () => {
  console.log("Server is running on port 8080");
});
