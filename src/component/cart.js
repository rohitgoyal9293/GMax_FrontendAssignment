function Cart({checkoutList,checkout}) {
  return (
    <div className="cartContainer">
      <span onClick={checkout} className="cart">Checkout {checkoutList.length} Items</span>
    </div>
  );
}

export default Cart;
