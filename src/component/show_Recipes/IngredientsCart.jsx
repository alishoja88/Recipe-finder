import React, { useContext } from "react";
import { Typography, Paper, List } from "@mui/material";
import { AppContext } from '../../context/recipeData';


const IngredientsCart = ({ recipe }) => {
    const { recipes } = useContext(AppContext);

    const aa = recipes.map(a => a.recipe)
    const bb = aa.map(b => b.ingredients)
    const cc = bb.map(v => v.text)
    console.log("aaaaa", cc)



    return (
        <Paper elevation={3} sx={{ p: 2, width: 300, margin: 'auto' }}>
            <Typography variant="h6" gutterBottom>
                Ingredients
            </Typography>
            <List>
                <ul>
                    {cc.map((ingredient, index) => (
                        <li key={index}>{ingredient.text}</li>
                    ))}
                </ul>
            </List>
        </Paper>
    );
}

export default IngredientsCart;