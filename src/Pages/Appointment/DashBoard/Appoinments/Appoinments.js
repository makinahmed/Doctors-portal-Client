import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useAuth from '../../../Hooks/useAuth';
import { Link,useRouteMatch } from 'react-router-dom';

const Appoinments = ({ date }) => {

    const { user, token } = useAuth();

    const [appoinments, setAppoinments] = useState([])
    let { path } = useRouteMatch();
    useEffect(() => {
        fetch(`https://obscure-bayou-38255.herokuapp.com/appoinments?email=${user.email}&date=${date}`, {
            headers: {
                'authorization': `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setAppoinments(data)
            })
    }, [date])



    return (
        <div>
            <h2>Appoinments: {appoinments.length}</h2>
            <TableContainer component={Paper}>
                <Table aria-label="Appointments table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Patient Name</TableCell>
                            <TableCell align="center">Service</TableCell>
                            <TableCell align="right">Phone No.</TableCell>
                            <TableCell align="center">Appointment Time</TableCell>
                            <TableCell align="center">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {appoinments.map(appoinment => (
                            <TableRow
                                key={appoinment._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {appoinment.displayName}
                                </TableCell>
                                <TableCell align="right">{appoinment.service}</TableCell>
                                <TableCell align="right">{appoinment.phone}</TableCell>
                                <TableCell align="right">{appoinment.appointMentTime}
                                </TableCell>
                                <TableCell align="right">{appoinment.payment ? "paid" : <Link to={`${path}/payment/${appoinment._id}`}>
                                    <button>Pay</button>
                                </Link>}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Appoinments;