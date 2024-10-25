const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.method == "GET" && req.url == "/home") {
    fs.readFile("./db.json", "utf-8", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.end(data);
      }
    });
  } else if (req.method == "POST" && req.url == "/about") {
    let str = "";
    req.on("data", (chunk) => {
      str += chunk;
    });
    req.on("end", () => {
      fs.readFile("./db.json", "utf-8", (err, data) => {
        if (err) {
          console.log(err);
        } else {
          let newdata = JSON.parse(data);
          newdata.push(JSON.parse(str));
          fs.writeFile("./db.json", JSON.stringify(newdata), (err) => {
            if (err) {
              console.log(err);
            } else {
              console.log("Data saved successfully.");
              res.end("Data saved successfully.");
            }
          });
        }
      });
    });
  }
});

server.listen(8080, () => {
  console.log("Server is running on port 8080");
});
