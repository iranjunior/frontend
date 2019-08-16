import React from "react";
import styled, { css } from "styled-components";
import { makeStyles } from "@material-ui/core/styles";

import {
  MdFavorite,
  MdDirectionsWalk,
  MdPerson,
  MdAccessibility,
  MdSpa,
  MdWhatshot,
  MdBubbleChart,
  MdChildFriendly,
  MdHearing,
  MdPregnantWoman,
  MdRecordVoiceOver
} from "react-icons/md";
export const useStyles = makeStyles({
  formcontrol: {
    width: "80%"
  },
  chips: {
    margin: 10
  },
  noMargin:{
    margin: 0
  }
});
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
export const getIcons = (specialities) => {
  if(specialities === "Cardiacos" ) 
    return <MdFavorite />
  if(specialities === "Traumato")
  return <MdDirectionsWalk />
  if(specialities === "Urologia")
  return  <MdPerson />
  if( specialities === "Clínica")
  return  <MdAccessibility />
  if(specialities === "Ginecologia")
  return  <MdSpa />
  if(specialities === "Queimaduras")
  return  <MdWhatshot />
  if(specialities === "Intoxicações")
  return  <MdBubbleChart />
  if(specialities === "Pediatria")
  return  <MdChildFriendly />
  if(specialities === "Otorrinolaringologia")
  return  <MdHearing />
  if(specialities === "Obstetrícia")
  return  <MdPregnantWoman />
  if(specialities === "Cardiologia")
  return  <MdFavorite />
  if(specialities === "Neurologia")
  return  <MdRecordVoiceOver />
};
export const Container = styled.div`
  position: relative;
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
  @media only screen and (min-width: 1300px) {
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
  margin-top: 0px
`;
export const FilterField = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  flex-direction: row;
  flex-wrap: wrap;
`;
export const FilterActives = styled.div`
  width: 40%;
  height: 100%;
  @media only screen and (max-width: 700px){
    width: 100%;
    height: auto;
    margin-left: 20px;
  }
`;
export const FilterAdd = styled.div`
  width: 30%;
  height: 100%;
  @media only screen and (max-width: 700px){
    width: 100%;
    height: auto;
    margin-left: 20px;
  }
`;
export const FilterOrder = styled.div`
  width: 30%;
  height: 100%;
  @media only screen and (max-width: 700px){
    width: 100%;
    height: auto;
    margin-left: 20px;
  }
`;
export const PanelField = styled.div`
  width: 100%
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: auto;
  padding: 0 20px;
`;
export const LabelSelect = styled.div`
  width: 100%;
  line-height: 3;
`;
export const Tittle = styled.span`
  margin-left: 30px;
  color: darkgray;
  :nth-child(2){
    margin-left: 0px;
  }
  :nth-child(3){
    margin-left: 0px; 
  }
  @media only screen and (max-width: 700px){
    margin: 0;
  }
  
`;
export const Fixed = styled.div`
  display: fixed
`
export const FooterCard = styled.div`
width: 100%;
height: 17px;
align-items: center;
justify-content: start;
margin-left: 4.2em;
display: flex;
`;