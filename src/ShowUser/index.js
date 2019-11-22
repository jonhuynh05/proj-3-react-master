import React from 'react'
import "./showUser.css"


function ShowUser(props){
    const userRecipes = props.userRecipes.map((recipe)=>{
        // const recipelink = `${process.env.REACT_APP_API_URL}/recipes/${recipe.id}`
        return(
            <div key = {recipe.id} id="user-recipes-col">
                {/* <a href={recipelink}>Test Link</a> */}
                <h2>{recipe.recipeName}</h2>
                <button>View Recipe</button>
            </div>
        )
    })
    return(
        <div id="show-user-container">
            <div id="welcome-row">
                <h2>Hello, {props.user.first_name}</h2>
            </div>
            <div id="your-recipes-row">
                Your Recipes:
            </div>
            <div id="user-recipes-container">
                <div id="user-recipes-row">
                    {userRecipes}
                </div>
            </div>
        </div>
    )
}

export default ShowUser