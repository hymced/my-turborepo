import React, { useState } from "react"

import { Styled } from './Counter.styled'

type Props = { variant: "primary" | "secondary" }

const Counter = ({variant = "primary"}: Props) => {
  const [count, setCount] = useState(0)

  return (
    <Styled variant={variant} id="counter" type="button" onClick={() => setCount(count + 1)}>
      {count}
    </Styled>
  );
};

export default Counter
