import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles({
    avatar: {
      height: 30,
      width: 30,
    },
    menu: {
      top: 40
    },
    icon_button: {
      height: 30,
      width: 30,
    },
    bigAvatar: {
      margin: 10,
      width: 60,
      height: 60,
    },
    iconAvatarList:{
        marginRight: 6
    }
  });
  
export const Headers = styled.header`
    
        width: 100%;
        background: linear-gradient(45deg, #0288d1 0%, #26c6da 100%);
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1000;
        box-shadow: 1px 1px 2px 1px rgba(10,10,10,0.3);
    
`;
export const List = styled.ul`
    list-style-type: none;
    display: flex;
    flex-flow: row;
    flex-direction: row;
    justify-content: space-between;
    margin: 2px;
`;
export const Element = styled.li`
    @media only screen and (min-width: 700px){
        display: block;
        margin: auto;
        padding: auto;
        :nth-child(1){
            display: none;
        }
        :nth-child(3){
            width: 70%
        }
    }
    @media only screen and (max-width: 700px){
        display: none;
        :nth-child(1){
            display: block;
        }
    }
`;
export const Text = styled.input.attrs({type: 'text'})`
    width: 100%;
    height: 100%;
    background: rgba(255,255, 255, 0.3);
    border: none;
    border-radius: 3px;
    padding: 10px;
    ::placeholder{
        color: #fff;
    }
    &:hover{
        background: rgba(255,255, 255, 0.5);

    }  
`;
export const FieldText = styled.div`
    margin: auto;
    padding: auto;
    width: 80%;
`;
export const View = styled.div`
    padding: 7px;
`;

export const Circle = styled.div`
    position: relative;
    z-index: -10;
    background: #ff4081;
    height: 40px;
    width: 40px;
    border-radius: 50%;
`;
export const IconSpace = styled.div`
    margin-right: 10px;
    margin-top: 5px;
`;
