import axios from 'axios';
import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Create(){
    const[name,setName]=useState('')
    const[age,setAge]=useState('')
    const[email,setEmail]=useState('')

    const navigate = useNavigate();


    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post('https://63ca9e88f36cbbdfc75c8809.mockapi.io/crud',{
                e_name:name,
                e_age:age,
                e_email:email
        }).then(() => {
            navigate('/')
        })
    }

    return(
        <>
        <div className='row m-4'>
            <div className='col-md-3'>
            <div className="mb-2 mt-2">
                        <Link to='/'>
                        <button className="btn btn-primary">Read Data</button>
                        </Link>
                    </div>
                <div className='bg-primary p-4 text-center'>
                    <h1>Create data</h1>
                </div>
                
            </div>
    
            <form onSubmit={handleSubmit}>
                <div className='form-group col-md-3'>
                    <label>Enter Name:</label>
                    <input type='text' placeholder='Name' className='form-control' onChange={(e)=>setName(e.target.value)}/>
                    </div>
    
                    <div className='form-group col-md-3'>
                    <label>Enter Age:</label>
                    <input type='number' placeholder='age' onChange={(e)=>setAge (e.target.value)}className='form-control' />
                    
                </div>
                <div className='form-group col-md-3'>
                    <label>Enter Email:</label>
                    <input type='email' placeholder='email' onChange={(e)=>setEmail(e.target.value)} className='form-control'/>
                </div>
                <div className='d-grid col-md-3'>
                    <input type='submit' value='submit' className='btn btn-primary'/>
                </div>
            </form>
            {name}
            <br/>
            {age}
            <br/>
            {email}
        </div>
        </>
       
        )
    }
    export default Create;
