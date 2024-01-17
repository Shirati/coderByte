import * as React from 'react';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SmallItem from './SmallItem';
import {  BottomNavigationAction } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export default function AlignItemsList() {

  const Ismanager = useSelector(state => state.users.isManager)
  const itemsStore = useSelector(state => state.items.items)

  return (<>
    <List sx={{ width: '100%', maxWidth: 360, margin: 'auto' }} >
      {itemsStore.map(i => <SmallItem id={i.id} name={i.name} price={i.price} des={i.description} img={i.img} />)}
      <Divider variant="inset" component="li" />

    </List>

    {Ismanager &&
      <BottomNavigationAction
        label="addItem"
        value="addItem"
        icon={<AddCircleOutlineIcon color='secondary' />}
        component={Link}
        to='/AddItem/'
        sx={{
          width: '25ch', '& .MuiTextField-root': { m: 1, width: '25ch' },
          alignContent: 'center',
          position: 'center',
          display: 'flex', justifyContent: 'center', alignItems: 'center',
          margin: 'auto'
        }}
      />}

  </>
  );
}

