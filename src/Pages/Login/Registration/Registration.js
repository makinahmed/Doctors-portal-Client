import React from 'react';
import { Alert, AlertTitle, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from './../../Hooks/useAuth';
import { lightGreen } from '@mui/material/colors';
const Registration = () => {

    const [loginData, setLoginData] = useState({})
    const { user, authError, registerUser, isLoading } = useAuth()
    const history = useHistory()
    

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if (loginData.password != loginData.password2) {
            alert("Your Password did not match!!")
        }
        registerUser(loginData.email, loginData.password,loginData.name,history)
        e.preventDefault()
    }
    return (
        <Container>
            <Grid container spacing={2} sx={{ mt: 5 }}>
                <Grid item xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>Register</Typography>
                    {!isLoading && <form onSubmit={handleLoginSubmit}>
                        <TextField
                            type="name"
                            name="name"
                            onBlur={handleOnBlur}
                            sx={{ width: "75%", m: 1 }}
                            id="standard-basic"
                            label="Your Name"
                            variant="standard"
                        /> <br />
                        <TextField
                            type="email"
                            name="email"
                            onBlur={handleOnBlur}
                            sx={{ width: "75%", m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            variant="standard"
                        /> <br />
                        <TextField
                            name="password"
                            onBlur={handleOnBlur}
                            sx={{ width: "75%", m: 1 }}
                            type="password"
                            id="standard-basic"
                            label="Your Password"
                            variant="standard"
                        />
                        <TextField
                            name="password2"
                            onBlur={handleOnBlur}
                            sx={{ width: "75%", m: 1 }}
                            type="password"
                            id="standard-basic"
                            label="re-type password"
                            variant="standard"
                        />
                        <br />
                        <br />


                        <Button
                            sx={{ width: "75%", m: 1 }}
                            variant="contained"
                            type="submit"
                        >Register</Button>
                        <Button>
                            <NavLink
                                style={{ textDecoration: 'none' }}
                                to="/login">Already Registered? Please Login
                            </NavLink>
                        </Button>
                    </form>}
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">You Have Successfully Registered!</Alert>}
                    {authError && <Alert severity="error">{authError}!</Alert>}
                </Grid>

            </Grid>
        </Container>
    );
};

export default Registration;