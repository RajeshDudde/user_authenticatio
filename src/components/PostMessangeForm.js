import React, { useState } from 'react';
import { withStyles} from '@material-ui/core';
import Useform from "./Useform";
import TextField from '@material-ui/core/TextField';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button'
const styles=theme=>({
  root:{
    '& .MulTextField-root':{
      margin:theme.spacing(1)
    },
  },
    div:{
        margin:theme.spacing(4),
        padding:theme.spacing(3),
        // position:"relative",
        // display:'flex',
        // flexWrap: 'wrap',
        // justifyContent: 'center'
    },
    form:{
      display:'flex',
      flexWrap:'wrap',
      justifyContent:'center',
    }
})
const intialFieldValues={
    name:" ",
    address:" ",
    dob:" ",
    email:" ",
    phoneno:" ",
    password:" "
}


const PostMessageForm=({classes,...props})=>{
 var{
  values,
  setValues,
  handleinputchange
 }= Useform(intialFieldValues)
 const handlesubmit=e=>{
   console.log(values)
 //  e.preventDefault();
 }
    return (
    // <div className={classes.div} >
    //    {/* from post messages FORM */}
        <form autoComplete="off" className={`${classes.div}${classes.root} ${classes.form}`} onSubmit={handlesubmit}>
        <TextField required id="standard-required" name="name" label="name" variant="standard" fullWidth 
         value={values.name}  onChange={handleinputchange} />
         <TextField required id="standard-required" name="address"  label="address"  variant="standard" fullWidth 
         value={values.address}  onChange={handleinputchange}  />
        <TextField
         id="date"
         name="dob"
         value={values.dob}
         label="dob"
         type="date"
         defaultValue=" "
         className={classes.textField}
         InputLabelProps={{
         shrink: true,
         }}
         />
          {/* <TextValidator
                    label="email"
                    // onChange={props.email}
                    name="email"
                    value={values.email}
                    validators={['required', 'isEmail']}
                    errorMessages={['this field is required', 'email is not valid']}
                /> */}
          <TextField
          id="standard-number"
          name="phoneno"
          value={values.phoneno}
          label="phoneno"
          type="number"
          InputLabelProps={{
            shrink: true,
           }}
           />
            {/* <FormControl className={clsx(classes.margin, classes.textField)}>
          <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
            id="standard-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl> */}





          {/* <div id="a">
          
          <label id="n">Name:</label>
          <input type="text" id="name1" name="name" value={values.name}></input>
          <br>
          </br>
          </div>
          <div id="a">
          <label id="n">Address      :</label>
          <input type="text" id="address1" name="address" value={values.address}></input>
          <br>
          </br>
          </div>
          <div id="a">
          <label id="n">Date Of Birth:</label>
          <input type="date" id="dob1" name="dob" value={values.dob}></input>
          <br>
          </br></div>
          <div id="a">
          <label id="n">Email        :</label>
          <input type="email" id="em" name="email" value={values.email}></input>
          <br>
          </br>
          </div>
          <div id="a">
          <label id="n">Phone No     :</label>
          <input type="tel" id="ph" name="phoneno" value={values.phoneno}></input>
          <br>
          </br></div>
          <div id="a">
          <label id="n">Password:  </label>
          <input type="password"id="password" name="password" value={values.password}></input>
          <br>
          </br>
          <div id="a">
          <button id="bu"onClick={()=>this.change()}>submit</button>
         
          </div>
        </div>*/}
         <Button 
         varient="contained"
         color="primary"
         size="large"
         type="submit"
         >submit</Button>
          </form>
        // </div>
        ) 
}
//1.26
 export default withStyles(styles)(PostMessageForm);