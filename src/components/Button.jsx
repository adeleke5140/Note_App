import styled from 'styled-components';

const Button = styled.button`
  display: block;
  padding: 0.6em 1em;
  border: none;
  font-size: 18px;
  background-color: var(--primary-color);
  color: var(--bg-color);
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }

  :active {
    background-color: #005fa3;
  }
`;

export default Button;
