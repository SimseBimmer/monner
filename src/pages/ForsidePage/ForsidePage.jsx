import { ContentWrapper } from "../../components/ContentWrapper/ContentWrapper"
import './Forside.scss';

export const ForsidePage = () => {
    return (
        <ContentWrapper>
            <img id="HeroImage" src="/HeroImage.jpg" alt="Hero Image" />

            <div id="ProductContainer">
                {/* Product 1 */}
            <div id="Product">
                <div id="ProductContent">
                    {/* Image */}
                    <div id="ProductImage">
                        <img src="/1gold.png" alt="1gold" />
                    </div>
                    {/* Name+description */}
                    <div id="ProductName">
                        <h3>Ultra Gold</h3>
                        <p>Fresh taste of mango</p>
                    </div>
                </div>
                {/* price n'shi */}
                <div id="ProductPrice">
                    <img src="/Favsvg.svg" alt="Favorite" />
                    <p>DKK 20,00</p>
                </div>
            </div>
            </div>

        </ContentWrapper>
    )
}