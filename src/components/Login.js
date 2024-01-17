import React, { useEffect, useRef, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchInitialData, login } from '../store/userActions';
import { Navigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Stack from '@mui/material/Stack';

export default function Login(props) {

    const { mes } = useParams();
    const dispatch = useDispatch();
    const [ok, setOk] = useState("false");
    const Ismanager = useSelector(state => state.users.isManager)

    function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const newUser = {
            id: null,
            name: formData.get('name'),
            email: formData.get('email'),
            password: formData.get('password')
        };
        console.log(newUser);
        dispatch(login(newUser));

        if (mes === "true")
            setOk("donate");
        else setOk("home");
    }

    function fff() {
dispatch(fetchInitialData());
    }

    return (
        <>
            <Stack
                component="form"
                sx={{
                    width: '25ch', '& .MuiTextField-root': { m: 1, width: '25ch' },
                    alignContent: 'center',
                    position: 'center',
                    display: 'flex', justifyContent: 'center', alignItems: 'center',
                    margin: 'auto',
                }}
                spacing={2}
                noValidate
                autoComplete="off"
                onSubmit={(event) => onSubmit(event)}
            >
                <TextField htmlFor="name" label="name" id="name" name="name" color="primary" focused required />
                <TextField htmlFor="email" type='email' id="email" name="email" label="email" color="primary" focused required />
                <TextField htmlFor="password" type='password' id="password" name="password" label="password" color="primary" focused required />
                <button onClick={fff}>ooo</button>
                <Button sx={{
                    alignContent: 'center',
                    position: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: 'auto',
                    borderWidth: "2px",
                    marginTop: '14px',
                    borderWidth: "2px"
                }}
                    variant="outlined"
                    type="sumbit"
                    color='third'
                >
                    אישור
                </Button >
            </Stack>

            {mes === "true" && <h1 style={{ fontFamily: 'Segoe Print,Arial', textAlign: 'center', color: 'gray' }}>before donating, you have to log in</h1>}
            {mes === "t" && <h1 style={{ fontFamily: 'Segoe Print,Arial', textAlign: 'center', color: 'gray' }}>before update user details, you have to log in</h1>}

            {ok === "donate" && !Ismanager && <Navigate to={`/donate`} replace />}
            {ok === "home" && <Navigate to={`/`} replace />}

        </>
    )


}