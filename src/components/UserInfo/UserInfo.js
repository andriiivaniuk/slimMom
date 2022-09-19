import React from "react";

export const UserInfo = ({isLoggedIn}) => {
    return(
        <div>
            {isLoggedIn && <>user Info</>}
        </div>
    )
}

export default UserInfo;