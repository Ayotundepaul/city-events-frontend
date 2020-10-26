import React from 'react';
import clsx from 'clsx';
import Head from 'next/head';
import { makeStyles } from '@material-ui/core/styles';
import {Header, Footer} from '../../common';

const useStyles = makeStyles((theme) => ({
  container:{
    margin:'5%',
    marginTop:'8rem'
  }
}));

const Container = (props) => {
  const classes = useStyles();
  return (
    <>
     <Head>
       <title>{props.title}</title>
    </Head>
    <Header />
      <div className={clsx(classes.container, props.className)}>
      {props.children}
      </div>
    <Footer />
    </>
  )
}

export default Container
