import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ImageList, ImageListItem, Typography,Box ,Button} from '@material-ui/core';
import { data } from '../static/data';



const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
        },
        backgroundColor: '#ECEAEA',
        
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
export default function About() {
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
<div className={classes.root1}>
           
            <div>
            <h1 className={classes.title}>
            About NDRF<br/>
          </h1>
            <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
             Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
               voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            </Typography><br/>
            <Button variant="outlined" color='warning'>learn more</Button>
            </div>
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
        </div>
        </div>

    );
}