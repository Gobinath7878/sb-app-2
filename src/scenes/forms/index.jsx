import { useState } from "react";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

 const AddUserForm = (props)=>{
    const initialFormState = {id:null,name:'',class:'',age:'',dob:'',rollno:'',fathername:'',mothername:'',address:''}
    const [user,setUser] =  useState(initialFormState);

    const handleInputChange = (event)=>{
       const {name,value} = event.target
   

       setUser({...user,[name]:value})
    }
    const currencies = [
        {
          value: '11-A',
          label: '11-A',
        },
        {
          value: '11-b',
          label: '11-B',
        },
        {
          value: '12-A',
          label: '12-A',
        },
        {
          value: '12-B',
          label: '12-B',
        },
      ];
      
    return (
    <form onSubmit={
        event => {
            event.preventDefault();
            props.addUser(user);
            setUser(initialFormState);
        }
    }>
        {/* <label>Name</label>
        <input type="text" onChange={handleInputChange} name="name" value={user.name} />
       
        <label>Username</label>
        <input type="text" onChange={handleInputChange} name="username" value={user.username} /> */}

        <TextField sx={{height:80,width:250,m:'10px'}}  color="secondary" onChange={handleInputChange} name="name" value={user.name}  label="enter name" id="outlined-basic"  variant="outlined"/>

        {/* <TextField sx={{height:80,width:250,m:'10px'}}  color="secondary" onChange={handleInputChange} name="userclass" value={user.userclass} label="enter class" id="outlined-basic"  variant="outlined"/> */}

        <TextField
          id="outlined-select-currency"
          select
          label="class"
          defaultValue="11-A"
          helperText="Please select class"
          sx={{height:80,width:250,m:'10px'}}
          color="secondary" onChange={handleInputChange}
          name="class" value={user.class}
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>



        <TextField sx={{height:80,width:250,m:'10px'}}  color="secondary" onChange={handleInputChange} name="age" value={user.age} label="enter age" id="outlined-basic"  variant="outlined"/>
        <TextField sx={{height:80,width:250,m:'10px'}}  color="secondary" onChange={handleInputChange} name="dob" value={user.dob} label="enter Date of birth" id="outlined-basic"  variant="outlined"/>
        <TextField sx={{height:80,width:250,m:'10px'}}  color="secondary" onChange={handleInputChange} name="rollno" value={user.rollno} label="enter Roll no" id="outlined-basic"  variant="outlined"/>
        <TextField sx={{height:80,width:250,m:'10px'}}  color="secondary" onChange={handleInputChange} name="fathername" value={user.fathername} label="enter father name" id="outlined-basic"  variant="outlined"/>
        <TextField sx={{height:80,width:250,m:'10px'}}  color="secondary" onChange={handleInputChange} name="mothername" value={user.mothername} label="enter mother name" id="outlined-basic"  variant="outlined"/>
        <TextField sx={{height:80,width:250,m:'10px'}}  color="secondary" onChange={handleInputChange} name="address" value={user.address} label="enter address" id="outlined-basic"  variant="outlined"/>
        <button className="add-btn">Submit</button>
      </form>
    )
 }

export default AddUserForm;
