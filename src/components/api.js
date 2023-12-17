import axios from "axios"
import apiKey from "./key";
export const getRecipes = async(searchedQuery)=>{
    try {
        let response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${searchedQuery}&minCarbs=10&number=11&apiKey=${apiKey}`);
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.log('error while calling API')
    }
}