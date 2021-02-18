import React, {useState} from 'react';
import axios from 'axios';
import team from '../team.png';
const InputStudent = () => {
    const [student,setStudent] = useState(
        {
            firstname : '',
            lastname : '',
            place : ''
        }  
    ); 
    const handleInput = (e) => {
        // console.log(e.target.name);
        // console.log(e.target.value);
        setStudent({...student, [e.target.name]: e.target.value});
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(student);
        (async () => {
            if(student.firstname !== '' && student.lastname !== '' && student.place !== '')
            {
                await axios.post('http://localhost:5000/students', student)
                .then(res =>{
                    console.log('successfully posted');
                    setStudent({firstname : '', lastname : '', place : ''});
                })
                .catch(error => {
                    console.log(error);
                });
            }
        })()
    }
    return (
        <div class="row text-center">
            <div class="col-md-4">
                <form onSubmit={(e) => handleSubmit(e)}>
                    <input required onChange={e => handleInput(e)} name='firstname' value={student.firstname} style={{borderRadius: '10px', marginLeft:'50px', marginTop:'20px'}} placeholder="firstname" class="form-control"/>
                    <input required onChange={e => handleInput(e)} name='lastname' value={student.lastname} style={{borderRadius: '10px', marginLeft:'50px', marginTop:'20px'}} placeholder="lastname" class="form-control"/>
                    <input required onChange={e => handleInput(e)} name='place' value={student.place} style={{borderRadius: '10px',  marginLeft:'50px', marginTop:'20px'}} placeholder="place" class="form-control"/>
                    <button style={{fontSize:'19px', outline:'none', borderRadius: '10px', backgroundColor:'#000066', color:'white', width:'435', marginLeft:'50px', marginTop:'20px'}} type="submit">CREATE</button>
                </form>
            </div>
            <div class="col-md-8">
                <img src={team}/>
            </div>
        </div>
    )
};

export default InputStudent;
