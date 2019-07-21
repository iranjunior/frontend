import api from "./api";


export const isAuthenticate = (token) =>{
    if(token !== null || token !== undefined){
        api.get(`/token/${token}`).then(response => {
            if(response.status === 200 && response.data.token.isRevoked === '0' ){
                return true;
            }
            else
                return false
        }).catch(error => {
            return false
        })
    }else{
        return false
    }
}