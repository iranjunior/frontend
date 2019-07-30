import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  left: 250px;
  width: 80%;
  display: flex;
  flex-direction: row;
  top: 60px;
  justify-content: start;
  flex-wrap: wrap;
`;
export const Card = styled.div`
  border-radius: 3px;
  width: 230px;
  height: 150px;
  box-shadow: 0 6px 20px 0 #ccc;
  margin: 20px 10px;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: start;
  flex-wrap: wrap;
`;
export const Hospital = styled.div`
  width: 100%;
  max-height: 50px;
  text-align: right;
  text-align: right;
  font-family: "Roboto";
`;
export const Vacancies = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-size: 30px;
`;
export const Specialities = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-size: 10px;
`;
export const Icon = styled.div`
    background: rgba( 0, 0, 0, 0.6);
    border-radius: 50%;
`;
