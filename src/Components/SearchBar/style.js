import styled from "styled-components";

export const ContainerSearchBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-top: 8px;
  margin-bottom: 24px;
  h4 {
    margin-left: 16px;
    color: #606060;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 40px;
  }
  form {
    display: flex;
    justify-content: space-around;
  }
  div {
    border-radius: 24px;
    border: none;
    outline: none;
    background-color: #ffffff;
  }
  input {
    margin-left: 16px;
    width: 65vw;
    height: 50px;
    border-radius: 24px;
    border: none;
    outline: none;

    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 40px;
  }
  button {
    cursor: pointer;
    width: 150px;
    height: 50px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 24px;
    background-color: #4a90e2;
    border: transparent;

    color: #fff;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 40px;

    &:hover {
      color: #4a90e2;
      background-color: #fff;
    }
  }
  @media (max-width: 500px) {
    input {
      width: 200px;
      font-size: 14px;
      height: 30px;
    }
    button {
      width: 75px;
      font-size: 14px;
      height: 30px;
    }
    h4 {
      font-size: 14px;
    }
  }
`;
