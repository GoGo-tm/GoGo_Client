import { rest } from "msw";

export const handlers = [
  rest.get("https://test.com/user", (req, res, ctx) => {
    const user = {
      id: "31",
      author: "blan19",
    };
    return res(ctx.status(200), ctx.json(user));
  }),
];
