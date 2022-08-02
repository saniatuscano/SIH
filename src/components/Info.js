import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ImageList, ImageListItem, Typography,Box ,Button,Collapse} from '@material-ui/core';
import { data } from '../static/data';
import { useState,useEffect } from 'react';
import useWindowPosition from '../hook/useWindowPosition';



const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
        },
        backgroundColor: 'white',
        
    },
   root1:{
    display: 'flex',
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
    },
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
    },
    margin: '20px'
   },
    title: {
        color: '#F89C37',
        fontSize: '2.5rem',
      },
}));
export default function Info() {
    const classes = useStyles();
    const checked = useWindowPosition('place-to-visit');
  
    
    return (
        <div className={classes.root}>
<div className={classes.root1}>
            <Box
        component="img"
        sx={{
          height: 353,
          width: 550,
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
          margin: 20,
        }}
        alt="The house from the offer."
        src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
      />
            <div>
            <Collapse
       in={checked} {...(checked ? { timeout: 1000 } : {})}
      >
            <h1 className={classes.title} checked={checked}>
            Become a Volunteer<br/>
          </h1>
            <Typography checked={checked}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
             Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
               voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            </Typography><br/>
            <Button variant="outlined" color='warning'>learn more</Button>
            </Collapse>
            </div>
        </div>
        </div>

    );
}