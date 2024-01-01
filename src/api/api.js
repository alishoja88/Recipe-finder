import axios from "axios";

const API_URL = "https://api.edamam.com/api/recipes/v2?type=public";
const API_ID = "a407c56b";
const API_KEY = "e79c0d22db3301a2a9c59ab8f88abbb8";
// 

const fetchRecipe = async (searchValue) => {
    const url = `${API_URL}&q=${searchValue}&app_id=${API_ID}&app_key=${API_KEY}`

    try {
        const response = await axios.get(url);
        return response.data
    } catch (error) {
        throw new Error(`Errore fetching data from Api: ${error}`)
    }
}

export default fetchRecipe;