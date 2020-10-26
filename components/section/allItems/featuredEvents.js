import React, { useState } from "react";
import {
  Grid,
  Typography,
  FormControl,
  Select,
  MenuItem,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { FeaturedEvent } from "../singleItem";
import Carousel from 'react-material-ui-carousel';

const useStyles = makeStyles((theme) => ({
  category: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    },
  formControl: {
    width: 265,
    height: 61,
    display: "block",
    //float:'right'
  },
  selectContainer: {
    backgroundColor: theme.palette.primary.main,
    borderRight: "1px solid #fff",
    color: "#fff",
  },
  selectContainerText: {
    paddingTop: 40,
    paddingBottom: 40,
  },
  slide: {
    width:'80%',
    margin:'auto'
  },
  FeaturedEvent:{
    fontWeight:'bold',
  }
}));

function BrowseCategory({data}) {
  const [category, setCategory] = useState("Browse category");
  const [open,setOpen] = useState(true);
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    console.log(category);
  };
  const classes = useStyles();
  return (
    <Grid container spacing={3} >
      <Grid item xs={12} className={classes.category}>
        <Typography variant="h5" className={classes.FeaturedEvent}>Featured Events</Typography>
        {/* <FormControl className={classes.formControl}>
          <Select
            labelId="title-type"
            id="title"
            value={category}
            onChange={handleCategoryChange}
            variant="outlined"
            style={{ width: "100% !important" }}
            // margin="dense"
            fullWidth
          >
            <MenuItem value="Browse category">Browse category</MenuItem>
            <MenuItem
              value="Music"
              onClick={() => console.log("music was clicked")}
            >
              Music
            </MenuItem>
            <MenuItem value="Commedy">Commedy</MenuItem>
            <MenuItem value="Show">Show</MenuItem>
            <MenuItem value="Travel">Travel</MenuItem>
            <MenuItem value="Education.">Education.</MenuItem>
          </Select>
        </FormControl> */}
      </Grid>
      <Grid item xs={12} >
        <div >
      <Carousel 
      className={classes.slide}
      animation={"slide"}
      navButtonsAlwaysVisible={true} >
        {data.map(event => <FeaturedEvent
        key={event.id}
          category={event.category}
          host={event.host}
          title={event.title}
          image={event.image}
          amount={event.amount}
          numOfRegAttendees={event.numOfRegAttendees}
          date={event.date}
          time={event.time}
        />)}
        </Carousel>
        </div>
      </Grid>
    </Grid>
  );
}

export default BrowseCategory;
