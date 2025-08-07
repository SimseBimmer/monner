import { ContentWrapper } from "../../components/ContentWrapper/ContentWrapper"
import './Produkter.scss';


export const ProdukterPage = () => {
    return (
        <ContentWrapper>
            <div id="ProductContainer">
                {/* Product 1 */}
                <div id="Product">
                    <div id="ProductContent">
                        <div id="ProductImage">
                            <img src="/1gold.png" alt="Ultra Gold" />
                        </div>
                        <div id="ProductName">
                            <h3>Ultra Gold</h3>
                            <p>Fresh taste of mango</p>
                        </div>
                    </div>
                    <div id="ProductPrice">
                        <img src="/Favsvg.svg" alt="Favorite" />
                        <p>DKK 20,00</p>
                    </div>
                </div>
            </div>
            <div id="ProductContainer">
                {/* Product 2 */}
                <div id="Product">
                    <div id="ProductContent">
                        <div id="ProductImage">
                            <img src="/2Watermelon.png" alt="Watermelon" />
                        </div>
                        <div id="ProductName">
                            <h3>Watermelon</h3>
                            <p>Fresh taste of Watermelon</p>
                        </div>
                    </div>
                    <div id="ProductPrice">
                        <img src="/Favsvg.svg" alt="Favorite" />
                        <p>DKK 20,00</p>
                    </div>
                </div>
            </div>
            <div id="ProductContainer">
                {/* Product 3 */}
                <div id="Product">
                    <div id="ProductContent">
                        <div id="ProductImage">
                            <img src="/3Paradise.png" alt="Paradise" />
                        </div>
                        <div id="ProductName">
                            <h3>Paradise</h3>
                            <p>Fresh taste of mango</p>
                        </div>
                    </div>
                    <div id="ProductPrice">
                        <img src="/Favsvg.svg" alt="Favorite" />
                        <p>DKK 20,00</p>
                    </div>
                </div>
            </div>
            <div id="ProductContainer">
                {/* Product 4 */}
                <div id="Product">
                    <div id="ProductContent">
                        <div id="ProductImage">
                            <img src="/4Rosa.png" alt="Ultra Rosa" />
                        </div>
                        <div id="ProductName">
                            <h3>Ultra Rosa</h3>
                            <p>Fresh taste of mango</p>
                        </div>
                    </div>
                    <div id="ProductPrice">
                        <img src="/Favsvg.svg" alt="Favorite" />
                        <p>DKK 20,00</p>
                    </div>
                </div>
            </div>
        </ContentWrapper>
    )
}