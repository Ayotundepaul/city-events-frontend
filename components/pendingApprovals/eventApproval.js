import React, {useState} from 'react';
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import { Paper, makeStyles, TableBody, TableRow, TableCell, Toolbar, InputAdornment } from '@material-ui/core';
import { Search } from "@material-ui/icons";
import useTable from "../tables/useTable";
import Input from "../input/input";


const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    },
    searchInput: {
        width: '75%',
        height:30,
    },
    serviceappr:{
        display:'flex',
        justifyContent:'space-between',
    },
    approvals:{
        display:'flex',
        justifyContent:'space-between',
    },
    label:{
        marginLeft:30,
        color:'whitesmoke'
    },
    action:{
        border:'none',
        backgroundColor:'transparent',
        cursor:'pointer'
    },
}))


const headCells = [
    { id: 'Type of Service', label: 'Type of Service' },
    { id: 'Vendor', label: "Vendor's Name"},
    { id: 'Date', label: 'Date Created' },
    { id: 'Status', label: 'Status' },
    { id: 'Actions', label: 'Actions', disableSorting: true },
    { id: 'Details', label: 'Details', disableSorting: true },
    // { id: 'button', label: '', disableSorting: true },
]

function AdminsDashboard() {
    const classes = useStyles();
    const [openBackdrop, setOpenBackdrop] = useState(false);
    const [records, setRecords] = useState([
        
        {id:'ggsd', typeOfService:'Shawarwa & Chips',vendor:'Toheed Dende',date:'Aug 12th 2020',status:'Pending'},
        {id:'ggsd', typeOfService:'Traditional Foods',vendor:'Toheed Dende',date:'Aug 12th 2020',status:'Pending'},
        {id:'ggsd', typeOfService:'Ice Creams Services',vendor:'Toheed Dende',date:'Aug 12th 2020',status:'Pending'},
        {id:'ggsd', typeOfService:'Lorem Services',vendor:'Toheed Dende',date:'Aug 12th 2020',status:'Pending'},
        {id:'ggsd', typeOfService:'Ipsum Services',vendor:'Toheed Dende',date:'Aug 12th 2020',status:'Pending'},
        {id:'ggsd', typeOfService:'Shawarwa & Chips',vendor:'Toheed Dende',date:'Aug 12th 2020',status:'Pending'},
        {id:'ggsd', typeOfService:'Traditional Foods',vendor:'Toheed Dende',date:'Aug 12th 2020',status:'Pending'},
        {id:'ggsd', typeOfService:'Ice Creams Services',vendor:'Toheed Dende',date:'Aug 12th 2020',status:'Pending'},
        {id:'ggsd', typeOfService:'Lorem Services',vendor:'Toheed Dende',date:'Aug 12th 2020',status:'Pending'},
        {id:'ggsd', typeOfService:'Ipsum Services',vendor:'Toheed Dende',date:'Aug 12th 2020',status:'Pending'},
        {id:'ggsd', typeOfService:'Shawarwa & Chips',vendor:'Toheed Dende',date:'Aug 12th 2020',status:'Pending'},

        // {id:'ggsds', fullName:'Ada Obi',email:'gakin95@gmail.com',role:'cso',mobile:'08023456787',department:'Computer science'},
        // {id:'ggdfsd', fullName:'Gbenga akingbulere',email:'gakin95@gmail.com',role:'vendor',mobile:'08023456787',department:'Computer science'},
        // {id:'ggfghsd', fullName:'Ada Obi',email:'gakin95@gmail.com',role:'host',mobile:'08023456787',department:'Computer science'},
        // {id:'ggs34d', fullName:'Gbenga akingbulere',email:'gakin95@gmail.com',role:'user',mobile:'08023456787',department:'Computer science'},
        // {id:'ggdgusd', fullName:'Samuel akin',email:'gakin95@gmail.com',role:'cso',mobile:'08023456787',department:'Computer science'},
        // {id:'gghsjsd', fullName:'Gbenga akingbulere',email:'gakin95@gmail.com',role:'user',mobile:'08023456787',department:'Computer science'},
        // {id:'ggs;lsd', fullName:'Gbenga akingbulere',email:'gakin95@gmail.com',role:'user',mobile:'08023456787',department:'Computer science'},
        // {id:'ggs8wd', fullName:'Samuel akin',email:'gakin95@gmail.com',role:'user',mobile:'08023456787',department:'Computer science'},
        // {id:'gg542sd', fullName:'Gbenga akingbulere',email:'gakin95@gmail.com',role:'user',mobile:'08023456787',department:'Computer science'},
        // {id:'ggs90djsd', fullName:'Ada Obi',email:'gakin95@gmail.com',role:'user',mobile:'08023456787',department:'Computer science'},
        // {id:'ggywsd', fullName:'Samuel akin',email:'gakin95@gmail.com',role:'user',mobile:'08023456787',department:'Computer science'},
        // {id:'gguwisd', fullName:'Gbenga akingbulere',email:'gakin95@gmail.com',role:'vendo',mobile:'08023456787',department:'Computer science'},
        // {id:'ggs12wad', fullName:'Ada Obi',email:'gakin95@gmail.com',role:'user',mobile:'08023456787',department:'Computer science'},
        // {id:'ggswyud', fullName:'Gbenga akingbulere',email:'gakin95@gmail.com',role:'user',mobile:'08023456787',department:'Computer science'},
        // {id:'ggsiqxd', fullName:'Ada Obi',email:'gakin95@gmail.com',role:'user',mobile:'08023456787',department:'Computer science'},
        // {id:'ggnx;lsd', fullName:'Gbenga akingbulere',email:'gakin95@gmail.com',role:'host',mobile:'08023456787',department:'Computer science'},
        // {id:'ggs87sd', fullName:'Ada Obi',email:'gakin95@gmail.com',role:'user',mobile:'08023456787',department:'Computer science'},
        // {id:'gg789ssd', fullName:'Gbenga akingbulere',email:'gakin95@gmail.com',role:'user',mobile:'08023456787',department:'Computer science'},
        // {id:'gg8wmsd', fullName:'Gbenga akingbulere',email:'gakin95@gmail.com',role:'user',mobile:'08023456787',department:'Computer science'},
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
                    return items.filter(x => x.typeOfService.toLowerCase().includes(target.value))
            }
        })
    }
   let content = null;
   if (records && records.length>0) {
       content = <div>
           <div className={classes.serviceappr}>
               <h4>Service Approval</h4>
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
                           <TableCell>{item.typeOfService}</TableCell>
                           <TableCell>{item.vendor}</TableCell>
                           <TableCell>{item.date}</TableCell>
                           <TableCell>{item.status}</TableCell>
                           <TableCell>
                               <button className={classes.action} style={{color:'green'}}>Approve</button>
                               <button className={classes.action} style={{color:'red'}}>Reject</button>
                           </TableCell>
                           <TableCell>
                               <button className={classes.action}>Veiw</button>
                           </TableCell>
                       </TableRow>)
                   )
               }
           </TableBody>
       </TblContainer>
       <TblPagination />
   </div>
   }else{
       content = <Paper className={classes.pageContent}>
           <h1 style={{textAlign:'center'}}>There is no data available</h1>
           </Paper>
   }

    return (<div>
            <div className={classes.approvals}>
                {/* <h3 className={classes.label}>Approvals</h3> */}
            </div>
            {content}
            </div>
    )
}

export default AdminsDashboard
