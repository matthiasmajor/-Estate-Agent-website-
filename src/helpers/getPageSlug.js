import slugify from "slugify";

export const getPageSlug = (address) =>
  `/Realizacje/${slugify(address.toLowerCase())}`;
