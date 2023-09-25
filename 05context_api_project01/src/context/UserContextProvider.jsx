import React, { useState } from "react";
import UserContext from './userContext';


// here children works like outlet to import dynamic components
const UserContextProvider = ({children})=>{
    const [user, setUser] = useState(null)
    return(
        // we add a property ==> .Provider and then add data in object
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider