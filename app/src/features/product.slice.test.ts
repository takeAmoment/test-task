import { productReducer, setProduct } from "./product.slice";
import { ProductSliceState } from "types/types";

const product = {
  id: 1,
  color: "",
  name: "blue",
  year: 2000,
  pantone_value: "",
};

const initialState: ProductSliceState = {
  product: null,
  amountPages: 0,
  products: [],
  error: null,
  status: "idle",
};

describe("productSlice", () => {
  test("should return default state when passed empty action", () => {
    const result = productReducer(undefined, { type: "" });
    expect(result).toEqual(initialState);
  });
  test("should add product", () => {
    const action = { type: setProduct.type, payload: product };
    const result = productReducer(initialState, action);

    expect(result.product?.name).toBe("blue");
  });
});
