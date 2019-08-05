import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 60px;
  left: 250px;
  width: 100%;
  margin-left: 250px;
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

export const FieldMap = styled.div`
  position: relative;
  width: 85%;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #babaca;
  border-radius: 10px;
`;
export const FieldFilter = styled.div`
  height: 150px;
  width: 100%;
`;
export const MapField = styled.div`
  width: 85%;
  margin: 0 auto;
  padding: 10px;
  border: 1px solid #babaca;
  border-radius: 5px;
`;
