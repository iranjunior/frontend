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
    min-height: 100vh;
    max-width: 20%;
    position: relative;
    top: 40px;
    z-index: -10;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
  }

  @media only screen and (max-width: 700px) {
    max-width: 0%;
  }
  -webkit-transition: max-width 700ms ease;
  -moz-transition: max-width 700ms ease;
  -ms-transition: max-width 700ms ease;
  -o-transition: max-width 700ms ease;
  transition: max-width 700ms ease;
`;
export const List = styled.ul`
  list-style: none;
  min-height: 100%
  min-width: 100%;
  padding: 0;
  border-right: 1px solid #ccc;
`;
export const Element = styled.li`
  border-bottom: 1px solid #ccc;
  margin: 0px 5px;
  height: 3.5em;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-content: center;
  font-family: 'Roboto';
  font-weight: 300;
  color: #333;
`;
export const AvatarSpace = styled.li`
  border-bottom: 1px solid #ccc;
  margin: 0px 5px;
  height: 15em;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
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
