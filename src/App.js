import React from 'react';
import './App.css';
// import PostMessageForm from './components/PostMessangeForm';
import {Provider} from "react-redux"
import PostMessage from './components/PostMessages';
import {store} from "./actions/store.js"
import {AppBar, Container, Typography} from "@material-ui/core"; 
function App() {
  return (
  
     <Provider store={store}>
      <Container maxWidth="xs" className="ra" > 
        <AppBar postion="static" color="inherit">
          <Typography
          variant="h2" aligh="center"> Form
          </Typography>
        </AppBar>
      <PostMessage/>
      </Container>  
        </Provider>     
  );
}

export default App;
