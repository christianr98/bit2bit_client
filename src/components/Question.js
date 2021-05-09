import axios from 'axios'
import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { UserContext } from './context/UserContext'
import useFetch from './hooks/useFetch'
import {BtnStyle, StyledContainer, StyledText, Title, ContentBox} from './styles/CommonStyles'
import RichText from './utils/RichText'

const CurrentQuestion = styled.div`
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
const Question = ({location}) => {
    const dataQuestion = location.state ? location.state[0] : null
    const {loggedIn, setLoggedIn, user, setUser, userID} = useContext(UserContext)
    const [question, setQuestion] = useState('')
    const { loading, data, fetchData } = useFetch(
        `http://localhost:3030/api/answer/question/${dataQuestion._id}`
      );
    const handleChange = (value) => {
        console.log("change: ",value)
        setQuestion(value)
        
    }
    const onSubmitAnswer = () => {
        console.log(dataQuestion)
        if (!question) {
            console.log("Escribir respuesta")
            return
        }
        const dataSubmit = {
            detail: question,
            user_id: userID,
            question_id: dataQuestion._id
        }
        console.log("question: ", dataSubmit)
        
        axios.post(
            `http://localhost:3030/api/answer`, 
              JSON.stringify(dataSubmit),
             {headers: {"Content-Type": 'application/json'}}
          )
          .then(r => {
              setQuestion('')
              fetchData()
          })
          .catch(e => {
        })
          
    }
    console.log(data)
    return (
        dataQuestion &&
        <StyledContainer>
            <Title>{dataQuestion.title}</Title>
            <ContentBox>
                <div className="rating">                
                    <div className="score">{dataQuestion.rating}</div>
                    <StyledText size="small" color="dark">rating</StyledText>
                </div>
                <div className="content" dangerouslySetInnerHTML={{__html: dataQuestion.detail}}></div>

            </ContentBox>
            {   !loading && data && 
            <StyledText color="dark">{`${data.length} answers`}</StyledText>
            }
            <React.Fragment>
                {   !loading && data &&
                    data.map((e, index) => (
                        <ContentBox key={index}>
                            <div className="rating">
                                {e.rating}
                            </div>
                            <div className="content" dangerouslySetInnerHTML={{__html: e.detail}}></div>
                            
                        </ContentBox>
                    ))
                }
            </React.Fragment>
            {   loggedIn && 
                <React.Fragment>
                    <StyledText color="dark">Escribir tu respuesta</StyledText>
                    <RichText 
                        value={question ? question : ''}
                        handleChange={handleChange}
                    />
                    <BtnStyle tipo="filled" align="right" onClick={onSubmitAnswer}>Enviar respuesta</BtnStyle>
                </React.Fragment>
            }
        </StyledContainer>
    )
}

export default Question
