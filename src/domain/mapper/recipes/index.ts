import { Ingredient, Recipe, SearchRecipeItem, SearchRecipeResult } from "../../../service/food/interface";
import { IngredientDto, RecipeDto, RecipeSummaryDto } from "../../dto";

const mapIngredients = (ingredients: Ingredient[]): IngredientDto[] => {
    return ingredients.map(ingredient => ({
        id: ingredient.id,
        description: `${ingredient.amount} ${ingredient.unit} ${ingredient.name}`
    }))
}

export const mapRecipe = (recipe: Recipe): RecipeDto => { 
    return {
        id: recipe.id,
        title: recipe.title,
        image: recipe.image,
        vegetarian: recipe.vegetarian,
        vegan: recipe.vegan,
        glutenFree: recipe.glutenFree,
        cheap: recipe.cheap,
        instructions: recipe.instructions,
        healthScore: recipe.healthScore,
        ingredients: mapIngredients(recipe.extendedIngredients),
    }
}

export const mapSearchResult = (recipes: SearchRecipeItem[]): RecipeSummaryDto[] => {
    return recipes.map(recipe => ({
        id: recipe.id,
        title: recipe.title,
        image: recipe.image,
    }))
}