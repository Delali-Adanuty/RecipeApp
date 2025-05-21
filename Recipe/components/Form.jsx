import { useState } from "react";
import IngredientsList from "./IngredientsList";
import ClaudeRecipe from "./ClaudeRecipe";
import {getRecipeFromMistral } from "../ai";

export default function Form(){
    const [ingredients, setIngredients]  = useState([]);
    const [recipe, setRecipe] = useState("")

    const listIngredients = ingredients.map((ingredient) => (
       <li key={ingredient}>{ingredient}</li>
    ))

    function addIngredient(formData){
        const newIngredient = formData.get("ingredient");
        setIngredients((prev) => [
            ...prev, newIngredient
        ])
    }


    async function getRecipe(){
        const recipeMarkdown = await getRecipeFromMistral(ingredients);
        setRecipe(recipeMarkdown)
    }

    return(
        <main>
            <form action = {addIngredient}>
                <input  
                type="text"
                placeholder="e.g. pepper"
                aria-label="Add ingredient"
                name="ingredient"
                />   
                <button>Add ingredient</button>
            </form>
            {
            listIngredients.length > 0 && 
                <IngredientsList 
                listIngredients = {listIngredients}
                handleClick = {getRecipe}
                />         
            }
            {recipe &&
                <ClaudeRecipe recipe={recipe} />
            }
        </main>
    )
}