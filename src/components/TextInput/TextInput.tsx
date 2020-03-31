import React, { useRef } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import * as Selectors from '../../selectors/index';
import * as AppActions from '../../features/typeBar/activeTermSlice';

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

const TextInput: React.FC = () => {
    const dispatch = useDispatch();
    const activeTerm: string = useSelector(Selectors.getActiveTerm) || '';
    const setActiveTerm: (term: string) => void = (term) =>
          dispatch(AppActions.setActiveTerm({term}));
    const inputRef = useRef<HTMLInputElement>(null);

    const handleChange = (e: any) => {
      return setActiveTerm(inputRef.current!.value);
    };

    return (
      <>
        <StyledInput
          type="text"
          placeholder="see a fishy? type the fishy"
          onChange={handleChange}
          value={activeTerm}
          ref={inputRef}
        />
      </>
    );
};

export default TextInput;