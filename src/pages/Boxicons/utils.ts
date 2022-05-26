export const getPrefix = (type: string) => {
  switch (type) {
    case "SOLID":
      return "bxs";
    case "REGULAR":
      return "bx";
    case "LOGO":
      return "bxl";
    default:
      return "bx";
  }
};
