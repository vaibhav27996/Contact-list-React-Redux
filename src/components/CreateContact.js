import '../styles/App.css';
import { Link,useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {toast}  from 'react-toastify';
import styles from '../styles/form.module.css';

function CreateContact() {

    //get the state from store
    const contacts = useSelector(state => state);

   
    const [name,setName]=useState('');
    const [number,setNumber]=useState('');
    const [email,setEmail]=useState('');

    const dispatch = useDispatch();
    const navigate=useNavigate();


    //handing the input data on click submit button
    
    const handleSubmit=async (e)=>{
        e.preventDefault();

        if(!name || !email || !number){
            toast.error('Please fill all the fields');
        }

        const emailExist = contacts.find(contact => contact.email === email)
        const numberExist = contacts.find(contact => contact.number ===  number)
       
        if(numberExist || emailExist){
            toast.error('Number or Email already exists');
            return navigate('/');
        }

        const contactData={
            id:contacts[contacts.length-1].id+1,
            name:name,
            email:email,
            number:number
        };

        dispatch({ type: 'ADD_CONTACT', contactData });
        toast.success("Contact added successfully!!")
        navigate('/');

       
    }



  return (
    <div className="App">
        <div className='container'>
        <div className='row'>
            <div className='col-12 col-sm-3 col-md-3 col-lg-3'></div>

            <div className={`col-12 col-sm-6 col-md-6 col-lg-6  ${styles.colStyle}`}>
                    <h1 className='text-center'>Create Contact</h1> 
                    <form onSubmit={handleSubmit}>
                        <label className='label mt-3'>Name</label><br />
                        <input type="text"  className='form-control mt-2' onChange={(e)=>setName(e.target.value)} placeholder="Enter the Name" required/><br/>

                        <label  className='label'>Number</label><br />
                        <input type="text" className='form-control mt-2'  onChange={(e)=>setNumber(e.target.value)} placeholder="Enter the Number" required/><br />

                        <label  className='label'>Email</label><br />
                        <input type="email" className='form-control mt-2' onChange={(e)=>setEmail(e.target.value)} placeholder="Enter the Email" required/><br />
                        
                        <Link to="/">
                            <button  className={`btn btn-xs btn-danger ${styles.commonBtn}`}>
                                Back
                            </button>
                        </Link>

                        <button type='submit' className={`btn btn-small btn-success me-2  ${styles.commonBtn}`}>
                                Save
                        </button>

                    </form>
            </div>

            <div className='col-12 col-sm-3 col-md-3 col-lg-3'></div>
        </div>
           
        </div>
        
    </div>
  );
}

export default CreateContact;
