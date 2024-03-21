import { WebC } from "@11ty/webc";
import fs from "fs";
import { getUrl } from "./helper.js";
const COMPONENTS_DIR = "./components/**.webc";

// Compiling index.html
console.log("Compiling index.html");
let index = new WebC();
index.setHelper("getUrl", getUrl);
index.defineComponents(COMPONENTS_DIR);
index.setInputPath("./pages/index.webc");
index.compile().then(({ html, css, js, components }) => {
  fs.writeFile("./index.html", html, (err) => {
    if (err) {
      console.log({ err });
    }
  });
});

// Compiling home.html
console.log("Compiling home.html");
let home = new WebC();
home.setHelper("getUrl", getUrl);
home.defineComponents(COMPONENTS_DIR);
home.setInputPath("./pages/home.webc");
home.compile().then(({ html, css, js, components }) => {
  fs.writeFile("./static/home.html", html, (err) => {
    if (err) {
      console.log({ err });
    }
  });
});

// Compiling library.html
console.log("Compiling library.html");
let library = new WebC();
library.setHelper("getUrl", getUrl);
library.defineComponents(COMPONENTS_DIR);
library.setInputPath("./pages/library.webc");
library.compile().then(({ html, css, js, components }) => {
  fs.writeFile("./static/library.html", html, (err) => {
    if (err) {
      console.log({ err });
    }
  });
});

// Compiling about.html
console.log("Compiling about.html");
let about = new WebC();
about.setHelper("getUrl", getUrl);
about.defineComponents(COMPONENTS_DIR);
about.setInputPath("./pages/about.webc");
about.compile().then(({ html, css, js, components }) => {
  fs.writeFile("./static/about.html", html, (err) => {
    if (err) {
      console.log({ err });
    }
  });
});

// Compiling blog.html
console.log("Compiling blog.html");
let blog = new WebC();
blog.setHelper("getUrl", getUrl);
blog.defineComponents(COMPONENTS_DIR);
blog.setInputPath("./pages/blog.webc");
blog.compile().then(({ html, css, js, components }) => {
  fs.writeFile("./static/blog.html", html, (err) => {
    if (err) {
      console.log({ err });
    }
  });
});

// Compiling fake 404.html router
console.log("Compiling fake 404.html router");
let fakeRouter = new WebC();
fakeRouter.setHelper("getUrl", getUrl);
fakeRouter.defineComponents(COMPONENTS_DIR);
fakeRouter.setInputPath("./pages/404-router.webc");
fakeRouter.compile().then(({ html, css, js, components }) => {
  fs.writeFile("./404.html", html, (err) => {
    if (err) {
      console.log({ err });
    }
  });
});
