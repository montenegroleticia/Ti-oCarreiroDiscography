import styled from "styled-components";
import { AiFillFileAdd, AiFillDelete } from "react-icons/ai";

export const ContainerAlbum = styled.div`
  margin-bottom: 16px;
  width: 80vw;
  height: auto;
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

  &[title] {
    position: relative;

    &::after {
      content: attr(title);
      position: absolute;
      bottom: -25px;
      left: 50%;
      transform: translateX(-50%);
      background-color: #4a90e2;
      color: white;
      padding: 5px;
      border-radius: 5px;
      white-space: nowrap;
      visibility: hidden;
      opacity: 0;
      transition: opacity 0.01s ease-in-out;
    }

    &:hover::after {
      visibility: visible;
      opacity: 1;
    }
  }
  @media (max-width: 500px) {
    h1 {
      font-size: 12px;
    }
    h2 {
      font-size: 14px;
    }
    h3 {
      margin-right: 15px;
      font-size: 14px;
    }
  }
`;

export const AddFileIcon = styled(AiFillFileAdd)`
  margin-right: 25px;
  font-size: 20px;
  color: #404040;
  cursor: pointer;

  &:hover {
    color: #4a90e2;
  }
  @media (max-width: 500px) {
    font-size: 16px;
  }
`;

export const DeleteIcon = styled(AiFillDelete)`
  margin-right: 25px;
  font-size: 24px;
  color: #404040;
  cursor: pointer;

  &:hover {
    color: #4a90e2;
  }
  @media (max-width: 500px) {
    font-size: 16px;
  }
`;
