import React, {useState} from 'react';
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import { Paper, makeStyles, TableBody, TableRow, TableCell, Toolbar, InputAdornment } from '@material-ui/core';
import { Search } from "@material-ui/icons";
import useTable from "../../components/tables/useTable";
import Input from "../../components/input/input";
import DashboardContainer from '../../components/dashboards/adminAndCso/dashboard';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';



const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3),
        fontSize:12,
    },
    searchInput: {
        width: '75%'
    },
    event:{
        display:'flex',
        justifyContent:'space-between',
    },
    label:{
        marginLeft:30,
        color:'grey'
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        height:20,
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
      filter:{
    display:'flex',
    
      },
      sortbar:{
          display:'flex',
          justifyContent:'space-between',
      },
      view:{
        border:'none',
        backgroundColor:'transparent',
        cursor:'pointer'
      }
}))


const headCells = [
    { id: 'vendor', label: "Vendor's Name"},
    { id: 'fee', label: 'Fee' },
    { id: 'date', label: 'Date Created' },
    { id: 'time', label: 'Time Created' },
    { id: 'Status', label: 'Status', disableSorting: true },
    { id: 'button', label: '', disableSorting: true },
]

function AdminsDashboard() {
    const classes = useStyles();
    const [openBackdrop, setOpenBackdrop] = useState(false);
    const [records, setRecords] = useState([
        {id:'ggsd', vendor:'THE SHOW MUST GO ON! The Afro-Peruvian Sextet’s Livestreaming Experience.',fee:'Free',date:'Aug 12th 2020',time:'10:00 Am',status:'Pending'},
        {id:'ggsd', vendor:'THE SHOW MUST GO ON! The Afro-Peruvian Sextet’s Livestreaming Experience.',fee:'Free',date:'Aug 12th 2020',time:'10:00 Am',status:'Approved'},
        {id:'ggsd', vendor:'THE SHOW MUST GO ON! The Afro-Peruvian Sextet’s Livestreaming Experience.',fee:'Free',date:'Aug 12th 2020',time:'10:00 Am',status:'Pending'},
        {id:'ggsd', vendor:'THE SHOW MUST GO ON! The Afro-Peruvian Sextet’s Livestreaming Experience.',fee:'Free',date:'Aug 12th 2020',time:'10:00 Am',status:'Pending'},
        {id:'ggsd', vendor:'THE SHOW MUST GO ON! The Afro-Peruvian Sextet’s Livestreaming Experience.',fee:'Free',date:'Aug 12th 2020',time:'10:00 Am',status:'Approved'},
        {id:'ggsd', vendor:'THE SHOW MUST GO ON! The Afro-Peruvian Sextet’s Livestreaming Experience.',fee:'Paid',date:'Aug 12th 2020',time:'10:00 Am',status:'Pending'},
        {id:'ggsd', vendor:'THE SHOW MUST GO ON! The Afro-Peruvian Sextet’s Livestreaming Experience.',fee:'Paid',date:'Aug 12th 2020',time:'10:00 Am',status:'Approved'},
        {id:'ggsd', vendor:'THE SHOW MUST GO ON! The Afro-Peruvian Sextet’s Livestreaming Experience.',fee:'Paid',date:'Aug 12th 2020',time:'10:00 Am',status:'Pending'},
        {id:'ggsd', vendor:'THE SHOW MUST GO ON! The Afro-Peruvian Sextet’s Livestreaming Experience.',fee:'Paid',date:'Aug 12th 2020',time:'10:00 Am',status:'Approved'},
        {id:'ggsd', vendor:'THE SHOW MUST GO ON! The Afro-Peruvian Sextet’s Livestreaming Experience.',fee:'Paid',date:'Aug 12th 2020',time:'10:00 Am',status:'Pending'},
        {id:'ggsd', vendor:'THE SHOW MUST GO ON! The Afro-Peruvian Sextet’s Livestreaming Experience.',fee:'Paid',date:'Aug 12th 2020',time:'10:00 Am',status:'Approved'},
    ]);
    const [filterFn, setFilterFn] = useState({ fn: items => { return items; } });
    const {
        TblContainer,
        TblHead,
        TblPagination,
        recordsAfterPagingAndSorting
    } = useTable(records, headCells, filterFn);

    const handleSearch = e => {
        let target = e.target;
        setFilterFn({
            fn: items => {
                if (target.value == "")
                    return items;
                else
                    return items.filter(x => x.vendor.toLowerCase().includes(target.value))
            }
        })
    }
   let content = null;
   if (records && records.length>0) {
       content = <Paper className={classes.pageContent}>
       <div className={classes.sortbar}>
       <div className={classes.filter}>
      <h4>Filter By</h4>
           <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Services</InputLabel>
        <Select
          native
        //   value={state.age}
        //   onChange={handleChange}
          label="Events"
          inputProps={{
            name: 'events',
            id: 'outlined-age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value='allVendors'>All Vendorss</option>
          <option value='approved'>Approved</option>
          <option value='rejected'>Rejected</option>
          <option value='free'>Free</option>
          <option value='paid'>Paid</option>
        </Select>
      </FormControl>
    
      </div>
      <div className={classes.filter}>
      <h4>Sort By</h4>
           <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">All</InputLabel>
        <Select
          native
        //   value={state.age}
        //   onChange={handleChange}
          label="Events"
          inputProps={{
            name: 'events',
            id: 'outlined-age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value='allVendors'>All </option>
          <option value='approved'>A-Z</option>
          <option value='rejected'>Z-A</option>
                  </Select>
      </FormControl>
    
      </div>
       <Toolbar>
                      <Input
               label="Search Users"
               className={classes.searchInput}
               InputProps={{
                   startAdornment: (<InputAdornment position="start">
                       <Search />
                   </InputAdornment>)
               }}
               onChange={handleSearch}
           />
       </Toolbar>
       </div>
       <TblContainer>
           <TblHead />
           <TableBody>
               {
                   recordsAfterPagingAndSorting().map(item =>
                       (<TableRow key={item.id}>
                           <TableCell>{item.vendor}</TableCell>
                           <TableCell>{item.fee}</TableCell>
                           <TableCell>{item.date}</TableCell>
                           <TableCell>{item.time}</TableCell>
                           <TableCell>{item.status}</TableCell>
                           <TableCell>
                               <button className={classes.view}>View</button>

                               </TableCell>
                       </TableRow>)
                   )
               }
           </TableBody>
       </TblContainer>
       <TblPagination />
   </Paper>
   }else{
       content = <Paper className={classes.pageContent}>
           <h1 style={{textAlign:'center'}}>There is no data available</h1>
           </Paper>
   }

    return (
        <DashboardContainer openBackDrop={openBackdrop}>
             <div className={classes.event}>
                <h3 className={classes.label}>Events</h3>
                </div>
            {content}
        </DashboardContainer>
    )
}

export default AdminsDashboard
