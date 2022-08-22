import { decodeToken } from "react-jwt"
import * as api from '../api';
import { AUTH, LOAD_USER, LOGOUT } from "../constants/actionTypes";

export const googleLogin = (credentials,router) => async (dispatch) =>{
    try{
        const {email:email} = decodeToken(credentials.credential);

        const {user,token} = await api.googleLogin(email);

        dispatch({type:AUTH , payload:{user, token}});

        router.push('/');
    }catch(err){
        console.log(err.message)
    }
} 

export const googleSignup = (credentials,router) => async (dispatch) =>{
    try{
        const data = decodeToken(credentials.credential);

        const {user,token} = await api.googleSignup(data);

        dispatch({type:AUTH,payload:{user,token}});

        router.push('/');
    }catch(err){
        console.log(err.message)
    }
}

export const logout = () => async (dispatch) =>{
    try{
        dispatch({type:LOGOUT})
    }catch(err){
        console.log(err.message)
    }
}

export const loadUser = (token) => async (dispatch) =>{
    try{
        let user = null;
        if(localStorage.getItem('token')){
            user = await api.loadUser();
        }
        dispatch({type:LOAD_USER,payload:{user,token:token}})
    }catch(err){
        localStorage.removeItem('token');
        console.log(err.message)
    }
}


export const signin = (formData, router) => async (dispatch) => {
    try {
      const { data } = await api.signIn(formData);
  
      dispatch({ type: AUTH, payload : data });
  
      router.push('/');

    } catch (error) {

      console.log(error);
    }
  };
  
  export const signup = (formData, router) => async (dispatch) => {
    try {
      const { data } = await api.signUp(formData);
  
      dispatch({ type: AUTH, payload: data });
  
      router.push('/');
      
    } catch (error) {

      console.log(error);
    }
  };