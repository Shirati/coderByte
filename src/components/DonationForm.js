import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useDispatch } from "react-redux";
import { addDonation } from '../store/donationAction';
import Checkbox from '@mui/material/Checkbox';
import { useSelector } from 'react-redux';
import { useRef } from 'react';
import { Navigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import { Stack } from '@mui/system';

export default function DonationForm() {

    const itemsStore = useSelector(state => state.items.items)
    const currentUser = useSelector(state => state.users.currentUser)
    const [chosenItems, setChosenItems] = useState([]);

    const card = useRef('');
    const phone = useRef('');
    const email = useRef('');
    const [ans, setAns] = useState(-1);
    const dispatch = useDispatch();

    function onChoose(a) {
        let x = chosenItems.findIndex(b => b.id === a.id)
        if (x === -1)
            setChosenItems([...chosenItems, a])
        else setChosenItems([...chosenItems.splice(a, 1, 1)])
    }

    function onSubmit(event) {
        event.preventDefault();
        let a = dispatch(addDonation({ id: null, userId: currentUser.id, userName: currentUser.name, items: chosenItems }));
        console.log(a);
        console.log(a.payload.id);
        setAns(a.payload.id)
        console.log(ans);
    }
    console.log(currentUser.name);
    if (currentUser.name === "-1")
        return <Navigate to={`/Login/true`} replace />;
    return (<>

        <Stack
            component="form"
            spacing={2}
            noValidate
            autoComplete="off"
            onSubmit={(event) => onSubmit(event)}
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
                width: '120ch',
                alignContent: 'center',
                position: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                margin: 'auto'
            }}
        >
            <Box sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
                width: '60ch'
            }}>
                <TextField label="name" color="primary" focused value={currentUser.name} required />
                <TextField type='number' label="מספר אשראי" color="primary" focused ref={card} required />
                <TextField type='phone' label="phone" color="primary" focused ref={phone} required />
                <TextField type='email' label="email" color="primary" focused ref={email} required />
            </Box>

            <ul >
                {itemsStore.map(a =>
                    <li ><Checkbox key={a} onClick={() => onChoose(a)} color='secondary' />
                        {a.name + " " + a.price}
                    </li>)}
            </ul>
            <Button variant="outlined" type='submit'
                color='third'
                sx={{ borderWidth: "2px" }} >
                אישור
            </Button>
        </Stack>
        {ans !== -1 && <Navigate to={`/Thanks/${ans}`} replace />}

    </>)
}
