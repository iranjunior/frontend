import React from "react";
import styled, { css } from "styled-components";
import {
  MdFavorite,
  MdDirectionsWalk,
  MdPerson,
  MdAccessibility,
  MdSpa
} from "react-icons/md";
const nivelVacancies = {
  shadow: {
    baixo: "1 6px 20px 0 rgba(244, 143, 177, 0.5)",
    medio: "0 6px 20px 0 rgba(255, 111, 0, 0.3)",
    alto: "0 6px 20px 0 rgba(77, 182, 172, 0.5)"
  },

  card: {
    baixo: "linear-gradient(45deg, #FF5252 0%, #f48fb1 100%)",
    medio: "linear-gradient(45deg, #ff6f00 0%, #ffca28 100%)",
    alto: "linear-gradient(45deg, #43A047 0%, #1de9b6 100%)"
  }
};
export const iconsSpecialities = {
  Cardiacos: <MdFavorite />,
  Traumato: <MdDirectionsWalk />,
  Urologia: <MdPerson />,
  Clinica: <MdAccessibility />,
  Ginecologia: <MdSpa />
};
export const Container = styled.div`
  position: relative;
  width: 100%;
  margin-left: 250px;
  margin-top: 60px;
  display: flex;
  flex-direction: row;;
  justify-content: start;
  flex-wrap: wrap;
  font-family: "Roboto", "sans-serif";
  @media only screen and (max-width: 700px) {
    width: 100%;
    left: 0px;
    margin-left: 0px;
  }
  @media only screen and (min-width: 993px){
    width: 82%;
  }
`;
export const Card = styled.div`
  border-radius: 3px;
  width: 22%;
  height: 150px;
  ${props => {
    if (props.vacancies < 4)
      return css`
        box-shadow: ${nivelVacancies.shadow.baixo};
      `;
    else if (props.vacancies < 7)
      return css`
        box-shadow: ${nivelVacancies.shadow.medio};
      `;
    else
      return css`
        box-shadow: ${nivelVacancies.shadow.alto};
      `;
  }}
  margin: 20px 10px;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: start;
  flex-wrap: wrap;
  ${props => {
    if (props.vacancies < 4)
      return css`
        background: ${nivelVacancies.card.baixo};
      `;
    else if (props.vacancies < 7)
      return css`
        background: ${nivelVacancies.card.medio};
      `;
    else
      return css`
        background: ${nivelVacancies.card.alto};
      `;
  }}

  @media only screen and (max-width: 700px) {
    width: 80%;
    margin: 20px auto;
  }
`;
export const Hospital = styled.div`
  width: 100%;
  max-height: 50px;
  text-align: right;
  text-align: right;
  font-family: "Roboto";
  color: #fff;
  font-size: 13px;
  margin-top: 10px;
  margin-right: 7px;
  @media only screen and (min-width: 1300px){
    font-size: 16px;
  }
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
  font-size: 15px;
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
export const FilterField = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: start;
  flex-direction: row;
  flex-wrap: nowrap;
`;
export const FilterActives = styled.div`
  width: 40%;
  height: 100%;
`;
export const FilterAdd = styled.div`
  width: 30%;
  height: 100%;
`;
export const FilterOrder = styled.div`
  width: 30%;
  height: 100%;
`;
export const PanelField = styled.div`
  width: 100%
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: auto;
  padding: 0 20px;
`;
