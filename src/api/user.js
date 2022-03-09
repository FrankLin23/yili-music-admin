import { post } from "./request.js";

export const login = (username, password) => {
  return post("/login", { username, password });
};
