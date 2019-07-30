import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import  api, { config } from '../../Services/api';
import  { LOADED_VACANCIES } from '../../Constants/actionsType';
import { MdWhatshot } from 'react-icons/md'
import { IconContext } from 'react-icons';


import { Container, Card, Hospital, Vacancies, Specialities, Icon } from './styles';

const loadVacancies = (vacancies, dispatch) => {

if(vacancies === null || vacancies === undefined || Object.keys(vacancies).length === 0){
    console.log('Entrou aqui');
    api.get('/hospitals', config)
    .then(response =>{
        if(response.status === 200){
            console.log(response);
            dispatch({
                type: LOADED_VACANCIES,
                vacancies: response.data.hospitals
            })
        }
    })
    .catch(erro =>{
        
    })
}

}

const Panel = ({ vacancies , dispatch}) => {

    useEffect(() =>{
        console.log(vacancies);
        loadVacancies(vacancies , dispatch)
    });

    return (
        <Container>
            <Card>
                <Hospital> Hospital Agamenon Magalhães</Hospital>
                <Specialities>
                    <Icon>
                        <IconContext.Provider value={{color: '#fff', size: '3em'}}>
                            <MdWhatshot />
                        </IconContext.Provider>    
                    </Icon>
                    Clinica
                </Specialities>
                <Vacancies>30</Vacancies>
            </Card>
            <Card>
                <Hospital>Teste 2</Hospital>
                <Specialities>Clinica</Specialities>
                <Vacancies>20</Vacancies>
            </Card>
            <Card>
                <Hospital>Teste 3</Hospital>
                <Specialities>Clinica</Specialities>
                <Vacancies>3</Vacancies>
            </Card>
            <Card>
                <Hospital>Teste 4</Hospital>
                <Specialities>Clinica</Specialities>
                <Vacancies>6</Vacancies>
            </Card>
            <Card>
                <Hospital>Teste 5 </Hospital>
                <Specialities>Clinica</Specialities>
                <Vacancies>3</Vacancies>
            </Card>
            <Card>
                <Hospital>Teste 6</Hospital>
                <Specialities>Clinica</Specialities>
                <Vacancies>5</Vacancies>
            </Card>
            <Card>
                <Hospital> Teste 7</Hospital>
                <Specialities>Clinica</Specialities>
                <Vacancies>9</Vacancies>
            </Card>
        </Container>
    )

};

export default connect(state =>({...state, vacancies: state.vacancies.vacancies}))(Panel);
