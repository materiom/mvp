import React from "react";
import { Link } from "react-router-dom";

function IngredientsList(props) {
  const ingredientsListArray = props.ingredients.map((ingredient) => {
    return (
      // <Link to={`/ingredients/${ingredient.id}`} className="w-1/3 max-w-[33%]">
        <div key={ingredient.name} className="w-1/3 max-w-[33%] pr-5 pb-5 flex justify-start">
          <div>
            <img
              className=" max-w-full object-cover h-14 w-14 min-w-[3.5rem] min-h-[3.5rem] rounded-lg"
              src={`https://materiom.org/storage/${ingredient.thumbnail_src}`}
              alt={`${ingredient.name}`}
            />
          </div>
          <div className="h-full ml-3 flex flex-col justify-center">
            <Link to={`/ingredient/${ingredient.id}`}><h6 className=" text-MatDarkGrey text-xs">{ingredient.name}</h6></Link>
            <h6 className="text-xs">1 unit</h6>
          </div>
        </div>
      // </Link>
    );
  });

  return <div className="w-full flex flex-wrap">{ingredientsListArray}</div>;
}
export default IngredientsList;
