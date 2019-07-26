import React from 'react';
import { IconContext } from 'react-icons'
import { MdViewHeadline, MdSettings, MdNotifications, MdLanguage, MdHome } from 'react-icons/md'
//import  './styles.css';
import {Headers, List, Element, FieldText, View, Text, Circle} from './styles';

//import api , { config } from '../../Services/api';

const Header = () => (
    <Headers>
        <List>
            <Element>
                <Circle>
                    <IconContext.Provider value={{color: '#fff' , size:'1.5em' }}>
                        <View>
                            <MdViewHeadline/>
                        </View>
                    </IconContext.Provider>
                </Circle>
            </Element>
            <Element>
                <IconContext.Provider value={{color: '#fff' , size:'1.5em' }}>
                    <MdHome/>
                </IconContext.Provider>
            </Element>
            <Element>
                <FieldText>
                    <Text type='text'  placeholder='Pesquisar' id='seach'/>
                </FieldText>
            </Element>
            <Element>
                <IconContext.Provider value={{color: '#fff' , size:'1.5em' }}>
                    <MdLanguage/>
                </IconContext.Provider>
            </Element>
            <Element>
                <IconContext.Provider value={{color: '#fff' , size:'1.5em' }}>
                    <MdNotifications/>
                </IconContext.Provider>
            </Element>
            <Element>
                <IconContext.Provider value={{color: '#fff', size:'1.5em' }}>
                    <MdSettings/>
                </IconContext.Provider>
            </Element>
        </List>
    </Headers>
);

export default Header;
