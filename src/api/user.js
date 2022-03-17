import { get, post } from "./request.js";

export const login = (username, password) => {
  return post("/users/login", { username, password });
};

export const search = (paging) => {
  return get("/users/", { params: paging });
};

export const create = (user) => {
  return post("/users", user);
};
