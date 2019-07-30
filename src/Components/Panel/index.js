import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import  api, { config } from '../../Services/api';
import  { LOADED_VACANCIES } from '../../Constants/actionsType';
import { MdWhatshot } from 'react-icons/md'
import { IconContext } from 'react-icons';


import { Container, Card, Hospital, Vacancies, Specialities, Icon, Name } from './styles';

const loadVacancies = (vacancies, dispatch) => {

if(vacancies === null || vacancies === undefined || Object.keys(vacancies).length === 0){
    api.get('/hospitals', config)
    .then(response =>{
        if(response.status === 200){
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
            {
                vacancies.map(el => {
                  return(

                      <Card>
                        <Hospital>{el.hospital}</Hospital>
                        <Specialities>
                            <Icon>
                                <IconContext.Provider value={{color: '#fff', size: '2em', style:{margin: '13px'}}}>
                                    <MdWhatshot />
                                </IconContext.Provider>
                            </Icon>
                            {el.speciality}
                        </Specialities>
                        <Vacancies>
                            {el.vacancy}
                            <Name>
                                Leitos
                            </Name>
                        </Vacancies>
                    </Card>                    
                      )}  
                )
            }
        </Container>
    )

};

export default connect(state =>({...state, vacancies: state.vacancies.vacancies}))(Panel);
