import React from 'react';
import Grid from '@material-ui/core/Grid'
import {News} from '../singleItem';

const Allnews = ({data}) => {
    return ( 
        <Grid container spacing={3}>
            {data.map(news => <Grid item xs={12} sm={6} md={4} key={news.id}>
            <News 
            image={news.image}
            title={news.title}
            content={news.content.substr(0,100) + "..."}
            />
            </Grid>)}
        </Grid>
    )
};

export default Allnews