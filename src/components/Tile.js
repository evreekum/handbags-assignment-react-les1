import React from "react";

function Tile(props) {

    return (
        <section className="card">
            {props.children}
        </section>
    );
}
export default Tile;