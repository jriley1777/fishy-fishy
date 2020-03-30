import React from 'react';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as Selectors from '../../selectors/index';
import * as AppActions from '../../actions/app';

const StyledInput = styled.input.attrs({
  className: "TextInput"
})`
  height: 1rem;
  outline: none;
  border: none;
  min-width: 50vw;
  border-radius: 50px;
  padding: 10px 0 10px 20px;
  font-size: 1rem;
  margin: 0 10px 0 10px;

  @media (min-width: 768px) {
    min-width: 30vw;
    height: 1.25rem;
    font-size: 1.5rem;
  }
`;

const TextInput = (props: any) => {
    let { setActiveTerm, activeTerm } = props;
    const handleChange = (e: any) => {
        return setActiveTerm(e.target.value);
    };

    return (
      <div>
        <StyledInput 
            type="text" 
            placeholder="see a fishy? type the fishy"
            onChange={handleChange} 
            value={activeTerm}
        />
      </div>
    );
};

const mapStateToProps = (state: any) => ({
    activeTerm: Selectors.getActiveTerm(state)
})

const mapDispatchToProps = (dispatch: any) => {
    return bindActionCreators({
        setActiveTerm: AppActions.setActiveTerm
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TextInput);