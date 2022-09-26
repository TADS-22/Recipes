import foodApi from "../../commons/api";
import { GET_RECIPE_INFORMATION, GET_SEARCH_RECIPE } from "../../config/api";
import { Recipe, SearchRecipeResult } from "./interface";

export const searchRecipe = async (queryText: string): Promise<SearchRecipeResult> => {
    const url = GET_SEARCH_RECIPE(queryText)
    const response = await foodApi.get<SearchRecipeResult>(url)
    return response.data
}

export const getRecipe = async (recipeId: number): Promise<Recipe> => {
    const url = GET_RECIPE_INFORMATION(recipeId)
    const response = await foodApi.get<Recipe>(url)
    return response.data
}
