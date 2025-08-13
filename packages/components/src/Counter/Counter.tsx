import React, { useState } from "react"

import { Styled } from './Counter.styled'

const Counter: React.FC = () => {
  const [count, setCount] = useState(0)

  return (
    <Styled variant="primary" id="counter" type="button" onClick={() => setCount(count + 1)}>
      {count}
    </Styled>
  );
};

export default Counter
