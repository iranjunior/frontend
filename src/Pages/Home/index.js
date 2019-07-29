import React  from 'react';
import Header from '../../Components/Header'
import { connect } from 'react-redux'


const Home = () => (
        <Header></Header>
);

export default connect(state =>({}))(Home);
