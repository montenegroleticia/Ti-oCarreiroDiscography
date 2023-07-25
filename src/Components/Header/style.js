import styled from "styled-components";

export const ContainerHeader = styled.div`
  margin-top: 16px;
  width: 80vw;
  height: 130px;
  background-color: #fff;
  box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.15);

  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    margin-left: 16px;
    width: 200px;
  }
  h1 {
    margin-right: 16px;
    color: #606060;

    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 44px;
    line-height: 40px;
  }
`;
