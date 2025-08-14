import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import "./panda.css";

import typescriptLogo from "/typescript.svg";
import { Counter } from "components";
import { styled } from "@mono/styles/jsx"
import { css } from "@mono/styles/css"

const BRAND = {
  primary: '#f44831',
  beet: '#9d1716',
  radish: '#fcb2b0',
  yolk: '#ffc847',
  powder: '#c6eaf6',
  cobalt: '#0064d1',
  kale: '#075526',
}

const StyledButton = styled("button", {
  base: {
    py: '10',
    px: '20',
    rounded: 'md'
  },
  variants: {
    variant: {
      primary: {
        bg: 'blue.400', // needs @pandacss/preset-panda
        color: 'blue.800'
      },
      secondary: {
        bg: BRAND.beet,
        color: 'white'
      }
    }
  }
})

const App = () => (
  <div>
    {/* <div>
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" className="logo" alt="Vite logo" />
      </a>
      <a href="https://www.typescriptlang.org/" target="_blank">
        <img
          src={typescriptLogo}
          className="logo vanilla"
          alt="TypeScript logo"
        />
      </a>
    </div> */}
    <Counter />
    <StyledButton variant="primary" onClick={() => console.log("hello")}>primary</StyledButton>
    <StyledButton variant="secondary" onClick={() => console.log("hello")}>secondary</StyledButton>
    <button className={css({color: "app_cobalt"})}>color cobalt</button>
    <button className={css({bg: "red"})}>bg red</button>
    <button className={css({ foo: 'lg', border: "1px solid red" })}>foo lg</button>
    <styled.button foo="sm" border="1px solid red">foo sm</styled.button>
    <button className={css({barX: "2px", _hover: {bg: "yellow"}})}>barX _hover</button>
    <styled.button bx="2px">bx</styled.button>
    <button className={css({barX: "2px", _hover: {color: "red"}})}>safe hover</button>
  </div>
);

createRoot(document.getElementById("app")!).render(<App />);
