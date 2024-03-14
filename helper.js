const isDev = () => {
  return process.env.DEVELOPMENT;
};

export const getUrl = (url = "/") => {
  return `${isDev() ? "" : "/tailwind-infinix-website"}${url}`;
};
