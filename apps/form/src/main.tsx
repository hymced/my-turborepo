import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import "./panda.css";
import "styles/styles.css"

import typescriptLogo from "/typescript.svg";
// import { Counter } from "components";
// import { Counter } from "@components";
import Counter from "@components/Counter";
import { styled } from "../styled-system/jsx"
import { css } from "../styled-system/css"

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
        bg: '#9d1716', // beet
        color: 'white'
      }
    }
  }
})

const App = () => (
  <>
    <div>
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
    </div>
    <Counter />
    <StyledButton variant="primary" onClick={() => console.log("hello")}>primary</StyledButton>
    <StyledButton variant="secondary" onClick={() => console.log("hello")}>primary</StyledButton>
    <button className={css({color: "cobalt"})}>color cobalt</button>
    <button className={css({bg: "red"})}>bg red</button>
  </>
);

createRoot(document.getElementById("app")!).render(<App />);
