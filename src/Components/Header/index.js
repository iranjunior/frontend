import React, { useEffect } from 'react';
import { IconContext } from 'react-icons';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import { connect } from 'react-redux'
import { LOADED_USER } from '../../Constants/actionsType'

import { MdViewHeadline, MdSettings, MdNotifications, MdLanguage, MdHome } from 'react-icons/md'
import {Headers, List, Element, FieldText, View, Text, Circle }  from './styles';

import api , { config } from '../../Services/api';

const useStyles = makeStyles({
    avatar: {
      height: 30,
      width: 30,
    },
    icon_button: {
      height: 30,
      width: 30,
    },
    bigAvatar: {
      margin: 10,
      width: 60,
      height: 60,
    },
  });
  
const loadUser = (user , dispatch) => {
    if(!user){
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

const Header = ( { user ,  auth, dispatch }) => {
const classes = useStyles();

    useEffect(() => {
       loadUser(user ,dispatch)
    });
        
    return (
    <Headers>
        <List>
            <Element>
                <IconContext.Provider value={{color: '#fff' , size:'1em' }}>
                    <View>
                        <MdViewHeadline/>
                    </View>
                </IconContext.Provider>
            </Element>
            <Element>
                <IconContext.Provider value={{color: '#fff' , size:'1em' }}>
                    <IconButton>
                        <MdHome/>
                    </IconButton>
                </IconContext.Provider>
            </Element>
            <Element>
                <FieldText>
                    <Text type='text'  placeholder='Pesquisar' id='seach'/>
                </FieldText>
            </Element>
            <Element>
                <IconContext.Provider value={{color: '#fff' , size:'1em' }}>
                    <IconButton>
                        <MdLanguage/>
                    </IconButton>
                </IconContext.Provider>
            </Element>
            <Element>
                <IconContext.Provider value={{color: '#fff' , size:'1em' }}>
                    <IconButton>
                        <MdNotifications/>
                    </IconButton>
                </IconContext.Provider>
            </Element>
            <Element>
                <IconContext.Provider value={{color: '#fff' , size:'1em' }}>
                    <IconButton aria-controls='dropdown-menu-avatar-header' aria-haspopup="true" >
                        <Avatar alt='default' src='https://picsum.photos/200/300' className={classes.avatar} />
                    </IconButton>
                     <Menu id='dropdown-menu-avatar-header'>
                        
                    </Menu>   
                </IconContext.Provider>
            </Element>
            <Element>
            <IconContext.Provider value={{color: '#fff' , size:'1em' }}>
                    <IconButton aria-controls='dropdown-menu-avatar-header' aria-haspopup="true" >
                        <MdSettings/>
                    </IconButton>
                     <Menu id='dropdown-menu-avatar-header'>
                    </Menu>   
                </IconContext.Provider>
            </Element>
        </List>
    </Headers>
);
} 

export default connect(state => ({...state, user: state.user.user}))(Header);
