//IT WILL FETCH THE STATUS OF INTERNET USING BROWSER EVENT LISTENER online or offline 


import { useState,useEffect } from "react";

const useOnlineStatus =() =>{

    const [OnlineStatus,setOnlineStatus]=useState(true);

    //WE WRITE THE LOGIC IN useEffect as we 
    useEffect(()=>{


          window.addEventListener("offline", (event) => {
           
            setOnlineStatus(false);

          });
          window.addEventListener("online", (event) => {
           
            setOnlineStatus(true);

          });

    },[]);

    return OnlineStatus;
}

export default useOnlineStatus;