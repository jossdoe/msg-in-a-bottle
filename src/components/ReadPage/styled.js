import styled from 'styled-components';

export const Main = styled.main`
  text-align: center;
  padding-top: 20px;
  line-height: 1.5;

  button {
    background-color: #7ca5c6;
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
    margin-top: 40px;
  }

  button:hover {
    background-color: #6687a2;
  }

  button:active {
    background-color: #6687a2;
    transform: scale(0.9);
  }
`;
