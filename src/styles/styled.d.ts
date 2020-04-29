import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secundary: string;

      background: string;
      text: string;

      bg: string;
      cntBg: string;
      name: string;
      bio: string;
      menuBG: string;
    };
  }
}
