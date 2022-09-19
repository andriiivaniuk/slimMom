import React from "react";
import { useNavigate } from "react-router";

import { 
    UnloggedNavWrapper,
    LoggedWrapper,
    SignInButton,
    RegisterButton,
    ButtonsSet
} from "./NavigationStyled";

export const Navigation = ({isLoggedIn}) => {

    const navigate = useNavigate();

    return(
        <nav>
            {
                isLoggedIn ?
                <LoggedWrapper>

                </LoggedWrapper>
                
                :

                <UnloggedNavWrapper>
                    <ButtonsSet>
                        <SignInButton onClick={() => navigate("/login")}>
                            Sign In
                        </SignInButton>
                        <RegisterButton onClick={() => navigate("/register")}>
                            Register
                        </RegisterButton>
                    </ButtonsSet>
                </UnloggedNavWrapper>
            }
        </nav>
    )
}

export default Navigation;