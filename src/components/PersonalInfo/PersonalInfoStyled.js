import styled from "styled-components";

import { 
    PERSONAL_INFO_BACKGROUND_COLOR 
} from "../../assets/themes/colors";

export const PersonalInfoWrapper = styled.div`
    background-color: ${PERSONAL_INFO_BACKGROUND_COLOR};
    display: block;
    
    height: 100vh;
    flex-grow: 1;

    padding-top: 300px;

    @media (max-width: 768px) {
        padding-top: 80px;
        margin-top: 50px;
        height: fit-content;
    }
`