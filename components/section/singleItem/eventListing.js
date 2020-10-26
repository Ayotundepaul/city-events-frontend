import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {
  Grid,
  Slide,
  Zoom
} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    cursor: "pointer",

    "&:hover": {
      boxShadow: "0px 0px 30px rgba(252, 99, 107, 0.7)",
      backgroundColor: "rgba(255,255,255,.7)",
    },
  },

  active: {
    boxShadow: "0px 0px 30px rgba(252, 99, 107, 0.7)",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  media:{
    backgroundImage:props => `url(${props.image})`,
    backgroundSize:'cover',
    //backgroundPosition:'center',
    backgroundRepeat:'no-repeat',
    borderRadius:5,
    height:200,
    width:'80%',
    margin:'20px auto',
    // border:'1px solid grey',
  },
  details:{
    width:'80%',
    margin:'20px 0',
    [theme.breakpoints.down("xs")]: {
      padding:20,
    },
},
date:{
  color:'red',
}
}));

export default function CenteredGrid({click,image,date,content,address,amount}) {
  const classes = useStyles({image});
  return (
   <Slide direction="up" in={true} mountOnEnter unmountOnExit>
      <Paper onClick={click} className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={6} md={6}>
          <div className={classes.media}></div>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <div className={classes.details}>
          <p className={classes.date}>{date}</p>
          <p className={classes.content}>{content}</p>
          <p>{address}</p>
           <p><b>{amount !== 'free' && 'Starts from  ₦'}{amount}</b></p>
          </div>
        </Grid>
      </Grid>
    </Paper>
   </Slide>
  );
}
