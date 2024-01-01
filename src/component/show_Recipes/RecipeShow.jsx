import React, { useState } from 'react';
import Link from '../Link';
import { Card, CardActionArea, CardContent, CardMedia, Typography, Button, } from '@mui/material';
import Router from '../Router';
import Side from '../Side';
import IngredientsCartPag from '../../page/IngredientsCartPage';
import IngredientsCart from './IngredientsCart';
const RecipeShow = ({ recipe }) => {


    // console.log("Recipe data:", recipe);
    // console.log("aaaaa", recipe.ingredients)
    const [showIngredients, setShowIngredients] = useState(false);

    const handleToggleIngredients = () => {
        setShowIngredients(!showIngredients);
    };
    if (!recipe) {
        return <div>No recipe data available</div>;
    }



    return (
        <Card sx={{ margin: "10px", width: "25%" }}>
            <CardActionArea sx={{ width: "100%" }}>
                <CardMedia
                    sx={{ width: "100%" }}
                    component="img"
                    height="140"
                    image={recipe.image}
                    alt={recipe.label}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {recipe.label}
                    </Typography>
                    <Button>
                        <Side>
                            <Router path='/ingredients'>
                                <IngredientsCartPag />
                            </Router>
                        </Side>

                    </Button>
                    <Button onClick={handleToggleIngredients}>
                        {showIngredients ? 'Hide Ingredients' : 'Show Ingredients'}
                    </Button>
                    {showIngredients && <IngredientsCart recipe={recipe.ingredients} />}

                    {/* {showIngredients && (
                        <div>
                            <Typography variant="body2" color="text.secondary">
                                Ingredients:
                            </Typography>
                            <ul>
                                {recipe.ingredients.map((ingredient, index) => (
                                    <li key={index}>{ingredient.text}</li>
                                ))}
                            </ul>
                        </div>
                    )} */}
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default RecipeShow;