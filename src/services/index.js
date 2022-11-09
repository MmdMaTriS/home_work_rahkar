import http from "./http";
const BASE_URL = "https://reqres.in/api";

export function fetchUserAccount(body) {
  return http.post(BASE_URL + "/login", body);
}
export function fetchGetUserLists() {
  return http.get(BASE_URL + "/users?page=2");
}
