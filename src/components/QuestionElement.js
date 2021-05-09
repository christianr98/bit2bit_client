import React from 'react'
import { useHistory } from 'react-router';
import styled from 'styled-components'
import { ContentBox, StyledText } from './styles/CommonStyles'

const StyledQuestion = styled.div`
    background-color: whitesmoke;
    display: flex;
    align-items: center;
    width: 100%;
    margin: 1rem 0;
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
        cursor: pointer;
        box-shadow: 0px 1px 5px silver;
    }
`

const QuestionElement = ({data}) => {
    const history = useHistory()

    const openQuestion = (data) => {
        history.push(`/${data.user._id}`, [data])
    }
    return (
        <ContentBox tipo="hoover" onClick={() => openQuestion(data)}>
            <div className="rating">                
                <div className="score">{data.rating}</div>
                <StyledText size="small" color="dark">rating</StyledText>
            </div>
            <StyledText color="dark">
                {data.title}
            </StyledText>
            
        </ContentBox>
    )
}

export default QuestionElement
