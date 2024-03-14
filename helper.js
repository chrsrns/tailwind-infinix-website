const isDev = () => {
  return process.env.DEVELOPMENT;
};

const getUrl = (url = "/") => {
  return `${isDev() ? "" : "/tailwind-infinix-website"}${url}`;
};

module.exports = { isDev, getUrl };
