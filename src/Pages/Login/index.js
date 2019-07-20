import React, { Component } from 'react';
import { IconContext } from 'react-icons'
import { MdPersonOutline , MdLockOutline} from 'react-icons/md'
import api from '../../Services/api'

import { Container , Card , Logo , Field, InputText , Password ,  LogoInput, Submit, Link} from './styles';

export default class Login extends Component {
  submitLogin = () => api.post('/login', {
    email: 'iranjunior94@gmail.com',
    password: '34560629',
  }).then(response =>{
    if(response.status === 200){
      console.log(response.status);
      this.props.history.push('/');
    }
  }).catch(erro =>{
    console.log('Error', erro)
  })
  
  
  render() {
    return(
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
              <InputText />
          </Field>
          
          <Field>
              <LogoInput>
                  <IconContext.Provider value={{size: '1.5em'}}>
                      <MdLockOutline/>
                  </IconContext.Provider>
              </LogoInput>
              <Password/>
          </Field>
          
          <Field>
              <Submit onClick={this.submitLogin}>
                  ACESSAR
              </Submit>
          </Field>
          <Field>
              <Link>Registrar</Link>
              <Link>Esqueci a Senha</Link>
          </Field>
      </Card>
    </Container>
    );
  }
}
