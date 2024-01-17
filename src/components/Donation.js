import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Typography from '@mui/material/Typography';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';

export default function Donation(props) {
    function sum() {
        var p = 0;
        if (props.items) props.items.map(a => p += a.price)
        return p;
    }
    return (
        <>
            <ListItem alignItems="flex-start" sx={{ marginLeft: '70px' }}>
                <ListItemAvatar>
                    <LocalMallOutlinedIcon color='secondary' />
                </ListItemAvatar>
                <ListItemText
                    primary={props.userName}
                    secondary={
                        <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="primary"
                            >
                                <h2>{sum()}</h2>
                            </Typography>
                            <ul>{props.items && props.items.map(a => <li>{a.name}</li>)}</ul>
                        </React.Fragment>
                    }
                />
            </ListItem>
            <Divider variant="inset"  sx={{ backgroundColor:'#E29BB1' }} />

        </>
    )
}