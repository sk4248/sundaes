import { rest } from "msw";

export const handlers = [
  rest.get("http://localhost:3030/scoops", (req, res, ctx) => {
    return res(
      ctx.json([
        { name: "Chocolate", imagePath: "images/chocolate.png" },
        { name: "Vanilla", imagePath: "images/vanilla.png" }
      ])
    );
  }),
  rest.get("http://localhost:3030/toppings", (req, res, ctx) => {
    return res(
      ctx.json([
        { name: "Chocolate", imagePath: "images/cherries.png" },
        { name: "M&M", imagePath: "images/m-and-m.png" },
        { name: "Hot Fudge", imagePath: "images/hot-fudge.png" }
      ])
    );
  })
];
