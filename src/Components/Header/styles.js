import styled from 'styled-components';

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
`;
export const Element = styled.li`
    margin: auto;
    padding: auto;
    @media only screen and (min-width: 700px){
        display: block;
        :nth-child(1){
            display: none;
        }
        :nth-child(3){
            width: 70%
        }
    }
    @media only screen and(max-width: 700px){
        :nth-child(1){
            display: block;
        }
        :nth-child(n+1){
            display: none;
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
export const View = styled.div`
    margin: auto;
    padding: auto;
    width: 80%;
`;