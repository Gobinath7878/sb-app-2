import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const UserTable = (props)=>(
    <table className="table">
    <thead>
      <tr>
        <th scope="col">S.No</th>
        <th scope="col">Name</th>
        <th scope="col">Class</th>
        <th scope='col'>Age</th>
        <th scope='col'>DOB</th>
        <th scope='col'>Roll No</th>
        <th scope='col'>Father Name</th>
        <th scope='col'>Mother Name</th>
        <th scope='col'>Address</th>
        <th scope="col">Edit/Delete</th>
      </tr>
    </thead>
    <tbody>
        {props.users.length>0?(
            props.users.map((user)=>(
                <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.class}</td>
                        <td>{user.age}</td>
                        <td>{user.dob}</td>
                        <td>{user.rollno}</td>
                        <td>{user.fathername}</td>
                        <td>{user.mothername}</td>
                        <td>{user.address}</td>
                        <td>
                        <button onClick={()=>{
                            props.editRow(user)
                        }} className="e-btn"><EditIcon/></button>
                        <button onClick={()=>props.deleteUser(user.id)} className="d-btn-t"><DeleteIcon/></button>
                        </td>
                    </tr>

            ))
            ):(
                <tr>
                    <td>Add Student</td>
                </tr>
            )
        }
      
    </tbody>
  </table>
);

export default UserTable;


