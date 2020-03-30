import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import Header from '../Header/Header';
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

const StyledResetButton = styled.button.attrs({
  className: "ResetButton"
})`
  // height: 1.5rem;
  font-size: 1.25rem;
  padding: 10px;
  border-radius: 50px;
  width: 20vw;
  background: white;
  position: absolute;
  top: 45vh;
  left: 40vw;
  outline: none;
  border: none;
  box-shadow: 1px 1px 5px black;

  &:active {
    background: #ddd;
    box-shadow: 1px 1px 2px black;
  }
`;

const App = (props: any) => {
  let { activeTerm, clearActiveTerm } = props;
  const [gameOver, setGameOver] = useState(false);
  const [shouldReset, setShouldReset] = useState(false);

  const renderResetButton = () => {
    return gameOver ? (
      <StyledResetButton onClick={() => setShouldReset(true)}>Reset</StyledResetButton>
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

const mapStateToProps = (state: any) => ({
  activeTerm: Selectors.getActiveTerm(state)
});

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({
    clearActiveTerm: AppActions.clearActiveTerm
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
