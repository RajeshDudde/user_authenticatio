//33
import { Grid, List, ListItem, ListItemText, Paper ,Typography,withStyles,Divider} from '@material-ui/core';
import React, { useEffect, Fragment,useState } from 'react';
import {connect } from 'react-redux'
import * as actions from "../actions/postMessage";
import PostMessageForm from "./PostMessangeForm";

const styles=theme=>({
    paper:{
        margin:theme.spacing(10),
        padding:theme.spacing(5),
       
        //  display:'flex',
        // position:"relative",
         flexWrap: 'wrap',
        // justifyContent: 'center',
       
    }
})
const PostMessages=({classes,...props})=>{
    // const [x,setx]=useState(0)
    // setx(5)
    useEffect( ()=>{
        props.fetchAllPostMessages()         
    },[]);// empty array is equal to didmount in class based component
    return (
        <Grid container>
            <Grid >
                <Paper className={classes.paper}> 
                 <PostMessageForm/>
                 </Paper>
            </Grid> 
            <Grid >
                <Paper className={classes.paper}> 
                 <List>
                     {
                         props.postMessageList.map((newrecord,index)=>
                         {
                             return(
                                 <Fragment key={index}>
                                 <ListItem>
                                    <ListItemText>
                                        <Typography varient="h5" >
                                            {
                                                newrecord.name
                                            }
                                            </Typography>
                                            <div>
                                                {newrecord.address}
                                            </div>
                                            <div>
                                                {newrecord.dob}
                                            </div>
                                            <div>
                                                {newrecord.email}
                                            </div>
                                            <div>
                                                {newrecord.phoneno}
                                            </div>
                                            </ListItemText> 
                                 </ListItem>
                                 <Divider component='li'></Divider>
                                 </Fragment>
                             )
                         }
                         )
                     }
                 </List>
                 </Paper>
            </Grid> 
        </Grid>
    );
}
const mapStateToProps=state=>({
   postMessageList:state.postMessage.list
})
const mapActionToProps={
    fetchAllPostMessages:actions.fetchAll
}// access  with props.fetchAllPostMessage

//1:4hour
export default connect(mapStateToProps,mapActionToProps)(withStyles(styles)(PostMessages));