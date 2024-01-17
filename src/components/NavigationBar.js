import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { useSelector } from 'react-redux';
import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import logo from '../images/logo.jpg'

function NavigationBar() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    // const Ismanager = useSelector(state => state.users.isManager)

    return (
        <>
            <BottomNavigation value={value} onChange={handleChange} sx={{ marginBottom: '40px', backgroundImage: `url(${logo})` }} >
                <BottomNavigationAction
                    color='primary'
                    label="Home"
                    value="/"
                    icon={<HomeOutlinedIcon color='secondary' />}
                    component={Link}
                    to="/"
                />
                <BottomNavigationAction
                    color='primary'
                    label="Login"
                    value="Login"
                    icon={<PersonAddAltOutlinedIcon color='secondary' />}
                    component={Link}
                    to="/Login"
                />
           {/* !Ismanager &&     */}
            { <BottomNavigationAction
                    color='primary'
                    label="donate"
                    value="donate"
                    icon={<VolunteerActivismOutlinedIcon color='secondary' />}
                    component={Link}
                    to="/donate"
                />}
                <BottomNavigationAction color='primary'
                    label="items"
                    value="items"
                    icon={<ProductionQuantityLimitsOutlinedIcon color='secondary' />}
                    component={Link}
                    to="/items"
                />
                <BottomNavigationAction
                    color='primary'
                    label="update details"
                    value="UpUser"
                    icon={<PersonOutlineOutlinedIcon color='secondary' />}
                    component={Link}
                    to="/UpUser"
                />
             {/* Ismanager &&   */}
              { <BottomNavigationAction
                    color='primary'
                    label="all donations"
                    value="all donations"
                    icon={<ListOutlinedIcon color='secondary' />}
                    component={Link}
                    to="/showalldonate"
                />}
           {/* Ismanager &&   */}
              { <BottomNavigationAction
                    color='primary'
                    label="add item"
                    value="add item"
                    icon={<AddCircleOutlineIcon color='secondary' />}
                    component={Link}
                    to="/addItem"
                />}
            </BottomNavigation>
        </>);
};

export default NavigationBar;