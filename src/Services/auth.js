import api from "./api";


const isAuthenticate = (token) =>{
    console.log(token);
    if(token !== null || token !== undefined){
        console.log(token);
        api.get("/token/" + token, {})
        .then(response => {
            console.log("Entrou aqui", response);    
            if(response.status === 200 && response.data.token.is_revoked === false ){
                return true;
            }
            else
            return false
        })
        .catch(error => {
            return false
        })
    }else{
        return false
    }
}
export default isAuthenticate