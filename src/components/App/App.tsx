import React from 'react';
import styled from 'styled-components';

import AppLogo from '../AppLogo/AppLogo';
import Processing from '../Processing/Processing';
import sketch from '../Processing/sketches/koiPond';

const StyledApp = styled.div.attrs({
  className: 'App'
})`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: linear-gradient(to bottom left, orange, lightgreen, aqua);
  text-align: center;
`

function App() {
  return (
    <StyledApp>
      <Processing sketch={sketch} />
      <AppLogo>
        <span>fishy.fishy</span>
      </AppLogo>
    </StyledApp>
  );
}

export default App;
