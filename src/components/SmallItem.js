import React from 'react';
import { Link } from 'react-router-dom';
import {  BottomNavigationAction } from '@mui/material';
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
export default function SmallItem(props) {

    return (
        <>

            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src={props.img} />
                </ListItemAvatar>
                <ListItemText
                    primary={props.name}
                    secondary={
                        <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color='primary'
                            >
                                price: {props.price}
                            </Typography>
                        </React.Fragment>
                    }
                />

                <BottomNavigationAction
                    label="view"
                    value="view"
                    icon={<OpenInNewOutlinedIcon color='third' />}
                    component={Link}
                    to={`/Item/${props.id}`}

                />
            </ListItem>
            <Divider variant="inset" />

        </>
    )
}