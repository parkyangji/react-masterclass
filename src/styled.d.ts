import "styled-components";

declare module "styled-components" { //스타일 컴포넌트의 정의 확장
  export interface DefaultTheme { //내 테마가 어떻게 보일 지
    textColor: string;
    bgColor: string;
    btnColor: string;
  }
}