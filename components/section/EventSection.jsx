import React, { useState } from "react";
import clsx from "clsx";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {
  Grid,
  Typography,
  FormControl,
  Select,
  MenuItem,
  Slide,
  Grow
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from '@material-ui/icons/Search';
import {FeaturedEvents,FeaturedEventMobileView, UpcomingEvents} from './allItems';


const useStyles = makeStyles((theme) => ({
  root: {
    margin: 20,
   
  },
  explore: {
    backgroundImage: "url('/images/explore2.png')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: 259,
    //borderRadius:14,
    padding: 40,
    color: "#fff",
    [theme.breakpoints.down("xs")]: {
      height: 355,
    },
  },
  formControl: {
    width: '100%',
    color:'#fff',
    '& .MuiSelect-selectMenu': {
      color:'#fff',
    },
    '& .MuiSelect-icon': {
      color:'#fff'
    },
    '& .MuiInput-underline:before': {
      borderBottom: '2px solid #fff',
    }
    //float:'right'
  },
  selectContainer: {
    backgroundColor: theme.palette.primary.main,
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'column',
    borderRight: "1px solid #fff",
    color: "#fff",
    //width:'80%'
  },
  selectContainerText: {
    // paddingTop: 10,
    // paddingBottom: 20,
    
  },
  dflex: {
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between',
    width:'100%'
  },
  period: {
    width:'80%'
  },
  search:{
    width:50,
    height:50,
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#fff',
    borderRadius:5,
    cursor:'pointer'
  },
  events: {
    marginTop : 20
  }
}));

const allEvents = [
  { 
    id:'hjfdhjdfjh0909',
    host:'World Bank:',
    title:'The New Path Leading to the new Future',
    image:'/images/corp5.jpg',
    numOfRegAttendees:100,
    amount:500,
    category:'Music',
    date:' ThuRS, June 31, 2020',
    time:'8:00AM-12:00PM'
  },
  { 
    id:'874sd',
    host:'Berlin Entrepreneur corp :',
    title:'Quisque non turpis id massa',
    image:'/images/corp3.jpg',
    numOfRegAttendees:1000,
    amount:5000,
    category:'Commedy',
    date:' Thu, July 31, 2020',
    time:'8:00AM-12:00PM'
  },
  { 
    id:'23dx58vsxv',
    host:'Maranatha:',
    title:'Women Empowerment Submit',
    image:'/images/corp6.jpg',
    numOfRegAttendees:120,
    amount:500,
    category:'sport',
    date:' Thu, July 31, 2020',
    time:'8:00AM-12:00PM'
  },
  { 
    id:'23dx5jhd8vsxv',
    host:'Warrior Apparels:',
    title:'Getting your Foot in the door',
    image:'/images/corp1.jpg',
    numOfRegAttendees:120,
    amount:500,
    category:'sport',
    date:' Thu, July 31, 2020',
    time:'8:00AM-12:00PM'
  },
  { 
    id:'23dx5jhd218vsxv',
    host:'Alison Courses:',
    title:'Machine Learning and Statistics ',
    image:'/images/corp3.jpg',
    numOfRegAttendees:120,
    amount:500,
    category:'sport',
    date:' Thu, July 31, 2020',
    time:'8:00AM-12:00PM'
  },
  { 
    id:'23dx5jhd218vsxv',
    host:'Plural Sight:',
    title:'SMEs -The Future of Africa',
    image:'/images/corp5.jpg',
    numOfRegAttendees:120,
    amount:5000,
    category:'sport',
    date:' Thu, July 31, 2020',
    time:'8:00AM-12:00PM'
  },
  { 
    id:'23dx5jhd218vsxv',
    host:'AT&T:',
    title:'The Entrepreneur business submit',
    image:'/images/corp6.jpg',
    numOfRegAttendees:120,
    amount:5000,
    category:'sport',
    date:' Thu, July 31, 2020',
    time:'8:00AM-12:00PM'
  },
];

const EventSection = () => {
  const checked = true;
  const [category, setCategory] = useState("Browse category");
  const [location, setLocation] = useState("Select Location");
  const [period, setPeriod] = useState("Choose Period");
  const matches = useMediaQuery('(min-width:600px)');
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };
  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };
  const handlePeriodChange = (e) => {
    setPeriod(e.target.value);

    // console.log(category);
  };
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <div className={classes.explore}>
            <Grow 
            in={checked}
            style={{ transformOrigin: '0 0 0' }}
          {...(checked ? { timeout: 1000 } : {})}
            >
            <Typography variant="h4">Discover Events </Typography>
            </Grow>
            <Slide 
            direction="up"
            in={checked}
            style={{ transformOrigin: '0 0 0' }}
          {...(checked ? { timeout: 1000 } : {})}
            >
            <Typography variant="body1">
              Find events that interest you and book tickets. It is really easy
              and best of all it’s free.
            </Typography>
            </Slide>
          </div>
        </Grid>
        <Grid item xs={12}>
        {matches?<FeaturedEvents data={allEvents}/>:<FeaturedEventMobileView data={allEvents}/>}
        </Grid>
        <Grid item xs={12} md={1}></Grid>
        <Grid item xs={12} sm={4} md={3} className={classes.selectContainer}>
          <Typography variant="body1" className={classes.selectContainerText}>
            Looking for
          </Typography>
          <FormControl className={classes.formControl}>
            <Select
              labelId="title-type"
              id="title"
              value={category}
              onChange={handleCategoryChange}
              //style={{ width: "100% !important" }}
              fullWidth
            >
              <MenuItem value="Browse category">Browse category</MenuItem>
              <MenuItem
                value="Music"
                onClick={() => console.log("music was clicked")}
              >
                Music
              </MenuItem>
              <MenuItem value="Brand product launches">
                      Brand product launches{" "}
                    </MenuItem>
                    <MenuItem value="Business summits">
                      Business summits
                    </MenuItem>
                    <MenuItem value="Conferences">Conferences</MenuItem>
                    <MenuItem value="Conventions">Conventions</MenuItem>
                    <MenuItem value="Exhibitions">Exhibitions</MenuItem>
                    <MenuItem value="Forums">Forums</MenuItem>
                    <MenuItem value="Fundraising">Fundraising</MenuItem>
                    <MenuItem value="Meetings & incentives">
                      Meetings & incentives
                    </MenuItem>
                    <MenuItem value="Seminars">Seminars</MenuItem>
                    <MenuItem value="Workshops">Workshops</MenuItem>
                    <MenuItem value="Webinars">Webinars</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={4} md={3} className={classes.selectContainer}>
          <Typography variant="body1" className={classes.selectContainerText}>
            In
          </Typography>
           <FormControl className={classes.formControl}>
            <Select
              labelId="title-type"
              id="title"
              value={location}
              onChange={handleLocationChange}
              style={{ width: "80% !important" }}
              fullWidth
            >
              <MenuItem value="Select Location">Select Location</MenuItem>
              <MenuItem value="Lagos">Lagos</MenuItem>
              <MenuItem value="PortHarcourt">PortHarcourt</MenuItem>
              <MenuItem value="Abuja">Abuja</MenuItem>
              <MenuItem value="Enugu">Enugu.</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={4} md={4} className={classes.selectContainer}>
          <Typography variant="body1" className={classes.selectContainerText}>
            When
          </Typography>
          <div className={classes.dflex}>
          <FormControl className={clsx(classes.formControl,classes.period)}>
            <Select
              labelId="title-type"
              id="title"
              value={period}
              onChange={handlePeriodChange}
              //style={{ width: "100% !important" }}
              fullWidth
            >
              <MenuItem value="Choose Period">Choose Period</MenuItem>
              <MenuItem value="This Week">This Week</MenuItem>
              <MenuItem value="Next Week">Next Week</MenuItem>
              <MenuItem value="This Month">This Month</MenuItem>
              <MenuItem value="Next Month">Next Month</MenuItem>
              <MenuItem value="Two Months Time">Two Months Time</MenuItem>
              <MenuItem value="Two Months Time">Two Months Time</MenuItem>
              <MenuItem value="End of Year">End of Year</MenuItem>
            </Select>
          </FormControl>
            <div className={classes.search}>
            <SearchIcon color='primary'/>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} className={classes.events}>
            <UpcomingEvents />
        </Grid>
      </Grid>
    </div>
  );
};

export default EventSection;