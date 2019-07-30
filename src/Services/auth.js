import api from "./api";


const isAuthenticate = (token) =>{
    if(token !== null || token !== undefined){
        api.get("/token/" + token, {})
        .then(response => {
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