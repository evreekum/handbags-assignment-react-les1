import React from "react";

function Product({redLabel, image, name, price}) {

    return (
        <article>
            <span>{redLabel}</span>
            <img src={image} alt={name}/>
            <p>{name}</p>
            <h4>€{price},-</h4>
        </article>

    );
}

export default Product;