import axios from "axios";
import { IProductResponse, IResponse } from "types/types";
const baseUrl = "https://reqres.in/api/products";

export const getAllProductsApi = async (page: number) =>
  await axios.get<IResponse>(baseUrl + `?page=${page}&per_page=5`);
export const getProductByIdApi = async (id: number) =>
  await axios.get<IProductResponse>(baseUrl + `?id=${id}`);
