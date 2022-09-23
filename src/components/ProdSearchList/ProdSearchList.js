import React from "react";

import { ProductListWrapper } from "./ProdSearchListStyled";

import withLoader from "../../hocs/withLoader/withLoader";

export const ProdSearchList = (products) => {
    return (
        <ProductListWrapper>
            search results
        </ProductListWrapper>
    )
}

export default withLoader(ProdSearchList);