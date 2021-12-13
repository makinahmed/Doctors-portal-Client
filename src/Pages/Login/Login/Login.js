import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { NavLink,useLocation ,useHistory} from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import login from './../../../images/login.png'

const Login = () => {
    const [loginData, setLoginData] = useState({})
   const location = useLocation();
   const history = useHistory();

    const { user, loginUser, isLoading, authError ,signInWithGoogle} = useAuth()
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password,history)
        e.preventDefault()
    }

    const handleGoogleSignin =()=> {
        signInWithGoogle(location,history);

    }

    return (
        <Container>
            <Grid container spacing={2} sx={{ mt: 5 }}>
                <Grid item xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>Login</Typography>
                    {!isLoading && <form onSubmit={handleLoginSubmit}>
                        <TextField
                            name="email"
                            onBlur={handleOnChange}
                            sx={{ width: "75%", m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            variant="standard"
                        /> <br />
                        <TextField
                            name="password"
                            onBlur={handleOnChange}
                            sx={{ width: "75%", m: 1 }}
                            type="password"
                            id="standard-basic"
                            label="Your Password"
                            variant="standard"
                        />
                        <br />
                        <br />

                        <Button
                           
                            sx={{ width: "75%", m: 1 }}
                            variant="contained"
                            type="submit"
                        >Log In</Button>
                        <Button>
                            <NavLink
                                style={{ textDecoration: 'none' }}
                                to="/register">New User? Please Register</NavLink>
                        </Button>
                    </form>}
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">You Have Successfully Registered!</Alert>}
                    {authError && <Alert severity="error">{authError}!</Alert>}
                    <Button onClick={handleGoogleSignin} variant="contained">Sign in with Google</Button>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;