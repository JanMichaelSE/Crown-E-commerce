import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishKey =
    'pk_test_51HR0QiAmY19RFPVKsS3bOpjYWs8jK0WBfyedMNZuKLzodiggPrRSKaSZdNP0qTMOz7DCgw3NviRTWjAwlrav3Jqh00XJmfMu7l';

  const onToken = (token) => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        alert('Payment succesful');
      })
      .catch((error) => {
        console.log('Payment error: ', error);
        alert(
          'There was an issue with your payment. Please makle sure you use the provided credit card.'
        );
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Crown Clothing Litd."
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishKey}
    ></StripeCheckout>
  );
};

export default StripeButton;
