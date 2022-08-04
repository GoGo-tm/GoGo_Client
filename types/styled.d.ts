import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      sub: string;
      banner: {
        primary: string;
        sub: string;
      };
      gray: {
        light: string;
        medium: string;
        dense: string;
      };
    };
    fontSize: {
      // * Regular
      r1: string;
      r2: string;
      r3: string;
      r4: string;
      r5: string;
      r6: string;
      // * Medium
      m1: string;
      m2: string;
      m3: string;
      m4: string;
      m5: string;
      // * Semi Bold
      sb1: string;
      sb2: string;
      sb3: string;
      sb4: string;
      sb5: string;
      sb6: string;
      // * Bold
      b1: string;
      b2: string;
      // * Extra Bold
      eb1: string;
    };
  }
}
