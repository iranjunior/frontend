import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  avatar: {
    height: 100,
    width: 100,
    margin: "auto"
  },
  menu: {
    top: 40
  },
  icon_button: {
    height: 30,
    width: 30
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60
  },
  iconAvatarList: {
    marginRight: 6
  }
});

export const Sidebars = styled.div`
  @media only screen and (min-width: 700px) {
    min-height: 100%;
    box-shadow: 1px 1px 7px 1px rgba(10,10,10,0.3);
    width: 250px;
    position: fixed;
    top: 40px;
    z-index: -10;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
  }

  @media only screen and (max-width: 700px) {
    width: 0%;
    position: relative;
  }
  -webkit-transition: width 700ms ease;
  -moz-transition: width 700ms ease;
  -ms-transition: width 700ms ease;
  -o-transition: width 700ms ease;
  transition: width 700ms ease;
`;
export const List = styled.ul`
  list-style: none;
  min-height: 100%
  min-width: 100%;
  padding: 0;
  border-right: 1px solid #ccc;
  
`;
export const Element = styled.li`
  height: 3em;
  display: flex;
  justify-content: start;
  flex-direction: row;
  align-content: center;
  align-items: center;
  font-family: 'Roboto';
  font-weight: 400;
  color: #333;
  font-size: 14px;
  &:hover{
    background: rgba(0,0,0, 0.08);
    cursor: pointer;
  }
  @media only screen and (max-width: 700px) {
    display: none
  }
`;
export const AvatarSpace = styled.li`
  border-bottom: 1px solid #ccc;
  margin: 0px 5px;
  height: 15em;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  @media only screen and (max-width: 700px) {
    display: none
  }
`;
export const InfoUser = styled.div`
  height: 4em;
`;
export const UserNameSpace = styled.div`
  text-align: center;
  font-family: "Roboto";
`;
export const UserEmailSpace = styled.div`
  text-align: center;
  font-family: "Roboto";
  color: darkgray;
  font-size: small;
`;
export const Hr = styled.hr`
  margin: 0 15px;
  border: 0.5px solid #eee
`;
export const Link = styled.a`
  text-decoration: none;
`;