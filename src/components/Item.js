import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { BottomNavigationAction } from '@mui/material';
import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined';
import ModeOutlinedIcon from '@mui/icons-material/ModeOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})
(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Item(props) {

  const [expanded, setExpanded] = React.useState(false);

  const itemsStore = useSelector(state => state.items.items);
 const Ismanager = useSelector(state => state.users.isManager);
  
      const { id } = useParams();
      const it = itemsStore.find(a => a.id == id)
  
      const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
  <>
    <Card sx={{ 
      maxWidth: 345 ,
                    alignContent: 'center',
                    position: 'center',
                    color: 'orange',
                     justifyContent: 'center', alignItems: 'center',
                    margin:'auto',
                    marginTop:'100px',
                    }}>
      <CardHeader
       
        action={
          <BottomNavigationAction
                            label="Update Item"
                            value="Update Item"
                            icon={<CloseOutlinedIcon color="third"/>}
                            component={Link}
                            to={"/items/"} />
        }
        title={it.name}
        subheader={it.price+"$"}
      />
      <CardMedia
        component="img"
        height="194"
        image ={it.img}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {it.description}
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        {!Ismanager && <BottomNavigationAction
                label="donate"
                value="donate"
                icon={<VolunteerActivismOutlinedIcon />}
                component={Link}
                to='/donate/' />}
        </IconButton>

        <IconButton aria-label="share">
        {Ismanager && <BottomNavigationAction
                label="Update Item"
                value="Update Item"
                icon={<ModeOutlinedIcon />}
                component={Link}
                to={`/UpdateItem/${id}`} />}
        </IconButton>
      </CardActions>
     
    </Card>

 </>
  );
}


