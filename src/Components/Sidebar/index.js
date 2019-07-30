import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { IconContext } from 'react-icons';
import Avatar from '@material-ui/core/Avatar';
import { MdPieChartOutlined, MdCast, MdShowChart, MdInsertChart, MdLocalHospital, MdHealing, MdArchive, MdContacts } from 'react-icons/md'
import {Sidebars, List, Element, AvatarSpace, InfoUser, UserNameSpace, UserEmailSpace, Hr,  useStyles } from './styles';


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
                        {user.username}
                    </UserNameSpace>
                    <UserEmailSpace>
                        {user.email}
                    </UserEmailSpace>
                </InfoUser>
            </AvatarSpace>
            <Element>
                 <IconContext.Provider value={{color: 'darkgray' , size:'1.5em' ,style: {margin: ' 0 20px'} }}>
                    <MdPieChartOutlined />
                </IconContext.Provider>
                Painel de Vagas
            </Element>
            <Element>
                <IconContext.Provider value={{color: 'darkgray' , size:'1.5em' ,style: {margin: ' 0 20px'} }}>
                    <MdCast />
                </IconContext.Provider>
                Visão Geral
            </Element>
            <Element>
                <IconContext.Provider value={{color: 'darkgray' , size:'1.5em' ,style: {margin: ' 0 20px'} }}>
                    <MdShowChart />
                </IconContext.Provider>
                Monitoramento
            </Element>
            <Element>
                <IconContext.Provider value={{color: 'darkgray' , size:'1.5em' ,style: {margin: ' 0 20px'} }}>
                    <MdInsertChart />
                </IconContext.Provider>
                Estatisticas
            </Element>
            <Hr/>
            <Element>
                <IconContext.Provider value={{color: 'darkgray' , size:'1.5em' ,style: {margin: ' 0 20px'} }}>
                    <MdLocalHospital />
                </IconContext.Provider>
                Hospitais
            </Element>
            <Element>
                <IconContext.Provider value={{color: 'darkgray' , size:'1.5em' ,style: {margin: ' 0 20px'} }}>
                    <MdHealing />
                </IconContext.Provider>
                Especialidade
            </Element>
            <Element>
                <IconContext.Provider value={{color: 'darkgray' , size:'1.5em' ,style: {margin: ' 0 20px'} }}>
                    <MdArchive />
                </IconContext.Provider>
                Historico
            </Element>
            <Element>
                <IconContext.Provider value={{color: 'darkgray' , size:'1.5em' ,style: {margin: ' 0 20px'} }}>
                    <MdContacts />
                </IconContext.Provider>
                Contato
            </Element>
        </List>
    </Sidebars>

)};

export default connect(state => ({...state, user: state.user.user}))(Sidebar);
