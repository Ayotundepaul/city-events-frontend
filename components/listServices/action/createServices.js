import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { ButtonWithBackdrop, MyDialog } from "../../../common";
import { AddPhoto, Contact } from "../../../common";
import { createServices } from "../../../src/services/vendorServices";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  image: {
    backgroundImage: "url('/images/Anna2.jpg')",
    backgroundSize: "cover",
    width: "100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  line: {
    border: "1px solid #f1f1f1",
    width: "40em",
    marginTop: 10,
    marginBottom: 15,
  },
  textField: {
    width: "25ch",
  },
  select: {
    marginLeft: 10,
  },
  description: {
    width: "100%",
    height: "5em",
    borderRadius: 5,
  },
  title: {
    margin: 0,
    marginLeft: 20,
  },
  review: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  line2: {
    border: "1px solid #f1f1f1",
    width: "100%",
    marginTop: 30,
    marginBottom: 15,
  },
  contact: {
    backgroundColor: "orangeRed",
    color: "white",
    textAlign: "center",
    margin: "auto 100px",
    borderRadius: 5,
  },
  error: {
    color: theme.palette.error.main,
  },
  des:{
    height:120,
    marginTop:20,
    width:'100%',
    borderRadius:7,
    [theme.breakpoints.down('xs')]:{
      display:'none',
    },

  },
  photo:{
    height:'18rem',
    marginTop:10,
    width:'100%',
    borderRadius:7,
    [theme.breakpoints.down('xs')]:{
      display:'none',
    },
  },
  des1:{
    height:150,
    marginTop:20,
    width:'100%',
    borderRadius:7,
    [theme.breakpoints.down('xs')]:{
      display:'none',
    },
  },
}));

export default function CenteredGrid() {
  const [access, setAccess] = useState("");
  const [openBackdrop, setOpenBackdrop] = useState(false);
  const [error, setError] = useState("");
  let [dialogTitle, setDialogTitle] = useState("");
  let [dialogMessage, setDialogMessage] = useState("");
  let [openDialog, setOpenDialog] = useState();
  let [positiveDialog, setPositiveDialog] = useState(true);
  const [category, setCategory] = useState("Select category");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [uploadImage, setUploadImage] = useState(null);
  const [show, setShow] = useState(false);
  const matches = useMediaQuery("(max-width:600px)");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setAccess(token);
    }
  }, []);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };
  const [experience, setExperience] = useState("choose Experience");
  const handleExperienceChange = (e) => {
    setExperience(e.target.value);
  };
  const [fee, setFee] = useState("Select a fee type");
  const handleFeeChange = (e) => {
    setFee(e.target.value);
  };
  const handleAddImageClick = (event) => {
    event.stopPropagation();
    let fileInput = event.target.getElementsByTagName("input")[0];
    fileInput.click();
  };
  const validateService = () => {
    if (category === "Select category") {
      setError("select a valid category");
      return;
    }
    if (description === "") {
      setError("Provide description");
      return;
    }
    if (experience === "choose Experience") {
      setError("select a valid experience level");
      return;
    }
    if (uploadImage === null) {
      setError("You must upload an image");
      return;
    }
    if (fee === "Select a fee type") {
      setError("Select a fee category that best fits your service");
      return;
    }
    if (fee === "paid" && price === "") {
      setError("Enter a valid fee");
      return;
    }
    return true;
  };
  const handleSubmit = async () => {
    if (validateService()) {
      setError("");
      setOpenBackdrop(true);
      const outcome = await createServices(
        access,
        category,
        description,
        experience,
        uploadImage,
        price
      );
      if (outcome && outcome.status) {
        setOpenBackdrop(outcome.isLoading);
        setOpenDialog(true);
        setDialogTitle(outcome.status);
        setDialogMessage(outcome.message);
        setPositiveDialog(outcome.status === "success" ? true : false);
      }
    }
  };
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MyDialog
        title={dialogTitle}
        openDialog={openDialog}
        positiveDialog={positiveDialog}
        onClose={() => setOpenDialog(false)}
      >
        {dialogMessage}
      </MyDialog>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          {error && (
            <Grid item className={classes.error}>
              <p>{error}</p>
            </Grid>
          )}
          <Grid item>
            <h4 className={classes.title}>Category</h4>
            <p className={classes.title}>Select the category of service</p>
            <FormControl fullWidth className={classes.paper}>
              <Select
                labelId="category"
                id="category"
                variant="outlined"
                placeholder="select category(e.g stationery design)"
                value={category}
                onChange={handleCategoryChange}
                fullWidth
              >
                <MenuItem value="Select category">Select Category</MenuItem>
                <MenuItem value="Event Planners">Event Planners</MenuItem>
                <MenuItem value="Photographers">Photographers</MenuItem>
                <MenuItem value="Ursher Agencies">Ursher Agencies</MenuItem>
                <MenuItem value="Party Favours">Party Favours</MenuItem>
                <MenuItem value="Consierge Services">
                  Consierge Services
                </MenuItem>
                <MenuItem value="MC's/Pubils speakers/DJ">
                  MC's/Pubils speakers/DJ
                </MenuItem>
                <MenuItem value="Cab Hailing-Uber,Bolt,etc">
                  Cab Hailing-Uber,Bolt,etc
                </MenuItem>
                <MenuItem value="Hotels">Hotels</MenuItem>
                <MenuItem value="Food Vendors/Caterers">
                  Food Vendors/Caterers
                </MenuItem>
                <MenuItem value="Drink Vendors/Suppliers">
                  Drink Vendors/Suppliers
                </MenuItem>
                <MenuItem value="Mobile Bars">Mobile Bars</MenuItem>
                <MenuItem value="Event Trainning Facilities/ Schools/Academies">
                  Event Trainning Facilities/ Schools/Academies
                </MenuItem>
                <MenuItem value="Office / Shared spaces providers / Co-working spaces">
                  Office / Shared spaces providers / Co-working spaces
                </MenuItem>
                <MenuItem value="Content creators . Website designers, graphic artists , etc">
                  Content creators . Website designers, graphic artists , etc
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl fullWidth className={classes.paper}>
              <TextField
                id="outlined-multiline-static"
                label="Description"
                multiline
                fullWidth
                rows={4}
                placeholder="Give a Brief description of your service"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                variant="outlined"
              />
            </FormControl>
          </Grid>
          <Grid item>
            <h4 className={classes.title}>Experience Level</h4>
            <p className={classes.title}>
              Tell us your level of experience as a vendor
            </p>
            <FormControl fullWidth className={classes.paper}>
              <Select
                labelId="experience-level"
                id="level"
                variant="outlined"
                placeholder=""
                value={experience}
                onChange={handleExperienceChange}
                fullWidth
              >
                <MenuItem value="choose Experience">
                  Choose your experience level
                </MenuItem>
                <MenuItem value="beginner">Beginner</MenuItem>
                <MenuItem value="intermediate">Intermediate</MenuItem>
                <MenuItem value="expert">Expert</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item>
            <AddPhoto
              //image="/images/upload.png"
              title="Upload image or photo"
              text="Max file size (5MB)"
              accept="image/*"
              filename="image"
              onClick={handleAddImageClick}
              backgroundImage={uploadImage}
              setImage={(file) => {
                setUploadImage(file);
              }}
            />
          </Grid>
          <Grid item>
            <h4 className={classes.title}>Fees</h4>
            <p className={classes.title}>
              Select a fee category that best fits your service
            </p>
            <FormControl fullWidth className={classes.paper}>
              <Select
                labelId="fee"
                id="fee"
                variant="outlined"
                placeholder=""
                value={fee}
                onChange={handleFeeChange}
                fullWidth
              >
                <MenuItem value="Select a fee type">Select a fee type</MenuItem>
                <MenuItem value="free" onClick={() => setShow(false)}>
                  Free
                </MenuItem>
                <MenuItem value="paid" onClick={() => setShow(true)}>
                  Paid
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>
          {show && (
            <Grid item>
              <FormControl fullWidth className={classes.paper}>
                <TextField
                  id="outlined-multiline-static"
                  type="number"
                  label="price"
                  multiline
                  fullWidth
                  value={price}
                  placeholder="Enter price"
                  variant="outlined"
                  onChange={(e) => setPrice(e.target.value)}
                />
              </FormControl>
            </Grid>
          )}
        </Grid>
        {!matches && <Grid item xs={12} sm={6} className={classes.image}></Grid>}
        <Grid item xs={12} className={classes.review}>
          <div>
            <ButtonWithBackdrop
              label="Submit for Review"
              click={handleSubmit}
              open={openBackdrop}
            />
          </div>
        </Grid>
        <Grid item xs={12}>
          <Contact />
        </Grid>
      </Grid>
    </div>
  );
}
