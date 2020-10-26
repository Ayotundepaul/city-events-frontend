import React from 'react';
import Grid from '@material-ui/core/Grid';
import { useRouter } from 'next/router';
import {EventListing} from '../singleItem';

 const AlleventsListing = ({data}) => {
     const router = useRouter();
    return ( 
        <Grid container spacing={3}>
            {data.map(item => <Grid item xs={12} key={item.id}>
            <EventListing 
            click ={() => router.push(`/posts/${item.date}`)}
            image={item.image}
            amount={item.amount}
            date={item.date}
            content= {item.content.substring(0,200)}
            address={item.address}
            />
            </Grid>)}
        </Grid>
    )
};

export default AlleventsListing
