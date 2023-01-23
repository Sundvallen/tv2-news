import { Article } from "../types/api";

export const getThumbnailUrl = (data: Article): string => {
  // Temorary solution, need to be refactored
  if (data.content[0].type === "PICTURES") {
    return data.content[0].files[0].url;
  } else if (data.content[0].type === "VIDEO") {
    return data.content[0].data.thumbSrc;
  }
  return "";
};
