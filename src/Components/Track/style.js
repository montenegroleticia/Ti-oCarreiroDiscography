import styled from "styled-components";
import { AiFillDelete } from "react-icons/ai";

export const ContainerTrack = styled.div`
  display: flex;
  justify-content: space-between;
  h5 {
    margin-right: 55px;
    color: #404040;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 40px;
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const DeleteIcon = styled(AiFillDelete)`
  font-size: 20px;
  color: #505050;
  margin-right: 24px;
  cursor: pointer;
`;
