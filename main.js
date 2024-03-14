import { WebC } from "@11ty/webc";
import fs from "fs";
import { getUrl } from "./helper.js";
const COMPONENTS_DIR = "./components/**.webc";

let webc = new WebC();
webc.setHelper("getUrl", getUrl);
webc.defineComponents(COMPONENTS_DIR);

// Compiling index.html
console.log("Compiling index.html");
webc.setInputPath("./pages/index.webc");
webc.compile().then(({ html, css, js, components }) => {
  fs.writeFile("./index.html", html, (err) => {
    if (err) {
      console.log({ err });
    }
  });
});

// Compiling home.html
console.log("Compiling home.html");
webc.setInputPath("./pages/home.webc");
webc.compile().then(({ html, css, js, components }) => {
  fs.writeFile("./static/home.html", html, (err) => {
    if (err) {
      console.log({ err });
    }
  });
});

// Compiling library.html
console.log("Compiling library.html");
webc.setInputPath("./pages/library.webc");
webc.compile().then(({ html, css, js, components }) => {
  fs.writeFile("./static/library.html", html, (err) => {
    if (err) {
      console.log({ err });
    }
  });
});

// Compiling about.html
console.log("Compiling about.html");
webc.setInputPath("./pages/about.webc");
webc.compile().then(({ html, css, js, components }) => {
  fs.writeFile("./static/about.html", html, (err) => {
    if (err) {
      console.log({ err });
    }
  });
});
