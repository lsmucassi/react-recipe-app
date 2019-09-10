import React from 'react';
import style from './recipe.module.css';


const Recipe = ({title, calories, image, ingredients}) => {
    return (
        // <div>
        //     <h1>{title}</h1>
        //     <ol>
        //         {ingredients.map(ingredient => (
        //             <li>{ingredient.text}</li>
        //         ))}
        //     </ol>
        //     <p>{calories}</p>
        //     <img src={image} alt=""/>
        // </div>
        <div className={style.card}>
            <img src={image} alt="" />
            <div className={style.cardinfo} alt=" ">
                <div className={style.roundedbtn}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <h3>{title}</h3>
                <p>{calories}</p>
                <ul>
                    {ingredients.map(ingredient => (
                        <li>{ingredient.text}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Recipe