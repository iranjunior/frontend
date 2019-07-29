import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { IconContext } from 'react-icons';
import Avatar from '@material-ui/core/Avatar';
import { MdPieChartOutlined } from 'react-icons/md'
import {Sidebars, List, Element, AvatarSpace, InfoUser, UserNameSpace, UserEmailSpace, useStyles } from './styles';


const Sidebar = ({ user }) => {
    const classes = useStyles();
    useEffect(() => {
    });
    return (
    <Sidebars>
        <List>
            <AvatarSpace>
                <Avatar alt='default' src='https://picsum.photos/200/300' className={classes.avatar} />
                <InfoUser>
                    <UserNameSpace>
                        Iran Junior
                    </UserNameSpace>
                    <UserEmailSpace>
                        iranjunior94@gmail.com
                    </UserEmailSpace>
                </InfoUser>
            </AvatarSpace>
            <Element>
                 <IconContext.Provider value={{color: 'darkgray' , size:'1em' }}>
                    <MdPieChartOutlined />
                </IconContext.Provider>
                Painel de Vagas
            </Element>
            <Element>
                Visão Geral
            </Element>
            <Element>
                Monitoramento
            </Element>
            <Element>
                Estatisticas
            </Element>
            <Element>
                Hospitais
            </Element>
        </List>
    </Sidebars>

)};

export default connect(state => ({...state, user: state.user.user}))(Sidebar);
