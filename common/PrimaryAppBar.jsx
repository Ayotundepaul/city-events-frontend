import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Link from 'next/link';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import MyButton from './MyButton';
import TemporaryDrawer from './Drawer';
import MouseOverPopover from './MouseOver';
import Popover from '@material-ui/core/Popover';
import Avatar from '@material-ui/core/Avatar';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import ProfileCard from './profileCard';
import { baseUrl } from '../constants'
import{ connect }from 'react-redux';
import { useRouter } from 'next/router';
import * as actions from '../src/store/actions';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    '& a':{
        textDecoration:'none',
        marginRight: theme.spacing(2),
        color: '#848589',
    },
    '& a:hover': {
        color:'#F06F38'
    },
    '& a:active' :{
      background:'#555',
      padding: '10px 20px',
      display:'inline-block',
      border: '1px solid #fff',
      borderRadius:2,
      color:'#fff'
  },
    '& .MuiAppBar-colorPrimary': {
        backgroundColor:'#fff',
        color:'black'
    },
    '& .MuiPaper-elevation4': {
        boxShadow: 'none'
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  Brand: {
    flexGrow: 1,
    '& span':{
        color:'#F06F38'
    }
  },
  authenticatedUser: {
    display:'flex',
    alignItems:'center',
  },
  text: {
    color:'grey'
  },
  img:{
    width:'5%',
    height:60
  },
  // image:{
  //   border:'1px solid grey',
  //   display:'flex',
  //   justifyContent:'space-around',
  //   width:'50%',
  //   marginRight:40,
  // }
}));

  const CityEventsAppBAR = (props) => {
  const classes = useStyles();
  const router = useRouter();
  const matches = useMediaQuery('(max-width:884px)');
  const smallScreen = useMediaQuery("(max-width:600px)");
  const [anchorEl, setAnchorEl] = useState(null);
  const [isAuth, setIsAuth] = useState(false);
  const { onGetProfile, currentUser, onLogout, error  } = props;
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      onGetProfile(token);
      setIsAuth(true)
    } else {
      setIsAuth(false)
    }
  },[])

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const goToDashBoard = () => {
    router.push('/stakeholders/in')
  }
  const gotoProfile = () => {
    router.push('/profile/myprofile')
  }
  const logout = () => {
    onLogout();
    window.location = '/'
  }
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const authUser = <div className={classes.authenticatedUser}>
    {!smallScreen && <p className={classes.text}>Welcome {currentUser.firstName}</p>}
    <Avatar alt="Gbemi" src={currentUser.profile_picture?baseUrl+currentUser.profile_picture:"/images/user.png"} className={classes.small} />
    <ExpandMoreIcon onClick={handleClick}/>
    <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <ProfileCard
        firstName={currentUser.firstName}
        lastName={currentUser.lastName}
        email={currentUser.email}
        phone={currentUser.phone}
        image={currentUser.profile_picture}
        gotoDashboard={goToDashBoard}
        gotoProfile={gotoProfile}
        logout={logout}
         />
      </Popover>
  </div>

  const showButton = props.route===undefined || props.route==='signin'?
  <MyButton click={() => router.push('/signin')} Label='login'/>:<MyButton  Label='Sign up'/>
  const authenticatedUser = isAuth?authUser:showButton;
   
  let showTitles = null;
  if (!matches) {
      showTitles = <div className={classes.authenticatedUser} >
          <Link href='/events'>
          <a >Event</a>
          </Link>
          <Link href='/news'>
          <a >News</a>
          </Link>
          <Link href='/about'>
          <a >About Us</a>
          </Link>
          <Link href='/help'>
          <a >Help</a>
          </Link>
          { currentUser.roleId !== 121 &&<Link href='/createEvent'>
          <a >Create Event</a>
          </Link>}
          {currentUser.roleId !== 131 &&<Link href='/listServices'>
          <a >List Services</a>
          </Link>}
          {authenticatedUser}
      </div>
  }

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            {matches && <TemporaryDrawer />}
          </IconButton>
          <img src='./images/Group 8898.png' 
            className={classes.img}
            />
                  <Typography variant={matches && isAuth?'p':'h6'} className={classes.Brand}>
          city<span>events.ng</span>
          </Typography>
          {matches && authenticatedUser }
          {showTitles}
        </Toolbar>
      </AppBar>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    loading : state.auth.loading,
    error : state.auth.error ,
    currentUser : state.auth.userId?state.auth.userId:[]
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onGetProfile : (token) => dispatch(actions.profile(token)),
    onLogout : () => dispatch(actions.logout()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CityEventsAppBAR)