import type { NextPage } from "next/types";
import type { ReactElement, ReactNode } from "react";

type NextPageWithLayout<T> = NextPage<T> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export type { NextPageWithLayout };
