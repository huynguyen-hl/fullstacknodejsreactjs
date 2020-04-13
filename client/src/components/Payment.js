import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

const Payment = (props) => {
  return (
    <StripeCheckout
      name="Payment"
      description="$5 for 5 credits"
      amount={500}
      currency="USD"
      locale="auto"
      token={(token) => props.handleToken(token)}
      stripeKey={process.env.REACT_APP_STRIPE_KEY}
    >
      <button className="btn">ADD CREDITS</button>
    </StripeCheckout>
  );
};

export default connect(null, actions)(Payment);
