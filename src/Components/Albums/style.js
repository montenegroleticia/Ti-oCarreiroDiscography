import styled from "styled-components";
import { AiFillFolderAdd, AiFillFileAdd, AiFillDelete } from "react-icons/ai";

export const ContainerAlbum = styled.div`
  margin-bottom: 40px;
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
    margin-right: 75px;
    color: #404040;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 40px;
  }
`;

export const AddIcon = styled(AiFillFolderAdd)`
  margin-right: 25px;
  font-size: 24px;
  color: #404040;
  cursor: pointer;
`;

export const AddFileIcon = styled(AiFillFileAdd)`
  margin-right: 25px;
  font-size: 20px;
  color: #404040;
  cursor: pointer;
`;

export const DeleteIcon = styled(AiFillDelete)`
  margin-right: 25px;
  font-size: 24px;
  color: #404040;
  cursor: pointer;
`;
