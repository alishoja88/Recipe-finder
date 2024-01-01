import React, { useContext } from "react";
import { AppContext } from "../context/recipeData";
import RecipeShow from "./show_Recipes/RecipeShow";
import "./recipe.css"


const RecipeList = () => {
    const { recipes } = useContext(AppContext);
    const { searched } = useContext(AppContext);

    console.log("Recipes:", recipes);



    const renderRecipeList =
        recipes.length > 0 ? (
            recipes.map((recipe, index) => (
                <React.Fragment key={index}>
                    <RecipeShow recipe={recipe.recipe} />
                </React.Fragment>
            ))
        ) : null;



    const renderNoResults =
        searched && recipes.length === 0 ? (
            <div className="no-found-serach">No recipe found</div>
        ) : null;


    return (

        <div className="recipe-content">
            {renderRecipeList}
            {renderNoResults}
        </div>


    )
}

export default RecipeList;