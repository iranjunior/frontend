import React  from 'react';
import { Route, Redirect } from 'react-router-dom';
import api from '../Services/api';

export default class PrivateRoute extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        isLogged: false,
        requestReponse: false
      }
    }

    componentDidMount(){
      
      api.get('/auth', {
        headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}
      }).then( res => {
        if(res.status === 200) this.setState({ requestReponse: true, isLogged: true })
        else this.setState({requestReponse: true, isLogged: false})
      }).catch(err => {this.setState({requestReponse: true, isLogged: false})} )
    }

    render() {
      if( this.state.requestReponse ){
        if( this.state.isLogged ) { return <Route path={this.props.path} component={this.props.component}/> }
        else { return <Redirect to={{pathname: '/login', state:{from: this.props.location}}}/> }
      } else  return null
   
    }
}
