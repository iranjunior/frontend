import styled from 'styled-components';

export const Container = styled.div`
    background: #00bcd4;
    width: 100%;
    height: 100vh;    
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-content: center;
`;
export const Card =styled.div`
    background: #fff;
    min-height: 400px;
    min-width: 300px;
    border-radius: 3px;
    box-shadow: 1px 1px 3px 3px rgba(0,0,0,0.14);
`;
export const Logo = styled.div`
    width: 100%;
    min-height: 45%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-content: center;
`;
export const Field = styled.div`
    width: 100%;
    max-height: 15%;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    margin-bottom: 10px;
`;
export const LogoInput = styled.div`
    margin: 7px;
`;
export const InputText = styled.input.attrs({type: 'text'})`
    width: 80%;
    float: right;
    line-height: 3;
    margin-right: 7px;
    border: none;
    border-bottom: 1px solid #ccc;
    background: transparent;
`;
export const Check = styled.input.attrs({type: 'checkbox'})`
    
`;
export const Password = styled.input.attrs({type: 'password'})`
    width: 80%;
    float: right;
    line-height: 3;
    margin-right: 7px;
    border: none;
    border-bottom: 1px solid #ccc;
    background: transparent;
`;
export const Submit = styled.button`
    margin-top: 10px;
    width: 90%;
    background: #ff4081;
    color: #fff;
    padding: 10px;
    font-weight: 100;
    font-size: 18px;
    border: none;
    border-radius: 4px;
    box-shadow: 1px 1px 3px 3px rgba(0,0,0,0.14);
    &:hover{
        background: rgba(255,64,129, 0.6);
        cursor: pointer;
    }
`;
export const Link = styled.a`
    color: #00acc1;
    margin-top: 15px;
    &:hover{
        text-decoration: underline;
        cursor: pointer;
    }
`;
