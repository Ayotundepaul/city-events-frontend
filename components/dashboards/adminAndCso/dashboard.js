import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import DoneIcon from '@material-ui/icons/Done';
import EventIcon from '@material-ui/icons/Event';
import InsertInvitationIcon from '@material-ui/icons/InsertInvitation';
import FeedbackIcon from '@material-ui/icons/Feedback';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Avatar from '@material-ui/core/Avatar';
import { useRouter } from "next/router";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Backdrop } from "../../../common";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    "& .MuiAppBar-colorPrimary": {
      backgroundColor: "#fff",
      color: "black",
      fontsize:12,
    },
    "& .MuiPaper-elevation4": {
      boxShadow: "none",
    },
    "& .list__item":{
      fontSize:45
    },
    "& .MuiPaper-root": {
      background: '#3B3B3B',
      color: '#fff',
      paddingBottom: 20,
      paddingRight: 10
  },
  // "& .MuiListItemIcon-root ":{
  //   color:'#fff',
  //   [theme.breakpoints.down('xs')]:{
  //     color:'red'
  //   }
  // },
  "& .MuiTypography-body1":{
    color: '#fff',
    fontSize: 14
  },
    "& .MuiListItem-root:hover ":{
      background: '#F06E38',
    borderRadius: '0px 24px 24px 0px',
    color:'#fff',
    padding: '10px 10px'
    },
    "& .MuiListItem-root.active":{
      background: '#F06E38',
      color:'#fff',
      borderRadius: '0px 24px 24px 0px',
      padding: '10px 20px'
    },
    
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  info:{
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      flexDirection:'column',
      fontSize:13,
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    marginTop: theme.spacing(3),
    //border:'1px solid grey'
  },
  profileimg:{
    backgroundImage:"url('/images/corp6.jpg')",
    width:'100%',
    backgroundSize:'cover',
    height:'100%'
  },
  icon:{
    color:'#fff',
    [theme.breakpoints.down('xs')]:{
      color:'rgba(0, 0, 0, 0.87)'
    }
  },
  bgcolor:{
    backgroundColor:'#2f2f2f',
    margin:0,
    padding:0,
  }
}));


const links = [
    {
        name:'Dashboard',
        icon:<DashboardIcon />,
        link:'/admins/in'
    },
    {
        name:'User management',
        icon:<PersonAddIcon />,
        link:'/admins/usermanagement'
    },
    {
        name:'Pending approvals',
        icon:<DoneIcon />,
        link:'/admins/pendingapprovals'
    },
    {
        name:'Events',
        icon:<EventIcon />,
        link:'/admins/events'
    },
    {
        name:'Services',
        icon:<InsertInvitationIcon/>,
        link:'/admins/services'
    },
    {
        name:'Log feedback',
        icon:<FeedbackIcon />,
        link:'/admins/feedbacks'
    },
];

function ResponsiveDrawer(props) {
  const router = useRouter();
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <div className={classes.info}>
      <Avatar alt="Remy Sharp"  className={classes.large} >
        <div className={classes.profileimg} ></div>
      </Avatar>
      <p>Nicole Shingara</p>
      <a href="">View Profile</a>
      </div>
      <Divider />
      <List>
        {links.map((link, index) => (
          <ListItem button key={link.name} onClick={() => router.push(link.link)}>
            <ListItemIcon className={classes.icon}>{link.icon}</ListItemIcon>
            <ListItemText primary={link.name} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.bgcolor}>
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
         
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <div>
          <Backdrop loading={props.openBackDrop}/>
          <div>{props.children}</div>
        </div>
      </main>
    </div>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
