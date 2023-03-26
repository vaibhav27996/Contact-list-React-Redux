import '../styles/App.css';
import { Link,useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {toast}  from 'react-toastify';
import styles from '../styles/form.module.css';

const EditContact = () => {
    //get state from store
    
    const contacts = useSelector(state => state);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');

    //getting id on edit button
    const { id } = useParams();


    const currentContact = contacts.find(contact => contact.id === parseInt(id));

    useEffect(() => {
        if (currentContact) {
            setName(currentContact.name);
            setEmail(currentContact.email);
            setNumber(currentContact.number);
        }

    }, [currentContact]);

    const handelSubmit = e => {
        e.preventDefault();

        if (!email || !number || !name) {
            return toast.warning("Please fill in all fields!");
        }
        
        const data = {
            id: parseInt(id),
            name,
            email,
            number
        }

        dispatch({ type: 'UPDATE_CONTACT', editData: data });
        toast.success("Contact updated successfully!!")
        navigate('/');
    };

    return (
        <div className='container'>
            {
                currentContact ? (
                    <>
                        
                        <div className='row'>
                            <div className='col-12 col-sm-3 col-md-3 col-lg-3'></div>

                            <div className={`col-12 col-sm-6 col-md-6 col-lg-6  ${styles.colStyle}`}>
                                
                                <form  onSubmit={handelSubmit}>
                                <h1 className='text-center'>Edit Contact</h1> 
                                <label className='label mt-3'>Name</label><br />
                                <input type="text"  
                                        value={name}
                                        className='form-control mt-2' 
                                        onChange={(e)=>setName(e.target.value)} 
                                        placeholder="Enter the Name" required/><br/>

                                <label  className='label'>Number</label><br />
                                <input type="text" 
                                        value={number}
                                        className='form-control mt-2'  
                                        onChange={(e)=>setNumber(e.target.value)} 
                                        placeholder="Enter the Number" required/><br />

                                <label  className='label'>Email</label><br />
                                <input  type="email" 
                                        value={email}
                                        className='form-control mt-2' 
                                        onChange={(e)=>setEmail(e.target.value)} 
                                        placeholder="Enter the Email" required/><br />
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
                        </div >
                    </>
                ) : (
                    <h1 className='display-3 my-5 text-center fw-bold'>Contact with id {id} does not exists!!</h1>
                )
            }

        </div >
    )
}

export default EditContact
