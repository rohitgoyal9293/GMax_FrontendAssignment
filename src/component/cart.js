function Cart({checkoutList}) {
  return (
    <div className="cartContainer">
      <span className="cart">Checkout {checkoutList.length} Items</span>
    </div>
  );
}

export default Cart;
