import { Input, InputBase, TextField } from '@material-ui/core'
import axios from 'axios'
import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import { UserContext } from './context/UserContext'
import { BtnStyle, StyledContainer, StyledText, Title } from './styles/CommonStyles'
import RichText from './utils/RichText'

const StyledTextField = styled(TextField)`
        width: 100%;
`

const NewQuestion = () => {
    const [title, setTitle] = useState('')
    const [detail, setDetail] = useState('')
    const {loggedIn, user, userID} = useContext(UserContext)

    const history = useHistory();

    const handleChangeTitle = (event) => {
        setTitle(event.target.value);
    };
    const handleChangeDetail = (value) => {
        console.log("change: ",value)
        setDetail(value)        
    }
    const handleSubmitQuestion = () => {
        const dataSubmit = {
            title: title,
            detail: detail,
            user_id: userID
        }
        console.log("question: ", dataSubmit)
        if (!title || !detail) {
            console.log("Llenar los campos..")
            return
        }
        axios.post(
            `${process.env.REACT_APP_API_URL}/api/question`, 
              JSON.stringify(dataSubmit),
             {headers: {"Content-Type": 'application/json'}}
          )
          .then(r => {
              history.goBack()
          })
          .catch(e => {
        })
          
    }
    return (
        <StyledContainer>
            <Title>Nueva Pregunta</Title>
            <StyledText color="dark">Título de tu pregunta</StyledText>            
            <StyledTextField
                    id="title"
                    variant="outlined"
                    size="small"
                    placeholder="Título..."
                    value={title}
                    onChange={handleChangeTitle}
            />
            <StyledText color="dark">Escribe el contenido de tu pregunta</StyledText>
            <RichText 
                value={detail}
                handleChange={handleChangeDetail}
            />
            <BtnStyle type="filled" onClick={handleSubmitQuestion}>Crear Pregunta</BtnStyle>
        </StyledContainer>
    )
}

export default NewQuestion
