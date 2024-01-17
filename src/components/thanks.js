import { useSelector } from "react-redux"
import { useParams } from 'react-router-dom';
import logo from '../logo.jpg'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import {  BottomNavigationAction } from '@mui/material';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

export default function Thanks() {

    const DonateStore = useSelector(state => state.donations.donations);
    const { id } = useParams();
    const it = DonateStore.find(a => a.id == id)

    function sum() {
        var p = 0;
        it.items.map(a => p += a.price)
        return p;
    }

    return (
        <Card sx={{
            maxWidth: 345,
            alignContent: 'center',
            position: 'center',
            justifyContent: 'center', alignItems: 'center',
            margin: 'auto',
            marginTop: '100px',
        }}>
            <CardHeader

                action={
                   
                        <BottomNavigationAction
                            label="Update Item"
                            value="Update Item"
                            icon={<CloseOutlinedIcon color="third"/>}
                            component={Link}
                            to={"/Home/"} />
                  
                }
                title={it.userName + ", thanks for donating!"}
            />
            <CardMedia
                component="img"
                height="194"
                image={logo}
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2"
              
                >
                    <ul>
                        <li>{it.items && it.items.map(a => <li>{a.name}</li>)}</li>
                    </ul>
                    <h3 style={{
                        color: '#b3003b',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        {"sum: " + sum() + "$"}
                    </h3>
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
            </CardActions>

        </Card>
    )

}