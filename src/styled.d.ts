import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    textColor: string;
    textSubColor:string;
    bgColor: string;
    bgSubColor:string;
    accentColor: string;
    gradient: string;
  }
}