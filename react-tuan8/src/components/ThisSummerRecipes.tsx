import { useEffect } from "react";
import { useState } from "react";
import NewItem from "./NewItem";
import './ThisSummerRecipes.css'
export default function ThisSummerRecipes() {
    var url = 'https://67c84bd20acf98d07085e3f3.mockapi.io/recipes'
    var [recipes, setRecipes] = useState([])

    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(data => {
            setRecipes(data);
        })
    }, [])

    return (
        <div className="this-summer-receipts">
            <div className="this-summer-recipess-title">
                <h1>This Summer Recipes</h1>
                <p>We have all your independence Day sweets covered</p>
            </div>
            <div className="this-summer-recipes-list">
            {/* Thêm các công thức nấu ăn mùa hè tại đây */}
            <div className="recipes">
                {
                    recipes.map((recipe, index) => {
                    return (
                        <NewItem key={index} image={recipe.image} name={recipe.name} time={recipe.time} />
                    )
                    })
                }
            </div>
            {/* Thêm nhiều công thức khác nếu cần */}
            </div>
        </div>
    );
}