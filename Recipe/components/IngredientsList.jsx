export default function IngredientsList(props){
    return(
                <section className="ingredients-section">
                    <div>
                        <h2>Ingredients on hand:</h2>
                        <ul className="ingredients-list" aria-live="polite">{props.listIngredients}</ul>
                        {
                            props.listIngredients.length > 3 &&
                            <div className="get-recipe-container">
                            <div>
                                <h3>Ready for a recipe?</h3>
                                <p>Generate a recipe from your list of ingredients.</p>
                            </div>
                            <button onClick={props.handleClick}>Get a recipe</button>
                            </div>    
                        }                    
                    </div>
                </section>              
    )
}