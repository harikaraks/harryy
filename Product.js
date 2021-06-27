import React from 'react';

export default function Product({recipe}) {
    return (
        <div className="recipeTile">
            <img className="recipeTile__img" src={recipe["recipe"]["image"]}/>
            <p>{recipe["recipe"]["label"]}</p> 
        </div>
    );
}
