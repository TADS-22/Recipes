export const API_KEY = ""

export const FOOD_API_BASE_URL = "https://api.spoonacular.com"

export const GET_SEARCH_RECIPE = (queryText: string) => 
    `recipes/complexSearch?number=20&query=${queryText}`

    export const GET_RECIPE_INFORMATION = (recipeId: number) => 
    `recipes/${recipeId}/information`