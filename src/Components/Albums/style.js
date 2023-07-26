import styled from "styled-components";
import { AiFillFolderAdd, AiFillDelete } from "react-icons/ai";

export const ContainerAlbum = styled.div`
  margin-top: 24px;
  width: 80vw;
  height: 130px;
  display: flex;
  flex-direction: column;
  h1 {
    margin-left: 24px;
    margin-right: 24px;
    color: #303030;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 40px;
  }
  section {
    display: flex;
    justify-content: space-between;
  }
  div {
    display: flex;
    align-items: center;
  }
  h2 {
    margin-left: 28px;
    margin-right: 30px;
    color: #404040;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 40px;
  }
  h3 {
    margin-right: 110px;
    color: #404040;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 40px;
  }
`;

export const AddIcon = styled(AiFillFolderAdd)`
  margin-right: 50px;
  font-size: 24px;
  color: #404040;
`;

export const DeleteIcon = styled(AiFillDelete)`
  margin-right: 50px;
  font-size: 24px;
  color: #404040;
`;
