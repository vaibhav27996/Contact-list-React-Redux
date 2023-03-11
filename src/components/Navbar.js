import styles from '../styles/navbar.module.css';
import { Link } from 'react-router-dom';
const Navbar=()=>{

    return (
        <div className={styles.navbar}>
           <Link style={{ float:"right", margin: "7px"}} to='/add' className='btn btn-small btn-secondary '>Add Contact</Link>
           <h3 className='{styles.heading}'>Contact List</h3>
        </div>
    )

}

export default Navbar;