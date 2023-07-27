import styled from "styled-components";
import { AiFillFolderAdd } from "react-icons/ai";

export const ContainerSearch = styled.div`
  width: 80vw;
  height: auto;
  background-color: rgba(255, 255, 255, 0.5);

  display: flex;
  flex-direction: column;
`;

export const AddIcon = styled(AiFillFolderAdd)`
  font-size: 32px;
  color: #404040;
  cursor: pointer;

  &:hover {
    color: #4a90e2;
  }
`;

export const ContainerAddAlbum = styled.div`
  padding: 32px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
