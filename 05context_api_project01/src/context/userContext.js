import React from "react";

const UserContext = React.createContext()

export default UserContext;


// here we create provider by wrapping the components in UserContext
{/* <UserContext>
    <Login />
    <Card>
        <Data />
    </Card>
</UserContext> */}