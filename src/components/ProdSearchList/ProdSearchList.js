import React from "react";

import { useDispatch, useSelector  } from "react-redux";

import { 
    ProductListWrapper,
    SearchTabTitleList,
    SearchResultList,
    SearchResultItem,
    SearchResultNum,
    SearchResultName,
    SearchResultKcal
} from "./ProdSearchListStyled";

import withLoader from "../../hocs/withLoader/withLoader";

export const ProdSearchList = ({setProductToAdd}) => {

    const foodSearchResult = useSelector(state => state.userInfo?.lastFoodSearchResult);
    

    return (
        <ProductListWrapper>
            <SearchTabTitleList>
                <span>№</span>
                <span>Name</span>
                <span>kcal/100g</span>
            </SearchTabTitleList>
            <SearchResultList>
                {Object.keys(foodSearchResult).length === 0 ?
                    <span>no results</span> 
                    :
                    foodSearchResult.map((food, i) => {
                        return (
                            <SearchResultItem key={i} onClick ={() => {
                                setProductToAdd({
                                    id: food._id,
                                    name: food.title.ru
                                })
                            }}>
                                <SearchResultNum>
                                    {i + 1}
                                </SearchResultNum>
                                <SearchResultName>
                                    {food.title.ru}
                                </SearchResultName>
                                <SearchResultKcal>
                                    {food.calories}
                                </SearchResultKcal>
                            </SearchResultItem>
                        )
                    })}
            </SearchResultList>
        </ProductListWrapper>
    )
}

export default withLoader(ProdSearchList);