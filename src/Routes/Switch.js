import React, { useEffect } from 'react';
import Panel from '../Components/Panel';
import Map from '../Components/Map';
import Monitor from '../Components/Monitor';
import { connect } from 'react-redux'
// import { Container } from './styles';

const Switch = ({ route }) => {
    useEffect(() => {
        
    })
    if(route === 'panel'){
        return <Panel />
    }

    if(route === 'map'){
        return <Map />
    }

    if(route === 'monitor'){
        return <Monitor />
    }
}
export default connect(state => ({ ...state , route: state.routes.route}))(Switch);
