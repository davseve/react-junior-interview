const ProductItem = ({product}) => {
    return (
        <div key={product.id}>
            <h3>{ product.title }</h3>
            <p>{ product.price }</p>
        </div>
    );
}

export default ProductItem;