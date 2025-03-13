export const getSiteColor = (url: string): string => {
  if (url.includes("market")) {
    return "#E14165";
  }
  if (url.includes("delivery")) {
    return "#C2C2FF";
  }
  if (url.includes("games")) {
    return "#8686FF";
  }
  return "#FFFFFF";
};

export const getColorDivStyles = (backgroundColor: string) => ({
  width: "4px",
  height: "70px",
  backgroundColor,
  borderRadius: "3px 0 0 3px",
});
