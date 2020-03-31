import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import Header from '../components/Header/Header';
import Button from '../components/Button/Button';
import TextInput from '../components/TextInput/TextInput';
import AppLogo from '../components/AppLogo/AppLogo';
import Processing from '../components/Processing/Processing';
import sketch from '../components/Processing/sketches/koiPond';

import * as Selectors from '../selectors/index';
import * as AppActions from '../features/typeBar/activeTermSlice';

const StyledApp = styled.div.attrs({
  className: 'App'
})`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: linear-gradient(to bottom left, orange, lightgreen, aqua);
  text-align: center;
`;

const App: React.FC = () => {
  const dispatch = useDispatch();
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [shouldReset, setShouldReset] = useState<boolean>(false);
  const activeTerm: string = useSelector(Selectors.getActiveTerm);
  const clearActiveTerm: () => any = () => dispatch(AppActions.clearActiveTerm());

  const renderResetButton = () => {
    return gameOver ? (
      <Button onClick={() => setShouldReset(true)}>
        Reset
      </Button>
    ) : null;
  }
  return (
    <StyledApp>
      <Header>
        <TextInput />
      </Header>
      <Processing
        sketch={sketch}
        p5Props={{
          activeTerm,
          clearActiveTerm,
          setGameOver,
          shouldReset,
          setShouldReset
        }}
      />
      { renderResetButton() }
      <AppLogo>
        <span>fishy.fishy</span>
      </AppLogo>
    </StyledApp>
  );
}

export default App;
