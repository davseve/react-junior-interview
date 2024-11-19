import ProductItem from './ProductItem';
const ProductList = ( {products} ) => {
    console.log( { products } );
    return (
        <div>
            <h1>products</h1>
            {
                products.map( ( product ) => {
                    return (
                        <ProductItem
                            product={ product }
                        />
                    );
                })
            }
        </div>
    );

}

export default ProductList;