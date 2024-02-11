const routes = {
  404: {
    template: "/tailwind-infinix-website/static/templates/404.html",
    title: "404",
    description: "Page not found",
  },
  "/": {
    template: "/tailwind-infinix-website/static/home.html",
    title: "Home",
    description: "This is the home page",
  },
  "/about": {
    template: "/tailwind-infinix-website/static/about.html",
    title: "About Us",
    description: "This is the about page",
  },
  "/library": {
    template: "/tailwind-infinix-website/static/library.html",
    title: "Contact Us",
    description: "This is the contact page",
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
  // get the route object from the urlRoutes object
  const route = routes[location] || routes["404"];
  // get the html from the template
  const html = await fetch(route.template).then((response) => response.text());
  // set the content of the content div to the html
  document.getElementById("content").innerHTML = html;
  // set the title of the document to the title of the route
};

// add an event listener to the window that watches for url changes
window.onpopstate = locationHandler;
// call the urlLocationHandler function to handle the initial url
window.route = route;
// call the urlLocationHandler function to handle the initial url
locationHandler();
