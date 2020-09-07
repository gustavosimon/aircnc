import styled from "styled-components";

export const ThumbnailBox = styled.label`
  margin-bottom: 20px;
  border: 1px;
  background-color: #ddd;
  background-size: cover;
  cursor: pointer;
  height: 160px;

  display: flex;
  justify-content: center;
  align-items: center;

  > input {
    display: none;
  }

  &.has-thumbnail {
    border: 0;
    > img {
      display: none;
    }
  }
`;
