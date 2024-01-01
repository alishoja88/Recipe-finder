import { useState, useContext, useEffect } from "react";
import { Typography, Box, TextField, Button, Grid } from "@mui/material";
import { AppContext } from "../context/recipeData";
import fetchRecipe from "../api/api";

const SearchBar = () => {
    const { setRecipes } = useContext(AppContext);
    const { setSearched } = useContext(AppContext);
    const [searchValue, setSearchValue] = useState('');

    const calcTip = function (bill) {
        return bill >= 0 && bill <= 300 ? bill * 0.15 : bill * 0.2;
    }

    /* Write your code below. Good luck! 🙂 */

    const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
    const tip = [];
    const total = [];

    for (let i = 0; i < bills.length; i++) {
        tip.push(calcTip(bills[i]))

        // tip.push(calcTip(i))
        // for (let index = 0; index < array.length; index++) {
        //     const element = array[index];

        // }
        // console.log(tip)
    }
    console.log(tip)




    /// read value of input
    const handelChange = (event) => {
        setSearchValue(event.target.value)
    }

    const handelSubmit = async (event) => {
        event.preventDefault();
        try {
            const data = await fetchRecipe(searchValue);
            setRecipes(data.hits);
            setSearched(true);
        } catch (error) {
            console.log(error)

        }
    }

    useEffect(() => {
        setSearched(false);
    }, []);

    return (

        <Box
            component="form"
            sx={{
                width: "auto",
                height: "100px",
                margin: "10px auto",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center"
            }}
            onSubmit={handelSubmit}

        >
            <Typography sx={{
                margin: "auto", fontSize: "25px", fontWeight: 700, color: "orange"
            }} variant="h6" component={"h4"}>
                Recipe Serach Bar
            </Typography>
            <Grid container spacing={2} alignItems={"center"} sx={{ justifyContent: "center", margin: "auto" }}>
                <Grid item xs={5} sx={{ display: "flex", justifyContent: "right" }}>
                    <TextField
                        label="search title"
                        value={searchValue}
                        onChange={handelChange}
                        sx={{ width: 500, margin: "10px" }}
                    />
                </Grid>
                <Grid item xs={3}>
                    <Button type="submit" variant="contained">
                        search
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
}

export default SearchBar;