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
    h2 {
      line-height: 22px;
    }
    h5 {
      font-size: 12px;
      margin-right: 0;
    }
  }
`;

export const DeleteIcon = styled(AiFillDelete)`
  font-size: 20px;
  color: #505050;
  margin-right: 24px;
  cursor: pointer;

  &:hover {
    color: #4a90e2;
  }

  @media (max-width: 500px) {
    font-size: 16px;
  }
`;
