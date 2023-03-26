import { Route ,Routes} from "react-router-dom";
import '../styles/App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CreateContact from './CreateContact';
import EditContact from './EditContact';
import Navbar from "./Navbar";
import Home from '../components/Home';
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function App () {

    const dispatch = useDispatch();

    //fetching the contact list of user from api and call dispatch action to store the data in store
    useEffect(() => {
        const data = [];
        const promise = async () => {
            await fetch('https://jsonplaceholder.typicode.com/users/') 
                .then((response) => response.json())
                .then((json) => {
                    json.map((contact) => {
                        data.push({
                            id: contact.id,
                            name: contact.name,
                            number: contact.phone,
                            email: contact.email
                        });
                    })
                });
            dispatch({ type: 'FETCH_CONTACTS', contactDatas: data });
        };
        promise();
    }, []);


  return (
      <div className="App">
        <ToastContainer 
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        
        />
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route path="/add" element={<CreateContact />}></Route>
                <Route path="/edit/:id" element={<EditContact />}></Route>
            </Routes>
      </div>
  );
}

export default App;
