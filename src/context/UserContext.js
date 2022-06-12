import { createContext } from "react";
import { useState } from "react";

export const UserContext = createContext()

export const UserProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(null);

    return (
        <UserContext.Provider value={({ isLoggedIn, setIsLoggedIn})}>
            {props.children}
        </UserContext.Provider>
    )
}