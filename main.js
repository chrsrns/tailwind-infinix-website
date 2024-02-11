import { WebC } from "@11ty/webc";
import fs from "fs";

// Compiling index.html
let page = new WebC();
const COMPONENTS_DIR = "./components/**.webc";
page.defineComponents(COMPONENTS_DIR);
page.setInputPath("./page.webc");

page.compile().then(({ html, css, js, components }) => {
  fs.writeFile("./index.html", html, (err) => {
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
  fs.writeFile("./library.html", html, (err) => {
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
  fs.writeFile("./about.html", html, (err) => {
    if (err) {
      console.log({ err });
    }
  });
});
