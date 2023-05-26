import http from "./httpService";

const apiEndPoint = "http://localhost:30900/api/users";

export function register(user) {
  return http.post(apiEndPoint, {
    email: user.username,
    password: user.password,
    name: user.name,
  });
}
