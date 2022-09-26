export interface SearchRecipeItem {
    id: number;
    title: string;
    image: string;
}

export interface SearchRecipeResult {
    results: SearchRecipeItem[]
}

export interface Ingredient { 
    id: number;
    amount: number;
    unit: string;
    name: string;
}

export interface Recipe {
    id: number;
    title: string;
    image: string;
    vegetarian: boolean;
    vegan: boolean;
    glutenFree: boolean;
    cheap: boolean;
    instructions: string;
    healthScore: number;
    extendedIngredients: Ingredient[];
}
