import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import { UserContext } from './context/UserContext'
import useFetch from './hooks/useFetch'
import QuestionElement from './QuestionElement'
import { Title, StyledText, StyledContainer, BtnStyle } from './styles/CommonStyles'

const TopSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 1rem;
`

const Home = () => {
    const {search, loggedIn} = useContext(UserContext)
    const [questions, setQuestions] = useState(null)
    const history = useHistory()

    const { loading, data, fetchData } = useFetch(
        `${process.env.REACT_APP_API_URL}/api/question`
      );

      useEffect(() => {
          
          console.log("Search:", search, questions)
        !loading && data && setQuestions(data);
        let aux =
          !loading &&
          data &&
          data.filter((q) => q.title.toUpperCase().indexOf(search.toUpperCase()) > -1 )
        console.log("aux:",aux)
          if (aux) {
            setQuestions(aux);
        }
      }, [loading, search]);
    
    const onClickNuevaPregunta = () => {
        console.log("nueva pregunta")
        history.push('/newQuestion')
    }

    return (
        <StyledContainer>
            <TopSection>
                <Title>Most Recent Questions</Title>
                {
                    loggedIn ? 
                    <BtnStyle tipo="filled" onClick={onClickNuevaPregunta}>Crear Pregunta</BtnStyle>
                    : null
                }
                
            </TopSection>
            
            {   !loading && questions &&
                questions.map((e, index)=>(
                    <QuestionElement key={e._id} data={e}/>
                ))
            }
        </StyledContainer>
    )
}

export default Home
