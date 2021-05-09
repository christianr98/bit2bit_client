import { Button } from "@material-ui/core";
import styled from "styled-components";

const StyledContainer = styled.div`    
    width: 80%;
    height: 100vh;
    margin: auto;
    margin-top: 4rem;
    margin-bottom: 2rem;
    //background-color: whitesmoke;
`

const Title = styled.h3`
    margin-top: 2rem;
    color: ${(props) => props.theme.colorPrimary };;
    font-size: 22px;
    font-family: 'Quicksand', sans-serif;
    font-weight: 700;
    line-height: 28.5px;
    margin-bottom: 8px;
`

const StyledText = styled.p`
    color: ${(props) =>
    props.color === "dark" ? 'black' : 'white'};
    font-family: 'Quicksand', sans-serif;
    font-weight: ${(props) =>
    props.type === "bold" ? '800' : '400'};
    font-size: ${(props) =>
    props.size === "small" ? '12px' : '16px'};
`
const AuthBox = styled.div`
    background-color: whitesmoke;
    display: flex;
    flex-direction: column;
    width: 30rem;      
    padding: 2rem 1rem;
    margin: auto;
    align-items: center;
    .item {
        padding: 0.8rem;
    }
    .item-submit {
        justify-content: center;
        display: flex;
        flex-direction: column;
        width: 40%;
        margin: 1rem;
        

    }
    
`
const BtnStyle = styled(Button)`
    &:hover {
        background-color: ${(props) => props.theme.colorPrimary};
        color: white;
    }
    font-family: 'Quicksand', sans-serif;
    font-size: 12px;
    font-weight: 500;
    margin-right: 1.8rem;
    border-radius: 100px;
    padding: 0.2rem 1.2rem;
    min-width: 8rem;
    min-height: 2.5rem;
    background-color: ${(props) =>
    props.tipo === "filled" ? props.theme.colorPrimary : 'unset'};
    color: ${(props) =>
    props.tipo === "filled" ? 'white' : props.theme.colorPrimary};
    border: ${(props) =>
    props.tipo === "filled" ? '0rem' : `1px solid ${props.theme.colorPrimary}`}; 
    float:${(props) => props.align }; 
    @media only screen and (max-width: 600px){
        margin: 0.2rem;
        width: 80%;        
    }     
`
const BtnStyleSmall = styled(Button)`
    &:hover {
        background-color: ${(props) => props.theme.colorPrimary};
        color: white;
    }
    font-family: 'Quicksand', sans-serif;
    font-size: 11px;
    font-weight: 500;
    margin-right: 1.8rem;
    border-radius: 5px;
    background-color: ${(props) =>
    props.tipo === "filled" ? props.theme.colorPrimary : 'unset'};
    color: ${(props) =>
    props.tipo === "filled" ? 'white' : props.theme.colorPrimary};
    border: ${(props) =>
    props.tipo === "filled" ? '0rem' : `1px solid ${props.theme.colorPrimary}`}; 
    float:${(props) => props.align }; 
    @media only screen and (max-width: 600px){
        margin: 0.2rem;
        width: 80%;        
    }     
`
const ContentBox = styled.div`
    border: 2px solid whitesmoke;
    display: flex;
    align-items: center;
    width: 100%;
    margin: 1rem 0;
    .content {
        margin-top: 1.5rem;
        margin-bottom: 1.5rem;
    }
    .rating {
        margin: 0.5rem 3rem 0.5rem 1rem;
        border: 1px solid gray;        
        text-align: center;
        align-items: center;
        height: fit-content;
        padding: 0.5rem;
        min-width: 2rem;
        display: flex;
        flex-direction: column;
    }
    :hover {
        cursor: ${(props) =>
            props.tipo === "hoover" ? 'pointer' : 'unset'};
        box-shadow: ${(props) =>
            props.tipo === "hoover" ? '0px 1px 5px silver' : 'unset'};
    }
`
const ErrMsg = styled.div`
    color: red;
    text-align: center;
    margin-bottom: 1rem;
`

export {Title, StyledText, StyledContainer, AuthBox, BtnStyle, BtnStyleSmall, ContentBox, ErrMsg}