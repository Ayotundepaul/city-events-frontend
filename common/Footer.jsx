import React from 'react';
import clsx from 'clsx';
import {
    Typography,
    Grid,
    Divider
} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import Link from 'next/link';


const useStyles = makeStyles(theme => ({
  root: {
    position: "relative",
    //bottom:0,
    marginTop: '3rem',
    backgroundColor: theme.palette.secondary.main,
   paddingTop: 50,
    paddingBottom: 50,
  },
  container: {
      paddingRight:50,
      paddingLeft:50,
      [theme.breakpoints.down('sm')]: {
        paddingLeft:66,
      },
      [theme.breakpoints.down('xs')]: {
        paddingLeft:40,
      },
  },
  paymentMethod: {
      display:'flex',
      alignItems:'center',
      paddingTop:10,
      paddingBottom:10
  },
  image: {
     // marginLeft:12
     //width:70,
  },
  divider: {
      marginTop:12,
      marginBottom:12,
      '& .MuiDivider-root': {
          backgroundColor:'#fff'
      }
  },
  copyRight: {
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
      // margin:'0px auto',
      // width:'50%',
      // [theme.breakpoints.down('md')]: {
      //   width:'80%',
      // },
      // [theme.breakpoints.down('xs')]: {
      //   width:'90%',
      // },
  },
  text1: {
    color: "white",
    display: "flex",
    fontSize:12,
    fontFamily:'normal normal normal 16px/19px Work Sans',
    lineHeight:3,
    fontWeight:'none'
  },
  
}));


export default function FooterSection({className}) {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root,className)}>
      <Grid container spacing={3} className={classes.container}>
        <Grid item xs={4} sm={6} md={3}>
            <Typography variant="h5" className={classes.text1} >Product</Typography>
            <Link href='/'>
            <Typography variant="body1" className={classes.text1} >Features</Typography>
            </Link>
            <Link href='/'>
              <Typography variant="body1" className={classes.text1} >Pricing</Typography>
            </Link>
            <Link href='/'>
              <Typography variant="body1" className={classes.text1} >Event Promotion</Typography>
            </Link>
            <Link href='/'>
              <Typography variant="body1" className={classes.text1} >Booking</Typography>
            </Link>
        </Grid>
        <Grid item xs={4} sm={6} md={3}>
            <Typography variant="h5" className={classes.text1} >Explore More</Typography>
            <Link href='/'>
              <Typography variant="body1" className={classes.text1} >How it Works</Typography>
            </Link>
            <Link href='/'>
              <Typography variant="body1" className={classes.text1} >Sell Tickets</Typography>
            </Link>
            <Link href='/'>
              <Typography variant="body1" className={classes.text1} >Hire a Promoter</Typography>
            </Link>
            <Link href='/'>
              <Typography variant="body1" className={classes.text1} >Fundraisers</Typography>
            </Link>
        </Grid>
        <Grid item xs={4} sm={6} md={3}>
            <Typography variant="h5" className={classes.text1} >Connect with Us</Typography>
            <Link href='/'>
              <Typography variant="body1" className={classes.text1} >Facebook</Typography>
            </Link>
            <Link href='/'>
              <Typography variant="body1" className={classes.text1} >Twitter</Typography>
            </Link>
            <Link href='/'>
              <Typography variant="body1" className={classes.text1} >Instagram</Typography>
            </Link>
            <Link href='/'>
              <Typography variant="body1" className={classes.text1} >Instagram</Typography>
            </Link>
        </Grid>
        <Grid item xs={4} sm={6} md={3}>
            {/* <Typography variant="h5" className={classes.text1} >We accept</Typography> */}
            <div className={classes.paymentMethod}>
                {/* <img src='/images/visa.png' />
                <img src='/images/verve.png' className={classes.image}/>
                <img src='/images/mastercard.png' className={classes.image}/> */}
                <img src='/images/cardpayments.png' className={classes.image} />
            </div>
        </Grid>
        <Grid item xs={12} className={classes.divider}>
        <Divider />
        </Grid>
        <Grid item xs={12} className={classes.copyRight}>
          <Typography variant="body1" className={clsx(classes.text1, )} >
          Copyright 2020 | cityevents.ng | All right reserved | Website by Instiq
              </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

