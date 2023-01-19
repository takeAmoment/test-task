import { rest } from "msw";

export const handlers = [
  rest.get("https://reqres.in/api/products", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: [
          {
            id: 1,
            name: "yellow",
            color: "#ebf20f",
            year: 2022,
            pantone_value: "11-222",
          },
          {
            id: 2,
            name: "green",
            color: "#ebf20f",
            year: 2003,
            pantone_value: "11-232",
          },
          {
            id: 3,
            name: "yellow",
            color: "#ebf20f",
            year: 2022,
            pantone_value: "11-222",
          },
          {
            id: 4,
            name: "red",
            color: "#ebf20f",
            year: 2003,
            pantone_value: "11-232",
          },
          {
            id: 5,
            name: "black",
            color: "#ebf20f",
            year: 2022,
            pantone_value: "11-222",
          },
          {
            id: 6,
            name: "white",
            color: "#ebf20f",
            year: 2003,
            pantone_value: "11-232",
          },
        ],
      })
    );
  }),
];
