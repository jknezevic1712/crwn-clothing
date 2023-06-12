import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { clearCart } from "../../redux/cart/cart.actions";

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51Jtw7JIV7m0FYLmAdJxcwBWLupe0VyXooXWyjwLV628KMPJfo8GAOKogw7fYHAKSQQtonuh49oftp3YROk1x4qCx00HFV0JVhH";

  const onToken = () => {
    dispatch(clearCart());
    alert("Payment Successful!");

    history.replace("");
  };

  return (
    <StripeCheckout
      disabled={price == 0 ? true : false}
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
