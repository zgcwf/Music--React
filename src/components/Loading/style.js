import styled from "styled-components";

export const LoadingWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  .fontLoading {
    font-size: 30px;
  }
`;
