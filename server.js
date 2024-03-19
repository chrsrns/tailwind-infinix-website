import http from "http";
import fs from "fs";
import path from "path";
import url from "url";
import { glob } from "glob";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer((req, res) => {
  // Splitting the URL by slashes
  const urlParts = req.url.split("/");
  // Remove the first item if it's blank
  const urlTrimmed = urlParts[0] === "" ? urlParts.slice(1) : urlParts;
  // Remove base URL for dev processing
  const urlBaseTrimmed =
    urlTrimmed[0] === "tailwind-infinix-website"
      ? urlTrimmed.slice(1)
      : urlTrimmed;
  // Output the parts
  const urlPartsConcat = "/" + urlBaseTrimmed.join("/");
  console.log("Trimmed: ", urlTrimmed);
  console.log("Concat: ", urlPartsConcat);

  if (urlTrimmed[0] === "tailwind-infinix-website")
    if (isStaticFile(urlPartsConcat)) {
      console.log("media");
      // Check if the requested URL matches a media file
      const mediaFile = getMediaFile(decodeURI(urlPartsConcat));
      if (mediaFile) {
        serveMediaFile(res, mediaFile);
      } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 Not Found");
      }
    } else {
      console.log("html");
      serveHTMLFile(res, "index.html");
      // serveHTMLFile(res, "404.html");
      // switch (req.url) {
      //   case "/":
      //     serveHTMLFile(res, "index.html");
      //     break;
      //   default:
      //     res.writeHead(302, { Location: "/" });
      //     res.end();
      //     break;
      // }
    }
  else {
    console.log("first part of url is NOT VALID");
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found");
  }
});

// Function to check if the requested URL corresponds to a static file
function isStaticFile(url) {
  return url.match("(/static/.+\\..+|/.+\\.(ico))");
}

// Function to match route using glob pattern
function getRoute(url) {
  const routes = glob.sync("*.html");
  const filename = path.basename(url);
  console.log("path: ", filename);
  const matchedRoute = routes.find((route) => {
    console.log("route", path.basename(route));
    return path.basename(route) === filename;
  });
  return matchedRoute ? matchedRoute : null;
}

// Function to serve HTML files
function serveHTMLFile(res, filename) {
  console.log(filename);
  fs.readFile(filename, (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Internal Server Error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    }
  });
}

// Function to match media files
function getMediaFile(url) {
  const filePath = path.join(__dirname, url);
  console.log("filepath ", fs.existsSync(filePath));
  if (fs.existsSync(filePath)) {
    return filePath;
  }
  return null;
}

// Function to serve media files
function serveMediaFile(res, filename) {
  fs.readFile(filename, (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Internal Server Error");
    } else {
      res.writeHead(200);
      res.end(data);
    }
  });
}

// Starting the server
const PORT = 3000;
server.listen(PORT, () => {
  console.log("env: ", process.env.DEVELOPMENT);
  console.log(`Server is running on port ${PORT}`);
});

export {};
