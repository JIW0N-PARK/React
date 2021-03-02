import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import TopNav from './components/TopNav';
import BookList from './components/BookList';
import BookDetail from './components/BookDetail';
import './App.css';

function App() {
  return (
    <div>
      <TopNav/>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <BookList/>
          </Grid>
          <Grid item xs={8}>
            <BookDetail/>
          </Grid>
        </Grid>
      </Container>
       
    </div>
  );
}

export default App;
