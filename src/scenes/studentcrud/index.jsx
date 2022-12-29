import { useState } from "react";
import AddUserForm from "../forms";
import UserTable from "../tables";
import EditUserForm from "../forms1";
import Header from "../../components/Header";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Studentcrud() {

const usersData = [
    {id:1,name:'Go Na',class:'12-B',age:'17',dob:'7/8/00',rollno:'1922',fathername:'selva',mothername:'chintha',address:'143,nagar street'},
    {id:2,name:'Guna',class:'12-B',age:'17',dob:'19/8/00',rollno:'1923',fathername:'Raju',mothername:'Sri',address:'13,color street'},
    {id:3,name:'Go Na',class:'12-B',age:'17',dob:'7/8/00',rollno:'1922',fathername:'selva',mothername:'chintha',address:'143,nagar street'},
    {id:4,name:'Guna',class:'12-B',age:'17',dob:'19/8/00',rollno:'1923',fathername:'Raju',mothername:'Sri',address:'13,color street'},
    {id:5,name:'Go Na',class:'12-B',age:'17',dob:'7/8/00',rollno:'1922',fathername:'selva',mothername:'chintha',address:'143,nagar street'},
    {id:6,name:'Guna',class:'12-B',age:'17',dob:'19/8/00',rollno:'1923',fathername:'Raju',mothername:'Sri',address:'13,color street'}
];

const addUser = (user)=>{
    user.id = users.length + 1;
    setUsers([...users,user])
}
const deleteUser = (id)=>{
    setUsers(users.filter((user)=>user.id!==id))
    setEditing(false);
}

    const [users,setUsers] = useState(usersData);
    const [editing,setEditing] = useState(false)
    const navigate = useNavigate();


    const initialFormState = {id:null,name:'',class:'',age:'',dob:'',rollno:'',fathername:'',mothername:'',address:''}

    const [currentUser,setCurrentUser] = useState(initialFormState);

    const editRow = (user)=>{
        setEditing(true);
        setCurrentUser({id:user.id,name:user.name,class:user.class,age:user.age,rollno:user.rollno,dob:user.dob,fathername:user.fathername,mothername:user.mothername,address:user.address});
    }

    const updateUser = (id,updatedUser)=>{
        setEditing(false);
        setUsers(users.map((user)=>(user.id===id?updatedUser:user)))
    }

  return (
    <div className="crud">
     
      <div className="flex-row">
        <div className="flex-large">
            {editing?(<div>
              
              
              <EditUserForm 
                    setEditing={setEditing}
                    currentUser={currentUser}
                    updateUser={updateUser}
              />
              <Header title="EDIT STUDENT" subtitle="Edit on students Detils"/>
              
              <UserTable editRow={editRow} deleteUser={deleteUser} users={users} />
           
                
            </div>):(
            
            
        <div>
          <div className="flex-dashboard">
              <Header title="ADD STUDENT" subtitle="Add Students details "/>
              
              <Button sx={{
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
              margin:"10px",
              height:"45px",
              backgroundColor:"red",
              color:"white",
              }}
             onClick={() => navigate("/")}>
             Back to Dashboard
            </Button>
          </div>
                <AddUserForm addUser={addUser} />

                <Header title="STUDENTS LIST" subtitle="Details of Students"/>
                <UserTable editRow={editRow} deleteUser={deleteUser} users={users} />
          </div>
            ) 
        }
        </div>
      </div>
    </div>
  );
}

export default Studentcrud;