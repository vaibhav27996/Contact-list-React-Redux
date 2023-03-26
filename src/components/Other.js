import React,{Component} from 'react';
import ReactDOM  from "react-dom";



class Other extends Component{
    render(){
        return ReactDOM.createPortal(
            <h1>Other</h1>,
            document.getElementById("other-root")
        )
    }
}
export default Other;