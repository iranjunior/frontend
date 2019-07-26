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
/* const isLogged = ( token ) =>(
            api.get(`/auth`, {
                headers:{
                    'Authorization': `Bearer ${token}`
                    }
            })
            .then(response => (response.data.validator))
            .catch(err => (false))
    ) 
export const  PrivateRoute =  function ( {component: Component, ...rest}){
const isLoggedTest =   isLogged(localStorage.getItem('token'));
if(isLoggedTest){

    return (
        <Route 
        {...rest} 
        render={(props) => (
            <Component {...props}/>
            )   
            
        } />
    )
}else{
    return (
        <Route 
        {...rest} 
        render={(props) => (
                <Redirect to={{pathname: '/login', state:{from: props.location}}}/>
            )}/> 
        )

    }
}
 */
// import { Container } from './styles';
/* 
export default class PrivateRoute extends Component {
    constructor({component: Component, ...rest}){
        super();
        this.state = {validator : false, component: Component, rest}
        this.isLogged = this.isLogged.bind(this)
    }
    
    async componentDidMount(){
        const validator = await this.isLogged(localStorage.getItem('token'));
        this.setState({ ...state ,validator})
    }
    isLogged = ( token ) =>(
        api.get(`/auth`, {
            headers:{
                'Authorization': `Bearer ${token}`
                }
        })
        .then(response => (response.data.validator))
        .catch(err => (false))
    ) 
    
    render() {
    return this.state.validator ? (
        <Route 
        {...rest} 
        render={(props) => (
            <Component {...props}/>
            )   
            
        } />
    ):(
        <Route 
        {...rest} 
        render={(props) => (
                <Redirect to={{pathname: '/login', state:{from: props.location}}}/>
            )}/> 
    );
  }
} */