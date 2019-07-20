import React from 'react';
import { connect } from 'react-redux';

import api from '../../Services/api'

import { IconContext } from 'react-icons'
import { MdPersonOutline , MdLockOutline } from 'react-icons/md'

import { Container , Card , Logo , Field, InputText , Password ,  LogoInput, Submit, Link} from './styles';

const handleEmail = (e) => ({type: 'EMAIL_USER', email: e.target.value})
const handlePassword = (e) => ({type: 'PASSWORD_USER', password: e.target.value})

const submitLogin = (user, dispatch) => (
    api.post('/login', {
        email: user.email,
        password: user.password,
    }).then(response =>{
        if(response.status === 200){
            dispatch({
                type: 'LOGGED_USER',
                token: response.data.token 
            })
        }
    }).catch(error =>{
    })
)

const Login = ({user, dispatch}) => (
  <Container>
    <Card>
        <Logo>
            <IconContext.Provider value={{size: '4em'}}>
                <MdPersonOutline/>
            </IconContext.Provider>
        </Logo>
        
        <Field>
            <LogoInput>
                  <IconContext.Provider value={{size: '1.5em'}}>
                      <MdPersonOutline/>
                  </IconContext.Provider>
              </LogoInput>
            <InputText onChange={(e) =>{dispatch(handleEmail(e))}}/>
        </Field>
        
        <Field>
            <LogoInput>
                <IconContext.Provider value={{size: '1.5em'}}>
                    <MdLockOutline/>
                </IconContext.Provider>
            </LogoInput>
            <Password onChange={(e) =>{dispatch(handlePassword(e))}}/>
        </Field>
        
        <Field>
            <Submit onClick={() => {submitLogin(user, dispatch)}}>
                ACESSAR
            </Submit>
        </Field>
        <Field>
            <Link>Registrar</Link>
            <Link>Esqueci a Senha</Link>
        </Field>
    </Card>
  </Container>
  );;

export default connect(state => ({user: state.user}))(Login);
