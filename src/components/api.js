import axios from "axios"
export const getRecipes = async(searchedQuery)=>{
    const apiKey= "b20054c2a6e340e5849f159a3627655a"
    const apiKey1= "35b7d609bbf84500bde58dc62b6e4fb7"
    try {
        let response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${searchedQuery}&minCarbs=10&number=11&apiKey=${apiKey}`);
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.log('error while calling API')
    }
}