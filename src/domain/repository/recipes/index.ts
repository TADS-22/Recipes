import { foodService } from "../../../service"
import { RecipeDto, RecipeSummaryDto } from "../../dto"
import { mapRecipe, mapSearchResult } from "../../mapper/recipes"

export const searchRecipes = async (queryText: string): Promise<RecipeSummaryDto[]> => {
    const response = await foodService.searchRecipe(queryText)
    return mapSearchResult(response.results)
}

export const getRecipe = async (recipeId: number): Promise<RecipeDto> => {
    const response = await foodService.getRecipe(recipeId
)
    return mapRecipe(response)
}
