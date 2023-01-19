import React from "react";
import { act, screen } from "@testing-library/react";
import MainPage from "./MainPage";
import { renderWithProviders } from "../../utils/test-utils";
import userEvent from "@testing-library/user-event";
import { server } from "moks/server";

describe("Main page", () => {
  test("renders", async () => {
    await act(async () => {
      renderWithProviders(<MainPage />);
    });
    const title = screen.getByText(/colors/i);
    expect(title).toBeInTheDocument();
  });
});

describe("Products", () => {
  test("renders", async () => {
    await act(async () => {
      renderWithProviders(<MainPage />);
    });
    const title = screen.getByText(/name/i);
    expect(await title).toBeInTheDocument();
  });
});
describe("Pagination", () => {
  test("renders", async () => {
    await act(async () => {
      renderWithProviders(<MainPage />);
    });
    const pagination = screen.getByTestId("pagination");
    expect(await pagination).toBeInTheDocument();
  });
});
describe("ProductCard", () => {
  test("renders", async () => {
    await act(async () => {
      renderWithProviders(<MainPage />);
    });
    const title = screen.getByText(/green/i);
    expect(await title).toBeInTheDocument();
  });
});
describe("Filter input", () => {
  test("change value", async () => {
    await act(async () => {
      renderWithProviders(<MainPage />);
    });
    const input = screen
      .getByTestId("input")
      .querySelector("input") as HTMLInputElement;
    expect(input).toBeInTheDocument();
    server.close();
    userEvent.type(input, "2");
    expect(await input.value).toBe("2");
  });
  test("accept only number", async () => {
    await act(async () => {
      renderWithProviders(<MainPage />);
    });
    const input = screen
      .getByTestId("input")
      .querySelector("input") as HTMLInputElement;
    expect(input).toBeInTheDocument();
    server.close();
    userEvent.type(input, "we");
    expect(input.value).toBe("");
    expect(screen.getByText(/value must be a number/i)).toBeInTheDocument();
  });
});
