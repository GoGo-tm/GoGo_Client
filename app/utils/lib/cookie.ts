import { createCookie } from "@remix-run/node";

const cookieOptions = {
  expires: new Date(Date.now() + 60_000),
  httpOnly: true,
  maxAge: 60,
  secrets: [process.env.COOKIE_SECRET || "http://localhost:3000"],
  secure: true,
};

const setCookie = (name: string) => {
  const cookie = createCookie(name, cookieOptions);
  return cookie;
};

export {};
