
import { useRouteError } from "react-router-dom";

const Error = () =>{

    const err=useRouteError();
    console.log(typeof err);

    return (

        <div className="error"> 
        
          <h1>Ooopssssssss</h1>
          <h2>{err.status} {err.statusText}</h2>

        </div>
    );

};

export default Error;