import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from './components/Header';
import PlaceToVisit from './components/PlaceToVisit';
import Info from './components/Info';
import About from './components/About';
import Top from './components/Top';
import TopCard from './components/TopCard';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${process.env.PUBLIC_URL + '/assets/bgd.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  },
}));
export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <PlaceToVisit />
      <Info/>
      <About/>
      <TopCard/>
    </div>
  );
}
