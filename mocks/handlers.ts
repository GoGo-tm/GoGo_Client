import { rest } from "msw";

export const handlers = [
  rest.get("/book", (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        title: "Lord of the Rings",
        imageUrl: "/book-cover.jpg",
        description:
          "The Lord of the Rings is an epic high-fantasy novel written by English author and scholar J. R. R. Tolkien.",
      })
    );
  }),
];
