import React , { useEffect } from 'react';
import Header from '../../Components/Header'
import Sidebar from '../../Components/Sidebar'
import { Container }  from './styles'
import { connect } from 'react-redux'
import { LOADED_USER } from '../../Constants/actionsType'


import api , { config } from '../../Services/api';

const loadUser = ( user, dispatch) => {
        if(user === null || user === undefined || Object.keys(user).length === 0){
         api.get(`/user`, config)
                .then(response => { 
                        if(response.status === 200)
                        dispatch({
                                type: LOADED_USER,
                                user:response.data.user 
                        })
                } )
                .catch()
        }
        
    }
    

const Home = ({user, dispatch}) => {
        
    useEffect(() => {
        console.log(user)
        loadUser(user , dispatch)
    });

        return (
        <Container>
                <Header></Header>
                <Sidebar></Sidebar>
        </Container>


)};

export default connect(state =>({...state , user: state.user}))(Home);
