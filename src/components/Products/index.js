import React from 'react';
import {
    ProductsContainer,
    ProductsH1,
    ProductsWrapper,
    ProductsCard,
    ProductsIcon,
    ProductsH2,
    ProductsP,
} from './ProductsStyled';

const Products = () => {
    return (
        <ProductsContainer>
            <ProductsH1>Our Products</ProductsH1>
            <ProductsWrapper>
                <ProductsCard>
                    <ProductsIcon src={Icon1} />
                    <ProductsH2>Cash Management</ProductsH2>
                    <ProductsP>
                        Earn 0.30% APY* on your uninvested cash and get more
                        flexibility with your brokerage account.
                    </ProductsP>
                </ProductsCard>
                <ProductsCard>
                    <ProductsIcon src={Icon2} />
                    <ProductsH2>Stocks & Funds</ProductsH2>
                    <ProductsP>
                        Get mobile access to the markets. Invest commission-free
                        in individual companies or bundles of investments
                        (ETFs).
                    </ProductsP>
                </ProductsCard>
                <ProductsCard>
                    <ProductsIcon src={Icon3} />
                    <ProductsH2>Options</ProductsH2>
                    <ProductsP>
                        Be bullish on stocks you believe in and bearish on the
                        ones you don’t. It’s your call.
                    </ProductsP>
                </ProductsCard>
            </ProductsWrapper>
        </ProductsContainer>
    );
};

export default Products;
