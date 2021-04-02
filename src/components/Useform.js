import  { useState } from 'react';
const Useform=(intialFieldValues)=>{
    const [values,setValues]=useState(intialFieldValues)
    // const handleChange=useState(handle);
    const handleinputchange=(e)=>
   {
   const {name,value}=e.target

   setValues({
    // ...values,
        [name]:value
   })
    }
    return ({
        values,
        setValues,
        handleinputchange
    });
}
export default Useform;