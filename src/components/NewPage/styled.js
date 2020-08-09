import styled from 'styled-components';

export const Main = styled.main`
  text-align: center;
  padding-top: 20px;

  label {
    display: block;
    margin: 0 auto 8px;
    font-weight: 700;
  }

  textarea {
    resize: none;
    display: block;
    margin: 0 auto 20px;
    width: 320px;
    line-height: 1.5;
    font-family: inherit;
    font-size: 1rem;
    padding: 15px 20px;
    box-shadow: inset 1px 2px 3px #00000022, inset 1px 2px 9px #00000022;
    border-radius: 10px;
    border: solid 1px #ccc;
    background-color: #fafafa;
  }

  textarea::placeholder {
    opacity: 0.6;
  }

  textarea:focus {
    outline: none;
    border: solid 1px #6ec7b0;
  }

  button {
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
  }

  button:hover {
    background-color: #64b4a0;
  }

  button:active {
    background-color: #64b4a0;
    transform: scale(0.9);
  }
`;

export const MainSuccess = styled.main`
  text-align: center;
  padding-top: 20px;
  line-height: 1.5;

  a {
    font-weight: 700;
    color: #666;
    text-decoration: none;
    display: inline-block;
    margin-bottom: 40px;
  }

  button {
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
  }

  button:hover {
    background-color: #64b4a0;
  }

  button:active {
    background-color: #64b4a0;
    transform: scale(0.9);
  }
`;

export const MainError = styled.main`
  text-align: center;
  padding-top: 20px;
  line-height: 1.5;

  button {
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
    margin-top: 40px;
  }

  button:hover {
    background-color: #64b4a0;
  }

  button:active {
    background-color: #64b4a0;
    transform: scale(0.9);
  }
`;
