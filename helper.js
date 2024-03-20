const isDev = () => {
  return process.env.DEVELOPMENT === "true";
};

export const getUrl = (url = "/") => {
  return `${isDev() ? "" : "/tailwind-infinix-website"}${url}`;
};
