import { AUTH, LOAD_USER, LOGOUT } from "../constants/actionTypes"

export const authReducer = (state = { user : null } ,action) =>{
    switch(action.type){
        case AUTH :
            localStorage.setItem('token',action.payload.token);
            return { user: action.payload.user };
        case LOGOUT :
            localStorage.removeItem('token');
            return { user : null} ;
        case LOAD_USER :
            return { user : action.payload.user}
        default : 
            return state;
    }
}