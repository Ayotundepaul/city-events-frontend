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
        color:'whitesmoke'
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
    { id: 'sender', label: 'Sender' },
    { id: 'role', label: 'Role' },
    { id: 'time', label: 'Time' },
    { id: 'date', label: 'Date' },
    { id: 'messages', label: 'Messages', disableSorting: true },
    { id: 'button', label: '', disableSorting: true },
    { id: 'checkbox', label: '', disableSorting: true },
]

function AdminsDashboard() {
    const classes = useStyles();
    const [openBackdrop, setOpenBackdrop] = useState(false);
    const [records, setRecords] = useState([
        {id:'ggsd',role:'Event Host', sender:'Adeola Odeku Incase',fee:'Free',time:'10:00 Am',date:'Aug 12th 2020',messages:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed'},
        {id:'ggsd',role:'Vendor', sender:'Adeola Odeku Incase',fee:'Free',time:'10:00 Am',date:'Aug 12th 2020',messages:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed'},
        {id:'ggsd',role:'Event Host', sender:'Adeola Odeku Incase',fee:'Free',time:'10:00 Am',date:'Aug 12th 2020',messages:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed'},
        {id:'ggsd',role:'Event Host', sender:'Adeola Odeku Incase',fee:'Free',time:'10:00 Am',date:'Aug 12th 2020',messages:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed'},
        {id:'ggsd',role:'Vendor', sender:'Adeola Odeku Incase',fee:'Free',time:'10:00 Am',date:'Aug 12th 2020',messages:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed'},
        {id:'ggsd',role:'Event Host', sender:'Adeola Odeku Incase',fee:'Paid',time:'10:00 Am',date:'Aug 12th 2020',messages:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed'},
        {id:'ggsd',role:'Vendor', sender:'Adeola Odeku Incase',fee:'Paid',time:'10:00 Am',date:'Aug 12th 2020',messages:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed'},
        {id:'ggsd',role:'Event Host', sender:'Adeola Odeku Incase',fee:'Paid',time:'10:00 Am',date:'Aug 12th 2020',messages:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed'},
        {id:'ggsd',role:'Event Host', sender:'Adeola Odeku Incase',fee:'Paid',time:'10:00 Am',date:'Aug 12th 2020',messages:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed'},
        {id:'ggsd',role:'Vendor', sender:'Adeola Odeku Incase',fee:'Paid',time:'10:00 Am',date:'Aug 12th 2020',messages:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed'},
        {id:'ggsd',role:'Event Host', sender:'Adeola Odeku Incase',fee:'Paid',time:'10:00 Am',date:'Aug 12th 2020',messages:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed'},
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
                    return items.filter(x => x.role.toLowerCase().includes(target.value))
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
        <InputLabel htmlFor="outlined-age-native-simple">Allnpm</InputLabel>
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
          <option value='allEvents'>All </option>
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
                           <TableCell>{item.sender}</TableCell>
                           <TableCell>{item.role}</TableCell>
                           <TableCell>{item.time}</TableCell>
                           <TableCell>{item.date}</TableCell>
                           <TableCell>{item.messages}</TableCell>
                           <TableCell>
                               <button className={classes.view}>View</button>

                               </TableCell>
                               <TableCell>
                                <input
                                type="checkbox"
                                value="mark"

                                />  
                                mark as read
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
                <h3 className={classes.label}>Log FeedBack</h3>
                </div>
            {content}
        </DashboardContainer>
    )
}

export default AdminsDashboard
