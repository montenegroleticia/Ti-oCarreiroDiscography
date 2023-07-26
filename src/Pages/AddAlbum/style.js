import styled from "styled-components";

export const ContainerAdd = styled.div`
  width: 80vw;
  height: 75vh;
  background-color: rgba(255, 255, 255, 0.5);
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    padding-top: 40px;
  }
  input {
    padding-left: 16px;
    width: 300px;
    height: 50px;
    border-radius: 24px;
    border: none;
    outline: none;

    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 40px;

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: button-bevel;
      margin-right: 16px;
    }
  }
  button {
    cursor: pointer;
    width: 150px;
    height: 50px;

    border-radius: 24px;
    background-color: #4a90e2;
    border: transparent;

    color: #fff;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 40px;
  }
`;
