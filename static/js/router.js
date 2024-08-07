const isDev =
  location.hostname === "localhost" || location.hostname === "127.0.0.1";

// if (isDev) alert("This is in a local dev server.");

const routes = {
  404: {
    template: "tailwind-infinix-website/static/templates/404.html",
    title: "404",
    description: "Page not found",
  },
  "/tailwind-infinix-website": {
    template: "/tailwind-infinix-website/static/home.html",
    title: "InfiniX - Realm of Gamers",
    description: "This is the home page",
  },
  "/tailwind-infinix-website/": {
    template: "/tailwind-infinix-website/static/home.html",
    title: "InfiniX - Realm of Gamers",
    description: "This is the home page",
  },
  "/tailwind-infinix-website/about": {
    template: "/tailwind-infinix-website/static/about.html",
    title: "InfiniX - About Us",
    description: "This is the about page",
  },
  "/tailwind-infinix-website/library": {
    template: "/tailwind-infinix-website/static/library.html",
    title: "InfiniX Library",
    description: "This is the contact page",
  },
};

const routesregex = {
  "^/tailwind-infinix-website/blog/[^/]+$": {
    template: "/tailwind-infinix-website/static/blog.html",
    title: "Blog",
    description: "This is the blog page",
  },
};

// create document click that watches the nav links only
document.addEventListener("click", (e) => {
  const { target } = e;
  console.log("clicked ", target);
  console.log("matches ", target.matches("a.navlink *"));
  if (!target.matches("a.navlink *")) {
    return;
  }
  e.preventDefault();
  route();
});

const setInnerHTML = (elm, html) => {
  elm.innerHTML = html;

  Array.from(elm.querySelectorAll("script")).forEach((oldScriptEl) => {
    const newScriptEl = document.createElement("script");

    Array.from(oldScriptEl.attributes).forEach((attr) => {
      newScriptEl.setAttribute(attr.name, attr.value);
    });

    const scriptText = document.createTextNode(oldScriptEl.innerHTML);
    newScriptEl.appendChild(scriptText);

    oldScriptEl.parentNode.replaceChild(newScriptEl, oldScriptEl);
  });
};

const route = (event) => {
  console.log("routing...");
  event = event || window.event; // get window.event if event argument not provided
  event.preventDefault();
  // window.history.pushState(state, unused, target link);

  window.history.pushState({}, "", event.target.closest("a.navlink"));
  locationHandler();
};

const locationHandler = async () => {
  const location = window.location.pathname; // get the url path
  // if the path length is 0, set it to primary page route
  if (location.length == 0) {
    location = "/";
  }

  const urlsplit = location.split("/");
  const urltrimmed = urlsplit.filter((n) => n);

  const trimmedurlconcat = "/" + urltrimmed.join("/");

  if (location !== trimmedurlconcat) {
    if (trimmedurlconcat !== "/tailwind-infinix-website") {
      console.log("trimming (" + trimmedurlconcat + ")...");
      setTimeout(function () {
        window.location.pathname = trimmedurlconcat;
      }, 5000);
    }
  }

  // get the route object from the urlRoutes object
  let route = (() => {
    for (let key of Object.keys(routesregex)) {
      if (new RegExp(key).test(location)) {
        return routesregex[key];
      }
    }
    return routes[location] || routes["404"] || blogregex.test(location);
  })();
  console.log("route: ", route);

  // get the html from the template
  const html = await fetch(route.template).then((response) => response.text());
  // set the content of the content div to the html
  setInnerHTML(document.getElementById("content"), html);
  // set the title of the document to the title of the route
  document.title = route.title;
  // set the description of the document to the description of the route; TODO implement metadata for this
  // document
  //   .querySelector('meta[name="description"]')
  //   .setAttribute("content", route.description);
};

// add an event listener to the window that watches for url changes
window.onpopstate = locationHandler;
// call the urlLocationHandler function to handle the initial url
window.route = route;
// call the urlLocationHandler function to handle the initial url
locationHandler();
