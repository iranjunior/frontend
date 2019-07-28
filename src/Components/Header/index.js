import React, { useEffect } from 'react';
import { IconContext } from 'react-icons';
import Avatar from '@material-ui/core/Avatar';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import { connect } from 'react-redux'
import { LOADED_USER, UIDESIGN_CLICKED_AVATAR_BUTTON } from '../../Constants/actionsType'

import { MdViewHeadline, MdSettings, MdNotifications, MdLanguage, MdHome } from 'react-icons/md'
import {Headers, List, Element, FieldText, View, Text, useStyles }  from './styles';


import api , { config } from '../../Services/api';
const handleClickAvatar = (e) =>({
        type: UIDESIGN_CLICKED_AVATAR_BUTTON, 
        uiDesign: e.currentTarget
    })

const handleClickAvatarClose = () =>({
        type: UIDESIGN_CLICKED_AVATAR_BUTTON, 
        uiDesign: null
    })

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

const Header = ( { user ,  uiDesignHeader, dispatch }) => {
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
                    <IconButton aria-controls='dropdown-menu-avatar-header' aria-haspopup="true" onClick={(e) => {dispatch(handleClickAvatar(e))}}>
                        <Avatar alt='default' src='https://picsum.photos/200/300' className={classes.avatar} />
                    </IconButton>
                     <Menu id='dropdown-menu-avatar-header'
                     anchorEl={uiDesignHeader.clickedAvatarButton}
                     keepMounted
                     open={Boolean(uiDesignHeader.clickedAvatarButton)}
                     onClose={(e) => {dispatch(handleClickAvatarClose())}}
                     PaperProps={{
                         style: {
                             top: 60
                         }
                     }}
                     >
                        <MenuItem>Perfil</MenuItem>
                        <MenuItem>Ajustes</MenuItem>
                        <MenuItem>Ajuda</MenuItem>
                        <MenuItem>Sair</MenuItem>
                    </Menu>   
                </IconContext.Provider>
            </Element>
            <Element>
            <IconContext.Provider value={{color: '#fff' , size:'1em' }}>
                    <MdSettings/>
                </IconContext.Provider>
            </Element>
        </List>
    </Headers>
);
} 

export default connect(state => ({...state, user: state.user.user, uiDesignHeader:state.uiDesign.header}))(Header);
