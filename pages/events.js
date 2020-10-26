import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Pagination from "@material-ui/lab/Pagination";
import {
  Grid,
  FormControl,
  Paper,
  MenuItem,
  InputLabel,
  Select,
  Typography,
  Slide,
  Zoom,
} from "@material-ui/core";
import Date from "../components/date/datePicker";
import { Container } from "../components/section";
import { EventsListing } from "../components/section/allItems";

const useStyles = makeStyles((theme) => ({
  root: {
    margin:0,
    overflow:'hidden',
    [theme.breakpoints.down("xs")]: {
      margin: 0,
    },
  },
  header:{
    width:'100%',
    height:'50vh',
    backgroundImage:"url('/images/eventNew.jpg')",
    backgroundPosition:'center',
    backgroundRepeat:'no-repeat',
    display:'flex',
    alignItems:'center',
    color:'#fff',
    marginBottom:20,
    backgroundSize:'cover',
   // opacity: 0.3,
  },
  textHeader:{
    paddingLeft: "3%",
    paddingTop:'8%',
  
  },
  leftwing: {
    height: 200,
    backgroundImage: "url('./images/Group.svg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  image: {
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  midwing: {
    height: 200,
    border: "1px solid white",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  anything: {
    fontWeight: "bold",
    fontSize: 30,
    marginLeft: 40,
  },
  rightwing: {
    height: 200,
  },
  search: {
    height: 30,
    width: "50%",
    backgroundColor: theme.palette.primary.main,
    color: "white",
    border: "none",
    cursor: "pointer",
    borderRadius: 5,
  },
  searchdiv: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width:'100%',
    marginTop: 20,
  },
  gridcontent: {
    paddingLeft: "3%",
    paddingRight: "3%",
    [theme.breakpoints.down("xs")]: {
      //margin: "5%",
    },
    // border: "1px solid red",
  },
  grid: {
    width: "90%",
    margin: "auto",
  },
  price: {
    paddingLeft: 20,
  },

  paper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "#f1f1f1",
    padding: "10%",
  },
  formControl: {
    width: 250,
    [theme.breakpoints.down('md')]:{
      width:183
    }
  },
  filter: {
    height: 600,
  },
  pagination: {
    "& > *": {
      marginTop: theme.spacing(2),
      width: "100%",
     // margin: "auto",
      display: "flex",
      alignItems: "center",
      justifyContent:'center',
    },
    line: {
      border: "5px solid grey",
      backgroundColor: "grey",
    },
  },
}));

const Events = () => {
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const allEvents = [
    {
      id: "fgfs",
      address: "Eko Hotel & Suites, Victoria Island, Lagos.",
      content:
        "World Bank Lagos 2020 (The New Path Leading to the new Future) All purchased tickets remain valid for the new date which will be announced soon. Pls bear with us as we try to manage this unprecedented situation constructively.",
      image: "/images/corp5.jpg",
      amount: "free",
      date: "thur, Jul 30, 2020",
    },
    {
      id: "fg3fs",
      address: "Eko Hotel & Suites, Victoria Island, Lagos.",
      content:
        "Berlin Entrepreneur corp (Quisque non turpis id massa) All purchased tickets remain valid for the new date which will be announced soon. Pls bear with us as we try to manage this unprecedented situation constructively.",
      image: "/images/corp3.jpg",
      amount: "3000",
      date: "Mon, Jul 31, 2020",
    },
    {
      id: "fgq5fs",
      address: "Eko Hotel & Suites, Victoria Island, Lagos.",
      content:
        "Maranatha Lagos 2020 (Women Empowerment Submit) All purchased tickets remain valid for the new date which will be announced soon. Pls bear with us as we try to manage this unprecedented situation constructively.",
      image: "/images/corp6.jpg",
      amount: "5000",
      date: "thur, Jul 20, 2020",
    },
    {
      id: "fgsfs",
      address: "Eko Hotel & Suites, Victoria Island, Lagos.",
      content:
        "Warrior Apparels (Getting your Foot in the door) All purchased tickets remain valid for the new date which will be announced soon. Pls bear with us as we try to manage this unprecedented situation constructively.",
      image: "/images/corp1.jpg",
      amount: "10000",
      date: "thur, May 30, 2020",
    },
    {
      id: "fgfhjs",
      address: "Eko Hotel & Suites, Victoria Island, Lagos.",
      content:
        "Alison Courses (Marchine Learning and Statistics) All purchased tickets remain valid for the new date which will be announced soon. Pls bear with us as we try to manage this unprecedented situation constructively.",
      image: "/images/corp3.jpg",
      amount: "1000000000",
      date: "thur, Jul 30, 2020",
    },
    {
      id: "fgf2xs",
      address: "Eko Hotel & Suites, Victoria Island, Lagos.",
      content:
        "Plural Sight (The Future of Africa) All purchased tickets remain valid for the new date which will be announced soon. Pls bear with us as we try to manage this unprecedented situation constructively.",
      image: "/images/corp5.jpg",
      amount: "free",
      date: "thur, Jul 30, 2020",
    },
    {
      id: "fgsvfs",
      address: "Eko Hotel & Suites, Victoria Island, Lagos.",
      content:
        "AT&T (The Entrepreneur business submit) All purchased tickets remain valid for the new date which will be announced soon. Pls bear with us as we try to manage this unprecedented situation constructively.",
      image: "/images/corp6.jpg",
      amount: "free",
      date: "thur, Jul 30, 2020",
    },
    {
      id: "fgfs",
      address: "Eko Hotel & Suites, Victoria Island, Lagos.",
      content:
        "World Bank Lagos 2020 (The New Path Leading to the new Future) All purchased tickets remain valid for the new date which will be announced soon. Pls bear with us as we try to manage this unprecedented situation constructively.",
      image: "/images/corp5.jpg",
      amount: "free",
      date: "thur, Jul 30, 2020",
    },
    {
      id: "fg3fs",
      address: "Eko Hotel & Suites, Victoria Island, Lagos.",
      content:
        "Berlin Entrepreneur corp (Quisque non turpis id massa) All purchased tickets remain valid for the new date which will be announced soon. Pls bear with us as we try to manage this unprecedented situation constructively.",
      image: "/images/corp3.jpg",
      amount: "3000",
      date: "Mon, Jul 31, 2020",
    },
    {
      id: "fgq5fs",
      address: "Eko Hotel & Suites, Victoria Island, Lagos.",
      content:
        "Maranatha Lagos 2020 (Women Empowerment Submit) All purchased tickets remain valid for the new date which will be announced soon. Pls bear with us as we try to manage this unprecedented situation constructively.",
      image: "/images/corp6.jpg",
      amount: "5000",
      date: "thur, Jul 20, 2020",
    },
    {
      id: "fgsfs",
      address: "Eko Hotel & Suites, Victoria Island, Lagos.",
      content:
        "Warrior Apparels (Getting your Foot in the door) All purchased tickets remain valid for the new date which will be announced soon. Pls bear with us as we try to manage this unprecedented situation constructively.",
      image: "/images/corp1.jpg",
      amount: "10000",
      date: "thur, May 30, 2020",
    },
    {
      id: "fgfhjs",
      address: "Eko Hotel & Suites, Victoria Island, Lagos.",
      content:
        "Alison Courses (Marchine Learning and Statistics) All purchased tickets remain valid for the new date which will be announced soon. Pls bear with us as we try to manage this unprecedented situation constructively.",
      image: "/images/corp3.jpg",
      amount: "1000000000",
      date: "thur, Jul 30, 2020",
    },
  ];
  const mobile = useMediaQuery('(max-width:960px)');
  const classes = useStyles();
  return (
    <Container title="events" className={classes.root}>
      <div className={classes.header}>
      <Slide direction="left" in={true} mountOnEnter unmountOnExit>
        <h1 className={classes.textHeader}> Search for events</h1>
      </Slide>
      </div>
      <Grid container spacing={4} className={classes.gridcontent}>
        <Grid item xs={12} sm={12} md={9}>
          <EventsListing data={allEvents} />
        </Grid>
       { !mobile && <Grid item xs={12} sm={4} md={3} className={classes.filter}>
          <Slide direction="down" in={true} mountOnEnter unmountOnExit>
            <Paper className={classes.paper}>
              <h3>Filter</h3>
              <div className={classes.line}></div>
              <Date />
              <div>
                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-simple-select-label">
                    Select Price
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  >
                    <MenuItem value="Free">Free</MenuItem>
                    <MenuItem value="₦0 - ₦5000">₦0 - ₦5000</MenuItem>
                    <MenuItem value="₦5000 - ₦10000">₦5000 - ₦10000</MenuItem>
                    <MenuItem value="₦10000 - ₦20000">₦10000 - ₦20000</MenuItem>
                    <MenuItem value="₦20000 - ₦40000">₦20000 - ₦40000</MenuItem>
                    <MenuItem value="₦40000 and above">
                      ₦40000 and above
                    </MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div>
                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-simple-select-label">
                    Select category
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
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
              </div>
              <div className={classes.searchdiv}>
                <button className={classes.search}>search</button>
              </div>
            </Paper>
          </Slide>
        </Grid>}
      </Grid>

      <Grid item xs={12}>
        <div className={classes.pagination}>
          <Pagination
            count={allEvents.length}
            variant="outlined"
            shape="rounded"
          />
        </div>
      </Grid>
      {/* </Grid> */}
    </Container>
  );
};

export default Events;
