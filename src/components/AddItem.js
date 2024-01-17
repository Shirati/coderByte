import { TextField, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addItem } from "../store/itemAction";
import { doId } from '../store/itemStore';
import { Navigate } from 'react-router-dom';
import { useState } from 'react';
import { Stack } from '@mui/material';

function AddItem() {
    const dispatch = useDispatch();
    const [ok, setOk] = useState("false");
    const [dataURL, setdDataURL] = useState("")
    const handleAddItem = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const newItem = {
            id: doId(),
            name: formData.get('name'),
            price: formData.get('price'),
            description: formData.get('description'),
            img: dataURL
        };
        dispatch(addItem(newItem));
        setOk("items");
    };

    function handleUpload(event) {
        event.preventDefault();
        const reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = () => {
            setdDataURL(reader.result);
        };
        reader.onerror = (error) => {
            console.error('There was a problem with the file upload', error);
        };
    };

    return (
        <>
            <Stack
                component="form"
                sx={{
                    width: '25ch', '& .MuiTextField-root': { m: 1, width: '25ch' },
                    alignContent: 'center',
                    position: 'center',
                    display: 'flex', justifyContent: 'center', alignItems: 'center',
                    margin: 'auto'
                }}
                spacing={2}
                noValidate
                autoComplete="off"
                onSubmit={(event) => handleAddItem(event)}
            >
                <TextField htmlFor="name" label="name" id="name" name="name" color="primary" focused />
                <TextField htmlFor="price" label="price" id="price" name="price" color="primary" focused />
                <TextField htmlFor="description" label="description" id="description" name="description" color="primary" focused />
                <TextField htmlFor="img" label="img" id="img" name="img" color="primary" type="file" inputProps={{accept: 'image/*'}} onChange={(event) => handleUpload(event)} focused />
                {dataURL != '' && <img src={dataURL} style={{
                    width: '25ch', '& .MuiTextField-root': { m: 1, width: '25ch' },
                    alignContent: 'center',
                    position: 'center',
                    display: 'flex', justifyContent: 'center', alignItems: 'center',
                    margin: 'auto'
                }} />}
                <Button variant="outlined" type="sumbit" color='third' sx={{ borderWidth: "2px" }}>add</Button>

            </Stack>
            {ok === "items" && <Navigate to={`/items`} replace />}
        </>
    );
};

export default AddItem
