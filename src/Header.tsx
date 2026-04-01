import React from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components'
import { isDarkAtom } from './routes/atoms';

const Container = styled.div`
    padding: 0px 20px;
    width: 100vw;
    height: 5vh;
    min-height: 40px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    background: ${(props) => props.theme.gradient};
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
`

const Label = styled.label`
  position: absolute;
  display: inline-block;
  width: 48px;
  height: 24px;
`;

const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + span {
    background-color: #ddd;
  }

  &:checked + span:before {
    transform: translateX(24px);
  }
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  inset: 0;
  background-color: #ddd;
  border-radius: 999px;
  transition: 0.2s;

  &:before {
    content: "";
    position: absolute;
    height: 18px;
    width: 18px;
    left: 3px;
    top: 3px;
    background-color: white;
    border-radius: 50%;
    transition: 0.2s;
  }
`;

interface ToggleProps {
  checked: boolean;
  onToggle: () => void;
}

function Toggle({checked,onToggle}: ToggleProps) {
  return (
    <Label>
      <Input type="checkbox" checked={checked} onChange={onToggle} />
      <Slider />
    </Label>
  );
}
const Header = () => {
    const setterFn = useSetRecoilState(isDarkAtom);
    const toggleDarkAtom = () => setterFn((prev) => !prev);
    const idDark = useRecoilValue(isDarkAtom);
  return (
    <Container>
        <Toggle checked={idDark} onToggle={toggleDarkAtom} />
    </Container>
  )
}

export default Header