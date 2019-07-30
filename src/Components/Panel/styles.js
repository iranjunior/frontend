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
  width: 250px;
  height: 150px;
  box-shadow: 0 6px 20px 0 rgba(255, 111, 0, 0.3);
  margin: 20px 10px;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: start;
  flex-wrap: wrap;
  background: linear-gradient(45deg, #ff6f00 0%, #ffca28 100%);
`;
export const Hospital = styled.div`
  width: 100%;
  max-height: 50px;
  text-align: right;
  text-align: right;
  font-family: "Roboto";
  color: #fff;
  font-size: 12px;
  margin-top: 10px;
  margin-right: 7px;
`;
export const Vacancies = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-size: 30px;
  color: #fff;
`;
export const Specialities = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
  color: #fff;
`;
export const Icon = styled.div`
  background: rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  margin-bottom: 20px;
  height: 50px;
  width: 50px;
`;
export const Name = styled.p`
  font-size: 12px;
`;
