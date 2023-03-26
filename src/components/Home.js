import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import styles from '../styles/home.module.css';

const Home = () => {

    const contacts = useSelector(state => state);
    
    const dispatch = useDispatch();

    //handling delete event
    
    const deleteContact = (id) => {
        alert('Are you sure want to delete this contact?');
        dispatch({ type: 'DELETE_CONTACT', contact_id: id });
        toast.success('Contact deleted successfully!');
    }

    return (
        <div className='container'>
            <div className='row'>
                
                <div className='col-md-10 mx-auto mt-3'>
                    <table className='table  table-responsive table-hover'>
                        <thead className={`text-white text-left ${styles.table_heading}`}>
                            <tr>
                                <th>Sr.No</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Number</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody style={{backgroundColor:'white'}}>
                            {
                                contacts.map((contact, id) => (
                                    
                                    <tr key={id}>
                                        <td>{id + 1}</td>
                                        <td>{contact.name}</td>
                                        <td>{contact.email}</td>
                                        <td>{contact.number}</td>
                                        <td>
                                            <Link to={`/edit/${contact.id}`} className='btn btn-small btn-success me-2'>Edit</Link>
                                            <button type='button' onClick={() => deleteContact(contact.id)} className='btn btn-small btn-danger'>Delete</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    )
}

export default Home;