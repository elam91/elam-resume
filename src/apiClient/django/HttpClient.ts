import { Api, HttpClient } from "./Api";

const djangoApi = new Api({
  baseURL: import.meta.env.VITE_API_URL,
});

export default djangoApi;
