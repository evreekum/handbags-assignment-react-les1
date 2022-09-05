import React from 'react';
import './App.css';
import Button from "./components/Button";
import Product from "./components/Product";
import bag_1 from "./assets/bag_1.png";
import bag_2 from "./assets/bag_2.png";
import bag_3 from "./assets/bag_3.png";
import bag_4 from "./assets/bag_4.png";
import Tile from "./components/Tile";
import brand from "./assets/brand.png";
import our_story from "./assets/our_story.png";

function App() {

    return (
        <>
            <h1>Handbags & Purses</h1>

            <nav>
                <Button
                    isDisabled={false}
                    logClick={() => console.log("This button is working")}
                    buttonTitle="to the collection"
                />
                <Button
                    isDisabled={false}
                    logClick={() => console.log("This button is working")}
                    buttonTitle="shop all bags"
                />
                <Button
                    isDisabled={true}
                    logClick={() => console.log("This button is disabled")}
                    buttonTitle="pre-orders"
                />
            </nav>

            <main>
                <Product
                    redLabel="best seller"
                    image={bag_1}
                    name="the handy bag"
                    price={400}
                />
                <Product
                    redLabel="best seller"
                    image={bag_2}
                    name="the stylish bag"
                    price={250}
                />
                <Product
                    redLabel="new collection"
                    image={bag_3}
                    name="the simple bag"
                    price={300}
                />
                <Product
                    redLabel="new collection"
                    image={bag_4}
                    name="the trendy bag"
                    price={150}
                />
            </main>

            <footer>
                <Tile>
                    <h2>the brand</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam architecto dicta dignissimos
                        dolores doloribus explicabo fuga, itaque neque nisi totam.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci aliquam, amet, aspernatur
                        dolore esse facere, fuga laborum neque nisi porro possimus qui reprehenderit repudiandae rerum
                        sint tenetur unde vero!
                    </p>
                </Tile>

                <Tile>
                    <img src={brand} alt="Brand"/>
                </Tile>

                <Tile>
                    <img src={our_story} alt="Our Story"/>
                </Tile>

                <Tile>
                    <h2>our story</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci aperiam, dicta facere hic
                        illum iure labore, nulla quisquam quo sapiente, suscipit veritatis voluptate. At commodi culpa
                        distinctio harum ipsum omnis quas, sequi? Dignissimos et, eveniet explicabo, illum iste
                        molestiae nam necessitatibus nihil pariatur quas qui quis sunt voluptates voluptatibus.
                    </p>
                </Tile>

            </footer>
        </>
    );
}

export default App;