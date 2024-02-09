import { WebC } from "@11ty/webc";
import fs from "fs";
let page = new WebC();
page.defineComponents("components/**.webc");
page.setInputPath("page.webc");
let { html, css, js, components } = await page.compile();
fs.writeFile("./index.html", html, (err) => {
  if (err) {
    console.log({ err });
  }
});
