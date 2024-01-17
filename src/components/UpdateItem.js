import { TextField, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { updateItem } from "../store/itemAction";
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useState } from 'react';
import { Stack } from '@mui/material';

const UpdateItem = (params) => {

    const { id } = useParams();
    const [ok, setOk] = useState("false");
    const [dataURL, setdDataURL] = useState("")
    const itemsStore = useSelector(state => state.items.items)
    const Ismanager = useSelector(state => state.users.isManager)
    const currentItem = itemsStore.find(a => a.id == id)
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();

        // Get the form data
        const formData = new FormData(event.target);
        const item = {
            id: id,
            name: formData.get('name') != "" ? formData.get('name') : currentItem.name,
            price: formData.get('price') != "" ? formData.get('price') : currentItem.price,
            description: formData.get('description') != "" ? formData.get('description') : currentItem.description,
            img: dataURL !== "" ? dataURL : currentItem.img
        };

        dispatch(updateItem(item));
        setOk("item");
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

    if (!Ismanager)
        return <Navigate to={`/Home`} replace />;

    return (<><Stack
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
        onSubmit={(event) => handleSubmit(event)}
    >

        <TextField htmlFor="name" defaultValue={currentItem.name} label="name" id="name" name="name" color="primary" focused />
        <TextField htmlFor="price" defaultValue={currentItem.price} label="price" id="price" name="price" color="primary" focused />
        <TextField htmlFor="description" defaultValue={currentItem.description} label="description" id="description" name="description" color="primary" focused />
        <TextField htmlFor="img" label="img" id="img" name="img" color="primary" type="file" onChange={handleUpload} focused />
        <img src={dataURL !== "" ? dataURL : currentItem.img} style={{
            width: '25ch', '& .MuiTextField-root': { m: 1, width: '25ch' },
            alignContent: 'center',
            position: 'center',
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            margin: 'auto'
        }} />
        <Button variant="outlined" type="sumbit" color='third' sx={{ borderWidth: "2px" }}>update Item</Button>
    </Stack>
        {ok === "item" && <Navigate to={`/Item/${id}`} replace />}
    </>
    );
};

export default UpdateItem
