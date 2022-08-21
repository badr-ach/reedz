import React, { useState } from "react";
import { Avatar, Button, Paper, Grid, Typography, Container } from "@material-ui/core";
import { GoogleLogin } from 'react-google-login';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Input from "./Input.js";
import Icon from "./Icon.js";
import useStyles from './styles.js'

const Auth = () => {
    const classes = useStyles();

    const state = null;
    const [showPassword, setShowPassword] = useState(false);

    const [isSignup, setIsSignUp] = useState(false);

    const handleShowPassword = () => setShowPassword(!showPassword);

    const handleChange = () => {

    }

    const handleSubmit = () => {

    }

    const googleSuccess = () =>{

    }

    const googleFailure = () =>{

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
                                        name="firstName"
                                        label="First Name"
                                        onChange={handleChange}
                                        autoFocus
                                        half
                                    />
                                    <Input
                                        name="lastName"
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
                    <GoogleLogin
                        clientId="GOOGLE ID"
                        render={(renderProps)=>(
                            <Button className={classes.googleButton} color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon/>} variant ="contained">
                                Google
                            </Button>
                        )}
                        onSuccess={googleSuccess}
                        onfailure={googleFailure}
                        cookiePolicy="single_host_origin"
                    />
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                        {isSignup ? 'Sign Up' : 'Sign In'}
                    </Button>
                    <Grid container justify="flex-end">
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