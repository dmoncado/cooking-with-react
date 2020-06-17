import React, { useContext } from 'react';
import RecipeIngredientEdit from './RecipeIngredientEdit';
import { RecipeContext } from './App'

function RecipeEdit({ recipe }) {
	const { handleRecipeChange } = useContext(RecipeContext)

	function handleChange(changes) {
		handleRecipeChange(recipe.id, { ...recipe, ...changes })
	}

	function handleIngredientChange(id, ingredient) {
		const newIngredients = [...recipe.ingredients]
		const index = newIngredients.find(i => i.id === id)
		newIngredients[index] = ingredient
		handleChange({ ingredients: newIngredients })
	}

	return (
		<div className="recipe-edit">
			<div className="recipe-edit__remove-button-container">
				<button className="btn recipe-edit__remove-button">&times;</button>
			</div>
			<div className="recipe-edit__details-grid">
				<label htmlFor="name" className="recipe-edit__label">Name</label>
				<input type="text" name="name" id="name" value={recipe.name} onInput={e => handleChange({ name: e.target.value })} className="recipe-edit__input" />

				<label htmlFor="cookTime" className="recipe-edit__label">Cook Time</label>
				<input type="text" name="cookTime" id="cookTime" value={recipe.cookTime} onInput={e => handleChange({ cookTime: e.target.value })} className="recipe-edit__input" />

				<label htmlFor="servings" className="recipe-edit__label">Servings</label>
				<input type="number" min="1" name="servings" id="servings" value={recipe.servings} onInput={e => handleChange({ servings: parseInt(e.target.value) || '' })} className="recipe-edit__input" />

				<label htmlFor="instructions" className="recipe-edit__label">Instructions</label>
				<textarea name="instructions" id="instructions" className="recipe-edit__input" value={recipe.instructions} onInput={e => handleChange({ instructions: e.target.value })} />
			</div>
			<br />
			<label className="recipe-edit__label">Ingredients</label>
			<div className="recipe-edit__ingredient-grid">
				<div>Name</div>
				<div>Amount</div>
				<div></div>
				{recipe.ingredients.map(ingredient => (
					<RecipeIngredientEdit key={ingredient.id} ingredient={ingredient} />
				))}
			</div>
			<div className="recipe-edit__add-ingredient-button-container">
				<button className="btn btn--primary">Add Ingredient</button>
			</div>
		</div>
	);
}

export default RecipeEdit;
