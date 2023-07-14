import styled from '@emotion/styled';

export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: ${props => props.theme.space[16]}px;
  padding-right: ${props => props.theme.space[6]}px;
  padding-left: ${props => props.theme.space[6]}px;
  padding-top: ${props => props.theme.space[3]}px;
  padding-bottom: ${props => props.theme.space[3]}px;
  color: ${props => props.theme.colors.white};
  background: ${props => props.theme.colors.tagBackground};
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  margin: 10 auto;
  max-width: 800px;
  background-color: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.space[2]}px;
  overflow: hidden;
`;

export const Span = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: ${props => props.theme.space[6]}px;
  border: none;
  outline: none;
  padding-left: ${props => props.theme.space[2]}px;
  padding-right: ${props => props.theme.space[2]}px;

  ::placeholder {
    font: inherit;
    font-size: ${props => props.theme.fontSize.m};
  }
`;

export const SubmitButton = styled.button`
  display: inline-block;
  width: ${props => props.theme.space[16]}px;
  height: ${props => props.theme.space[16]}px;
  border: 0;

  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  :hover {
    opacity: 1;
  }
`;

export const Icon = styled.div`
  display: flex;
  padding: ${props => props.theme.space[2]}px;
  justify-content: center;

  & svg {
    width: ${props => props.theme.space[8]}px;
    height: ${props => props.theme.space[8]}px;
    fill: ${props => props.theme.colors.gray};
  }
`;
