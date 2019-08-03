import React from 'react';
import MyFancyComponent from '../../Services/maps';

 import { Container, positionMap } from './styles';

const Maps = () => (
    <Container>
        <MyFancyComponent isMarkerShown />
    </Container>
);

export default Maps;
