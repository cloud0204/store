import axios from "axios";

// User相關的 api
const userRequest = axios.create({
  baseURL: "https://cloud0204.cloudns.cl//api/admin/",
  // baseURL: "http://localhost:8099/api/admin/",
});

// User 相關的 api
export const apiUserLogin = (data) => userRequest.post("/login", data);
export const apiUserLogout = () => userRequest.post('/logout');
export const apiUserInit = () => userRequest.get('/users/default');

// category相關的 api
const categoryRequest = axios.create({
  baseURL: "https://cloud0204.cloudns.cl//category/",
});

// category 相關的 api
export const apiCategory = () => categoryRequest.get("/all");
export const apiCategoryAdd = (config) => categoryRequest.get("/add", config);
export const apiCategoryOne = (data) => categoryRequest.get(`id/${data}`);
export const apiCategoryRemove = (data, config) =>
  categoryRequest.get(`/remove/${data}`, config);
export const apiCategoryEdit = (data, config) =>
  categoryRequest.post("/update", data, config);

// Item相關的 api
const itemRequest = axios.create({
  baseURL: "https://cloud0204.cloudns.cl//item/",
});

// Item 相關的 api
export const apiItemAll = () => itemRequest.get("/all");
export const apiItemAdd = (data, config) =>
  itemRequest.post("/add", data, config);
export const apiItemUpdate = (data, config) =>
  itemRequest.post("/update", data, config);
export const apiItemRemove = (data, config) =>
  itemRequest.get(`/remove/${data}`, config);
export const apiItemGetOne = (data) => itemRequest.get(`id/${data}`);
