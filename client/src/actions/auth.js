import { decodeToken } from "react-jwt"
import * as api from '../api';
import { AUTH, LOAD_USER, LOGOUT } from "../constants/actionTypes";

export const googleLogin = (credentials,router) => async (dispatch) =>{
    try{
        const {email} = decodeToken(credentials.credential);
        
        const {data} = await api.googleLogin({email:email});

        dispatch({type:AUTH , payload:{user:data.user, token:data.token}});

        router('/');
    }catch(err){
        console.log(JSON.stringify(err));
    }
} 

export const googleSignup = (credentials,router) => async (dispatch) =>{
    try{
        const {email} = decodeToken(credentials.credential);
        
        const {data} = await api.googleSignup({email:email});

        dispatch({type:AUTH , payload:{user:data.user, token:data.token}});

        router('/');
    }catch(err){
        console.log(err)
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
        let res = null;
        if(localStorage.getItem('token')){
            console.log("test")
            res = await api.loadUser();
        }
        dispatch({type:LOAD_USER,payload:{user:res?.data.user,token:token}})
    }catch(err){
        localStorage.removeItem('token');
        console.log(err)
    }
}


export const signin = (formData, router) => async (dispatch) => {
    try {
      const { data } = await api.signIn(formData);
  
      dispatch({ type: AUTH, payload : data });
  
      router('/');

    } catch (error) {

      console.log(error);
    }
  };
  
  export const signup = (formData, router) => async (dispatch) => {
    try {
      const { data } = await api.signUp(formData);
  
      dispatch({ type: AUTH, payload: data });
  
      router('/');
      
    } catch (error) {

      console.log(error);
    }
  };