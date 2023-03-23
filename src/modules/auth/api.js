import { $api } from "../../services/http";

export async function loginService(authData) {
  const { data } = await $api.post("login", authData);
  localStorage.setItem("token", data.token);
  return data;
}

export async function regService(authData) {
  const { data } = await $api.post("reg", authData);
  localStorage.setItem("token", data.token);
  return data;
}