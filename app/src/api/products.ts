import axios from "axios";
import { IProductResponse, IResponse } from "types/types";
const baseUrl = "https://reqres.in/api/products";

export const getAllProductsApi = async () =>
  await axios.get<IResponse>(baseUrl);
export const getProductByIdApi = async (id: number) =>
  await axios.get<IProductResponse>(baseUrl + `?id=${id}`);
