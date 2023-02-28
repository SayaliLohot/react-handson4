import Nav from '../Nav'

const Student =()=>{
    return(
        <>
        <Nav/>
        <div className='Student_div1'>
        <h1>Student Details</h1>
        <button>Add New Student</button>
        </div>
        <table >
         <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Course</th>
            <th>Batch</th>
            <th>Change</th>
         </tr>
         <tr>
            <td>Sayali</td>
            <td>26</td>
            <td>MERN</td>
            <td>October</td>
            <td>Edit</td>
         </tr>
         <tr>
            <td>Sayali</td>
            <td>26</td>
            <td>MERN</td>
            <td>October</td>
            <td>Edit</td>
         </tr>
         <tr>
            <td>Sayali</td>
            <td>26</td>
            <td>MERN</td>
            <td>October</td>
            <td>Edit</td>
         </tr> <tr>
            <td>Sayali</td>
            <td>26</td>
            <td>MERN</td>
            <td>October</td>
            <td>Edit</td>
         </tr>
         <tr>
            <td>Sayali</td>
            <td>26</td>
            <td>MERN</td>
            <td>October</td>
            <td>Edit</td>
         </tr>
        </table>
        </>
    )
}

export default Student;