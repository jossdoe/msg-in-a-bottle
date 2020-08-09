import styled from 'styled-components';

export const Main = styled.main`
  text-align: center;
`;

export const MainText = styled.div`
  max-width: 400px;
  margin: 0 auto 40px;
`;

export const CreateButton = styled.button`
  background-color: #6ec7b0;
  border: none;
  padding: 18px 36px;
  border-radius: 4px;
  cursor: pointer;
  color: #fff;
  font-weight: 700;
  box-shadow: 1px 2px 3px #00000022;
  text-transform: uppercase;
  font-size: 0.8rem;
  transition: background-color 0.1s, transform 0.1s;

  &:hover {
    background-color: #64b4a0;
  }

  &:active {
    background-color: #64b4a0;
    transform: scale(0.9);
  }
`;

export const APIText = styled.div`
  color: #666;
  margin-top: 20px;
  font-size: 0.8rem;

  a {
    color: inherit;
    text-decoration: none;
    font-weight: 700;
  }
`;
