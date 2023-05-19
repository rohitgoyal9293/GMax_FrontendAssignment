function Products({productList,itemsInCart,addToCart,removeToCart}) {
    return (
        <div className="productContainer">
        {productList.map((product, i) => (
          <div className="productBlock" key={product.id}>
            <div className="productImg"></div>
            <div className="productName">{product.name}</div>
            <div className="productPrice">${product.price}</div>

            {!itemsInCart.includes(product.id) && (
              <button
                className="addToCartBtn"
                onClick={() => addToCart(product)}
              >
                Add To Cart
              </button>
            )}
            {itemsInCart.includes(product.id) && (
              <button
                className="removeToCartBtn"
                onClick={() => removeToCart(product.id)}
              >
                Remove From Cart
              </button>
            )}
          </div>
        ))}
      </div>
    );
  }
  
  export default Products