import styled, { css } from 'styled-components';

export const Container = styled.div`
position: absolute;
  top: 60px;
  left: 250px;
  width: 100%;
  margin-left: 20px;
  margin-top: 60px;
  display: flex;
  flex-direction: row;
  justify-content: start;
  flex-wrap: wrap;
  font-family: "Roboto", "sans-serif";
  @media only screen and (max-width: 700px) {
    width: 100%;
    left: 0px;
    margin-left: 0px;
  }
  @media only screen and (min-width: 993px) {
    width: 82%;
  }
  
`;
export const positionMap = css`
  position: fixed;
`;
