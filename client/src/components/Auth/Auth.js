import React, { useEffect, useState} from "react";
import { Avatar, Button, Paper, Grid, Typography, Container } from "@material-ui/core";
import { GoogleLogin } from '@react-oauth/google';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Input from "./Input.js";
import useStyles from './styles.js';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import {googleLogin, googleSignup} from '../../actions/auth.js';
import { signin, signup } from '../../actions/auth';

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

const Auth = () => {

    const [state,setState] = useState(initialState);

    const classes = useStyles();

    const dispatch = useDispatch();

    const history = useNavigate();

    const user = useSelector((state)=>state.authReducer.user);

    useEffect(()=>{
        if(user)
            history('/');
    },[user])

    const [showPassword, setShowPassword] = useState(false);

    const [isSignup, setIsSignUp] = useState(false);

    const handleShowPassword = () => setShowPassword(!showPassword);

    const handleChange = (e) => {
        setState({...state,[e.target.name]:e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(isSignup){
            dispatch(signup(state,history));
        }else{
            dispatch(signin(state,history));
        }
    }

    const googleSuccess = async (res) => {
        try {
            if(isSignup){
                dispatch(googleSignup(res,history))
            }else{
                dispatch(googleLogin(res,history))
            }
        } catch (err) {
            console.log(err.message)
        }
    }

    const googleFailure = async (err) => {
        console.log(err)
    }

    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant="h5">{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignup && (
                                <>
                                    <Input
                                        name="given_name"
                                        label="First Name"
                                        onChange={handleChange}
                                        autoFocus
                                        half
                                    />
                                    <Input
                                        name="family_name"
                                        label="Last Name"
                                        onChange={handleChange}
                                        autoFocus
                                        half
                                    />
                                </>
                            )
                        }
                        <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                        <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
                        {
                            isSignup &&
                            <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" />
                        }
                    </Grid>

                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                        {isSignup ? 'Sign Up' : 'Sign In'}
                    </Button>
                    <GoogleLogin
                        onSuccess={googleSuccess}
                        onError={googleFailure}
                        fullWidth
                    />
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Button onClick={() => setIsSignUp(!isSignup)}>
                                {isSignup ? 'Already have an account? Sign In' : 'Don\'t have an account? Sign up'}
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}

export default Auth