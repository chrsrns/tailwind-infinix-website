import { WebC } from "@11ty/webc";
import fs from "fs";
const COMPONENTS_DIR = "./components/**.webc";

// Compiling index.html
let index = new WebC();
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
let home = new WebC();
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
let library = new WebC();
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
about.defineComponents(COMPONENTS_DIR);
about.setInputPath("./pages/about.webc");

about.compile().then(({ html, css, js, components }) => {
  fs.writeFile("./static/about.html", html, (err) => {
    if (err) {
      console.log({ err });
    }
  });
});
