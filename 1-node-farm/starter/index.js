const fs = require("fs");
const http = require("http");
// const url = require("url");

////////////////////////////////////////////////
//FILE SYSTEM MODULE

// Synchronous file reading and writing in Node.js
// const textIn = fs.readFileSync("./txt/input.txt", "utf-8");

// console.log(textIn);

// const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`;
// fs.writeFileSync("./txt/output.txt", textOut);
// console.log("File written successfully!");

// Asynchronous file reading and writing in Node.js

// fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
//   if (err) return console.error("Error reading start.txt:", err);
//   fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
//     console.log(data2);
//     fs.readFile("./txt/append.txt", "utf-8", (err, data3) => {
//       console.log(data3);

//       fs.writeFile("./txt/final.txt", `${data2}\n${data3}`, "utf-8", (err) => {
//         console.log("Your file has been written successfully!");
//       });
//     });
//   });
// });
// console.log("Reading file asynchronously...");

/////////////////////////////////////////////
// Creating a simple HTTP server in Node.js

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const productData = JSON.parse(data);

const server = http.createServer((req, res) => {
  console.log(req.url);

  const pathname = req.url;

  if (pathname === "/" || pathname === "/overview") {
    res.end("This is the overview page.");
  } else if (pathname === "/product") {
    res.end("This is the product page.");
  } else if (pathname === "/api") {
    res.writeHead(200, {
      "content-type": "application/json",
    });
    res.end(data);
  } else {
    res.writeHead(404, {
      "content-type": "text/html",
    });
    res.end("<h1>Page not found!</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Server is running on port 8000");
});
