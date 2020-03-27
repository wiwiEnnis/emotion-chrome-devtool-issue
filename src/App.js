import React from 'react';
import { css } from '@emotion/core';

const AppStyle = css`
  font-size: 2em;

  
`;

const AppChildStyle = css`
  font-style: italic;

  p {
    font-weight: bold;
  }
`;

const App = () => (
  <div css={AppStyle}>
    <div css={AppChildStyle}>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora iusto vero officia facilis
        modi qui odio consequatur quaerat ut dolorum itaque fugit reiciendis, voluptatum quasi
        necessitatibus dicta accusantium aspernatur quisquam.
      </p>
    </div>
  </div>
);

export default App;
