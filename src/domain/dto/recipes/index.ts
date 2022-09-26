export interface RecipeSummaryDto {
    id: number;
    title: string;
    image: string;
}

export interface IngredientDto { 
    id: number;
    description: string;
}

export interface RecipeDto {
    id: number;
    title: string;
    image: string;
    vegetarian: boolean;
    vegan: boolean;
    glutenFree: boolean;
    cheap: boolean;
    instructions: string;
    healthScore: number;
    ingredients: IngredientDto[];
}
