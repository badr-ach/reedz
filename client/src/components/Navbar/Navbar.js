import React from "react";
import {Link, useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppBar, Toolbar, Typography,Button,Avatar } from "@material-ui/core";

import reedz from '../../images/reedz.png';
import useStyles from './styles.js';
import { logout } from "../../actions/auth";

const Navbar = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useNavigate('/');
    const user = useSelector((state)=>state.authReducer.user);

    const handleLogout = () =>{
        try{
            dispatch(logout());
            history('/')
        }catch(err){
            console.log(err)
        }
    }

    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">Reedz</Typography>
                <img className={classes.image} src={reedz} alt="reedz" height="60" />
            </div>
            <Toolbar className={classes.toolbar}>
                {user? (
                    <div className={classes.profile}>
                        <Avatar clasSName={classes.purple} alt={user.name} src={user.picture}>{user.name.charAt(0)}</Avatar>
                        <Typography className={classes.userName} variant="h6">{user.name}</Typography>
                        <Button variant='contained' className={classes.logout} color="secondary" onClick={()=>{handleLogout()}}>Logout</Button>
                    </div>
                ):(
                    <Button component={Link} to="/auth" variant="contained" color="primary">Sign in</Button>
                )}
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;