import http from "./httpService";

const apiEndPoint = "http://localhost:30900/api/auth";

export function login(email, password) {
  return http.post(apiEndPoint, { email, password });
}
