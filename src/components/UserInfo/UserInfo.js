import React from "react";

import { useSelector } from "react-redux";

export const UserInfo = () => {

    const isUserLogged = useSelector(state => state.userInfo.userLogged);

    return(
        <div>
            {/* {isUserLogged && <>user Info</>} */}
        </div>
    )
}

export default UserInfo;