import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import Divider from '@material-ui/core/Divider';
import { baseUrl  } from "../constants";

const useStyles = makeStyles(theme => ({
  card: {
    width: '300px',
    borderRadius:'4px',
    background:theme.palette.primary.main,
    color:'white'
  },
 
  title: {
    fontSize: 14,
    color:'white'
  },
  pos: {
    marginTop: '15px',
  },
  flexx:{
      alignItems:'center',
      paddingBottom:'6px'
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  name:{
    marginLeft: '49px'
  },
  action:{
      marginTop:'-16px'
  }
}));

export default function ProfileCard(props) {
  const classes = useStyles();
  return (
    <div>
      
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          <Grid container className={classes.flexx}>
            <Grid xs={3}>
            <Avatar alt={props.firstName} src={props.image?baseUrl + props.image: "/images/burnaboy.png"} className={classes.large} />
            </Grid>
            <Grid xs={9}>
              <div className={classes.name}>
               <h3>{props.firstName} {props.lastName}</h3>
                <p>{props.email}</p>
              </div>
            </Grid>
          </Grid>
        </Typography>
        <Divider variant="middle" style={{background:'white'}} />
        <Typography variant="p" component="p" className={classes.pos}>
         Phone No : {props.phone}
        </Typography>
      </CardContent>
      <CardActions>
      <Grid container className={classes.action}>
      <Button color="inherit">Reset Password</Button>
      <Grid xs={12}>
      <Button
      onClick={props.gotoProfile}
       color="inherit"
       > Profile</Button>
      </Grid>
      <Grid xs={12}>
      <Button 
      onClick={props.gotoDashboard}
      color="inherit">Dashboard</Button>
      </Grid>
      <Grid xs={12}>
      <Button color="inherit" onClick={props.logout}>Log Out</Button>
      </Grid>
      </Grid>
      </CardActions>
    </Card> 
    </div> 
  );
}
