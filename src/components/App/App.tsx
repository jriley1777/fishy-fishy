import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import Header from '../Header/Header';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import AppLogo from '../AppLogo/AppLogo';
import Processing from '../Processing/Processing';
import sketch from '../Processing/sketches/koiPond';

import * as Selectors from '../../selectors/index';
import * as AppActions from '../../actions/app';

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
  const clearActiveTerm: () => void = dispatch(AppActions.clearActiveTerm);

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
