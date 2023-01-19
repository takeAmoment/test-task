import { render, screen } from "@testing-library/react";
import React from "react";
import Footer from "./Footer";

describe("Footer", () => {
  test("renders", () => {
    render(<Footer />);
    const author = screen.getByText(/aliaksandra/i);
    expect(author).toBeInTheDocument();
    expect(screen.getByRole("list")).toBeInTheDocument();
  });
});
