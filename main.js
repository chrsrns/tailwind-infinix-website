import { WebC } from "@11ty/webc";
import fs from "fs";
const COMPONENTS_DIR = "./components/**.webc";

function isDev() {
  return process.env.DEVELOPMENT;
}

const getUrl = (url = "/") => {
  return `${isDev() ? "" : "/tailwind-infinix-website"}${url}`;
};

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
let about = new WebC();
console.log("Compiling about.html");
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
