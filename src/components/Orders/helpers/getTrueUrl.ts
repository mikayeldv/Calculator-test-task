export const getTrueUrl = (url: string) => {
  if (url.includes("www")) {
    return url.slice(url.indexOf("w.") + 2);
  }

  return url.slice(url.indexOf("//") + 2);
};
