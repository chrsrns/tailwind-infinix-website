const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  // Handling different routes using a switch statement
  switch (req.url) {
    case "/":
      serveHTMLFile(res, "index.html");
      break;
    case "/about":
      serveHTMLFile(res, "about.html");
      break;
    case "/contact":
      serveHTMLFile(res, "contact.html");
      break;
    default:
      // Handling 404 Not Found for other URLs
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("404 Not Found");
      break;
  }
});

// Function to serve HTML files
function serveHTMLFile(res, filename) {
  fs.readFile(path.join(__dirname, filename), (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Internal Server Error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    }
  });
}

// Starting the server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
