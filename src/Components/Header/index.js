import React from 'react';
//import  './styles.css';
import {Headers, List, Element, View, Text} from './styles';

const Header = () => (
    <Headers>
        <List>
            <Element>Button</Element>
            <Element>home</Element>
            <Element>
                <View>
                    <Text type='text'  placeholder='Pesquisar' id='seach'/>
                </View>
            </Element>
            <Element>
                Idiomas
            </Element>
            <Element>
                Notificações
            </Element>
            <Element>
                Configurações
            </Element>
        </List>
    </Headers>
);

export default Header;
