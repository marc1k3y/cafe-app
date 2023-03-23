import { $apiAuth } from "../../services/http";

export async function createCategoryService(request) {
  const { data } = await $apiAuth.post("create/category", request);
  return data;
}

export async function getCategoriesService() {
  const { data } = await $apiAuth.get("get/categories");
  return data;
}

export async function createPositionService(request) {
  const { data } = await $apiAuth.post("create/position", request);
  return data;
}

export async function getPositionsService() {
  const { data } = await $apiAuth.get("get/positions");
  return data;
}