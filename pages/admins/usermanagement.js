import React, {useState} from 'react';
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import { Paper, makeStyles, TableBody, TableRow, TableCell, Toolbar, InputAdornment } from '@material-ui/core';
import { Search } from "@material-ui/icons";
import useTable from "../../components/tables/useTable";
import Input from "../../components/input/input";
import DashboardContainer from '../../components/dashboards/adminAndCso/dashboard';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';



const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    },
    searchInput: {
        width: '70%',
        height:40,
    },
    tool:{
        display:'flex',
        justifyContent:'space-between',

    },
    formControl:{
        height:30,
    }
}))


const headCells = [
    { id: 'fullName', label: 'Name' },
    { id: 'email', label: 'Email Address' },
    { id: 'Role', label: 'Role' },
    { id: 'Role', label: 'Body' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'Status', label: 'Status', disableSorting: true },
    { id: 'button', label: '', disableSorting: true },
]

function AdminsDashboard() {
        const classes = useStyles();
        const [state, setState] = React.useState({
            age: '',
            name: 'hai',
          });
        
    const [openBackdrop, setOpenBackdrop] = useState(false);
    const [records, setRecords] = useState([
        {id:'ggsd', fullName:'Samuel akin',email:'gakin95@gmail.com',role:'user',body:'Individual',mobile:'08023456787',status:'Active'},
        {id:'ggsds', fullName:'Ada Obi',email:'gakin95@gmail.com',role:'cso',body:'Institution',mobile:'08023456787',status:'Pending'},
        {id:'ggdfsd', fullName:'Gbenga akingbulere',email:'gakin95@gmail.com',role:'vendor',body:'Individual',mobile:'08023456787',status:'disabled'},
        {id:'ggfghsd', fullName:'Ada Obi',email:'gakin95@gmail.com',role:'host',body:'Institution',mobile:'08023456787',status:'Active'},
        {id:'ggs34d', fullName:'Gbenga akingbulere',email:'gakin95@gmail.com',role:'user',body:'Individual',mobile:'08023456787',status:'Pending'},
        {id:'ggdgusd', fullName:'Samuel akin',email:'gakin95@gmail.com',role:'cso',body:'Institution',mobile:'08023456787',status:'disabled'},
        {id:'gghsjsd', fullName:'Gbenga akingbulere',email:'gakin95@gmail.com',role:'user',body:'Individual',mobile:'08023456787',status:'Active'},
        {id:'ggs;lsd', fullName:'Gbenga akingbulere',email:'gakin95@gmail.com',role:'user',body:'individual',mobile:'08023456787',status:'Pending'},
        {id:'ggs8wd', fullName:'Samuel akin',email:'gakin95@gmail.com',role:'user',body:'Institution',mobile:'08023456787',status:'Pending'},
        {id:'gg542sd', fullName:'Gbenga akingbulere',email:'gakin95@gmail.com',role:'user',body:'Individual',mobile:'08023456787',status:'Pending'},
        {id:'ggs90djsd', fullName:'Ada Obi',email:'gakin95@gmail.com',role:'user',body:'Institution',mobile:'08023456787',status:'Active'},
        {id:'ggywsd', fullName:'Samuel akin',email:'gakin95@gmail.com',role:'user',body:'Individual',mobile:'08023456787',status:'Active'},
        {id:'gguwisd', fullName:'Gbenga akingbulere',email:'gakin95@gmail.com',role:'vendo',body:'individual',mobile:'08023456787',status:'Active'},
        {id:'ggs12wad', fullName:'Ada Obi',email:'gakin95@gmail.com',role:'user',body:'Institution',mobile:'08023456787',status:'disabled'},
        {id:'ggswyud', fullName:'Gbenga akingbulere',email:'gakin95@gmail.com',role:'user',body:'individual',mobile:'08023456787',status:'disabled'},
        {id:'ggsiqxd', fullName:'Ada Obi',email:'gakin95@gmail.com',role:'user',body:'Individual',mobile:'08023456787',status:'disabled'},
        {id:'ggnx;lsd', fullName:'Gbenga akingbulere',email:'gakin95@gmail.com',body:'Individual',role:'host',mobile:'08023456787',status:'disabled'},
        {id:'ggs87sd', fullName:'Ada Obi',email:'gakin95@gmail.com',role:'user',body:'Institution',mobile:'08023456787',status:'Active'},
        {id:'gg789ssd', fullName:'Gbenga akingbulere',email:'gakin95@gmail.com',body:'Individual',role:'user',mobile:'08023456787',status:'Active'},
        {id:'gg8wmsd', fullName:'Gbenga akingbulere',email:'gakin95@gmail.com',body:'Individual',role:'user',mobile:'08023456787',status:'Active'},
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
                    return items.filter(x => x.fullName.toLowerCase().includes(target.value))
            }
        })
    }
   let content = null;
   if (records && records.length>0) {
       content = <Paper className={classes.pageContent}>
           <h4>Filter By</h4>
           <div className={classes.tool}>
               
           <FormControl variant="filled" className={classes.formControl}>
        {/* <InputLabel htmlFor="filled-age-native-simple"></InputLabel> */}
        <Select
          native
        //   value={state.users}
        //   onChange={handleChange}
          inputProps={{
            name: 'All Users',
            id: 'filled-age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={10} selected>All Users</option>
          <option value={20}>Event Host</option>
          <option value={30}>Vendors</option>
          <option value={30}>Cso</option>
        </Select>
      </FormControl>
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
                           <TableCell>{item.fullName}</TableCell>
                           <TableCell>{item.email}</TableCell>
                           <TableCell>{item.role}</TableCell>
                           <TableCell>{item.body}</TableCell>
                           <TableCell>{item.mobile}</TableCell>
                           <TableCell>{item.status}</TableCell>
                           <TableCell>Veiw</TableCell>
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
            {content}
        </DashboardContainer>
    )
       }


export default AdminsDashboard
